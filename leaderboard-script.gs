/**
 * Ghosted by the Machine: The Game — Weekly Leaderboard
 *
 * Paste this whole file into Extensions → Apps Script in the
 * "Ghosted by the Machine: Weekly Leaderboard" Google Sheet, then
 * Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
 *
 * Scores land in the "Scores" tab. To remove a nickname, delete its row.
 * The board resets every Monday at 8:00 AM Eastern.
 */

const SHEET_NAME = 'Scores';
const MAX_SCORE = 3500;          // above the game's real maximum; anything higher is rejected
const TOP_N = 10;
const TZ = 'America/New_York';
const BADGES = ['The Advocate', 'The Flex Negotiator', 'The Quick Close', 'The Bold Ask', 'The Free Agent'];

// Basic nickname filter. Matching ignores case, spaces, symbols and common
// letter swaps (0→o, 1→i, 3→e, 4→a, 5→s, 7→t, @→a, $→s).
const BLOCKED = [
  'fuck', 'shit', 'bitch', 'cunt', 'dick', 'cock', 'pussy', 'asshole', 'bastard',
  'whore', 'slut', 'rape', 'porn', 'penis', 'vagina', 'nazi', 'hitler',
  'nigg', 'fag', 'retard', 'kike', 'spic', 'chink', 'tranny', 'wetback'
];

function doGet(e) {
  const p = (e && e.parameter) || {};
  try {
    if (p.action === 'submit') return json_(submit_(p));
    return json_({ ok: true, week: weekKey_(new Date()), top: top_(weekKey_(new Date())) });
  } catch (err) {
    return json_({ ok: false, error: 'Something went wrong. Please try again.' });
  }
}

function submit_(p) {
  const week = weekKey_(new Date());
  const name = String(p.name || '').replace(/\s+/g, ' ').trim();
  const score = Math.round(Number(p.score));
  const badge = BADGES.indexOf(String(p.badge || '')) >= 0 ? String(p.badge) : '';

  if (!/^[A-Za-z0-9À-ÿ ._'\-]{2,16}$/.test(name)) {
    return { ok: false, error: 'Use 2–16 letters or numbers for your nickname.' };
  }
  if (isBlocked_(name)) {
    return { ok: false, error: 'Please pick a different nickname.' };
  }
  if (!isFinite(score) || score < 0 || score > MAX_SCORE) {
    return { ok: false, error: 'That score could not be saved.' };
  }

  const key = name.toLowerCase();
  const cache = CacheService.getScriptCache();
  const rateKey = 'r:' + week + ':' + key;
  if (cache.get(rateKey)) {
    return { ok: false, error: 'You just submitted. Give it a few seconds.' };
  }

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(8000)) return { ok: false, error: 'The board is busy. Please try again.' };
  try {
    const sh = sheet_();
    const rows = sh.getDataRange().getValues();
    let found = -1, best = score;
    for (let i = 1; i < rows.length; i++) {
      if (clean_(rows[i][0]) === week && clean_(rows[i][2]).toLowerCase() === key) { found = i; break; }
    }
    const now = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm');
    if (found === -1) {
      sh.appendRow(["'" + week, now, "'" + name, score, badge]);
    } else if (score > Number(rows[found][3])) {
      sh.getRange(found + 1, 2, 1, 4).setValues([[now, "'" + name, score, badge]]);
    } else {
      best = Number(rows[found][3]);
    }
    cache.put(rateKey, '1', 10);
    const board = board_(week);
    const rank = board.findIndex(function (r) { return r.name.toLowerCase() === key; }) + 1;
    return { ok: true, week: week, top: board.slice(0, TOP_N), rank: rank, best: best, total: board.length };
  } finally {
    lock.releaseLock();
  }
}

function top_(week) { return board_(week).slice(0, TOP_N); }

function board_(week) {
  const rows = sheet_().getDataRange().getValues().slice(1);
  return rows
    .filter(function (r) { return clean_(r[0]) === week && clean_(r[2]); })
    .map(function (r) { return { name: clean_(r[2]), score: Number(r[3]) || 0, badge: clean_(r[4]), t: clean_(r[1]) }; })
    .sort(function (a, b) { return b.score - a.score || (a.t < b.t ? -1 : 1); })
    .map(function (r) { return { name: r.name, score: r.score, badge: r.badge }; });
}

// The leaderboard week starts Monday at 8:00 AM Eastern. Returns that Monday as yyyy-MM-dd.
function weekKey_(d) {
  const dow = Number(Utilities.formatDate(d, TZ, 'u'));   // 1 = Monday … 7 = Sunday
  const hour = Number(Utilities.formatDate(d, TZ, 'H'));
  let back = dow - 1;
  if (dow === 1 && hour < 8) back = 7;
  const t = new Date(Utilities.formatDate(d, TZ, 'yyyy-MM-dd') + 'T12:00:00Z');
  t.setUTCDate(t.getUTCDate() - back);
  return Utilities.formatDate(t, 'UTC', 'yyyy-MM-dd');
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.getSheets()[0];
    sh.setName(SHEET_NAME);
  }
  if (sh.getLastRow() === 0) sh.appendRow(['Week', 'Submitted', 'Nickname', 'Score', 'Badge']);
  return sh;
}

function clean_(v) {
  if (v instanceof Date) return Utilities.formatDate(v, TZ, 'yyyy-MM-dd');
  return String(v == null ? '' : v).replace(/^'/, '').trim();
}

function isBlocked_(name) {
  const n = name.toLowerCase()
    .replace(/0/g, 'o').replace(/[1!|]/g, 'i').replace(/3/g, 'e').replace(/[4@]/g, 'a')
    .replace(/[5$]/g, 's').replace(/7/g, 't').replace(/[^a-z]/g, '');
  return BLOCKED.some(function (w) { return n.indexOf(w) >= 0; });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Optional: run once from the editor to test. Check the Scores tab, then delete the test row.
function testSubmit() {
  Logger.log(JSON.stringify(submit_({ name: 'Test Player', score: '1234', badge: 'The Advocate' })));
}
