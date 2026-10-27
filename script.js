/* =========================================================
   script.js  —  the "brain" of SWS Suraksha Bot
   1. ASK:     the user types, speaks or taps a button
   2. ANALYSE: we look for red-flag keywords
   3. WARN:    we show the verdict, reason, what to do + 1930
   ========================================================= */

// ---------- Get the parts of the page we need ----------
const chat      = document.getElementById("chat");
const chips     = document.getElementById("chips");
const userInput = document.getElementById("userInput");
const sendBtn   = document.getElementById("sendBtn");
const micBtn    = document.getElementById("micBtn");
const attachBtn = document.getElementById("attachBtn");
const fileInput = document.getElementById("fileInput");

let lang = "en";   // current language: "en", "hi" or "pa"

// School logo file (keep school-logo.png in the same folder as index.html)
const SCHOOL_LOGO = "school-logo.png";

// Language codes used by the phone's voice system
const VOICE_CODE = { en: "en-IN", hi: "hi-IN", pa: "pa-IN" };
const SHORT_NAME = { en: "EN", hi: "हिं", pa: "ਪੰ" };


/* =========== 1. SHOWING MESSAGES =========== */

// Add the user's message (right side)
// save = false means "don't put it in history" (used when we reload old history)
function addUserMessage(text, save) {
  const row = document.createElement("div");
  row.className = "msg user";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;          // textContent is safe: no code can run
  row.appendChild(bubble);
  chat.appendChild(row);
  scrollDown();
  if (save !== false) remember({ from: "user", text: text });
}

// Add a picture the user attached
function addUserImage(src) {
  const row = document.createElement("div");
  row.className = "msg user";
  row.innerHTML = '<div class="bubble"><img alt="Attached picture"></div>';
  row.querySelector("img").src = src;
  chat.appendChild(row);
  scrollDown();
}

// Add a bot message (left side).
// item = { key: "greet" }  for normal text
// item = { scenario: {...} }  for a scam card
function addBotMessage(item, save) {
  const row = document.createElement("div");
  row.className = "msg bot";
  // School logo next to every bot message
  const avatar = document.createElement("img");
  avatar.src = SCHOOL_LOGO;
  avatar.alt = "";
  avatar.className = "avatar";
  row.appendChild(avatar);
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  if (item.key === "warning" || item.key === "pinAlert") bubble.className += " pin-warning";
  row.appendChild(bubble);
  chat.appendChild(row);
  showInLanguage(bubble, item, lang);
  scrollDown();
  if (save !== false) {
    if (item.scenario) remember({ from: "bot", id: item.scenario.id, v: item.v });
    else               remember({ from: "bot", key: item.key, n: item.n });
  }
}

/* ---------- VARIETY: pick a different line each time ---------- */
// We count how many times each list was used (saved on this phone),
// so the next answer always takes the NEXT line instead of repeating.
const TURNS_KEY = "sws-suraksha-turns";
let turns = {};
try { turns = JSON.parse(localStorage.getItem(TURNS_KEY)) || {}; } catch (e) {}

function nextIndex(name, length) {
  const n = turns[name] || 0;
  turns[name] = n + 1;
  try { localStorage.setItem(TURNS_KEY, JSON.stringify(turns)); } catch (e) {}
  return n % length;
}

// Get line number i of a TEXT key that has extra versions (slot 0 = normal TEXT line)
function variantText(key, l, i) {
  const list = VARIANTS[key] && VARIANTS[key][l];
  if (!list || !i) return TEXT[l][key];
  return list[i % list.length] || TEXT[l][key];
}

// Has this situation already been answered in the open chat?
function askedBefore(id) {
  const c = currentChat();
  return !!(c && c.messages.some(function (m) { return m.id === id; }));
}

// Build a scam card with fresh choices: opener, fact and tip
function makeScenarioItem(s) {
  const facts = FACTS[s.id] ? FACTS[s.id].en.length : 0;
  return {
    scenario: s,
    v: {
      o: nextIndex("open-" + s.verdict, OPENERS[s.verdict].en.length),
      f: facts ? nextIndex("fact-" + s.id, facts) : -1,
      t: nextIndex("tip", VARIANTS.tip.en.length),
      again: askedBefore(s.id)
    }
  };
}

// Fill a bot bubble in the chosen language (this is our translate feature)
function showInLanguage(bubble, item, l) {
  let html = "";

  if (item.scenario) {
    const s = item.scenario;
    const v = item.v || { o: 0, f: 0, t: 0 };   // old history entries have no choices saved
    const opener = v.again ? TEXT[l].again : OPENERS[s.verdict][l][v.o % OPENERS[s.verdict][l].length];
    html += '<div class="say">';
    html +=   '<span class="stamp ' + s.verdict + '">' + TEXT[l][s.verdict] + '</span>';
    html +=   '<p class="opener">' + opener + '</p>';
    html +=   '<h2 class="card-title">' + s.icon + " " + s.title[l] + '</h2>';
    const fact = (FACTS[s.id] && v.f >= 0)
      ? '<p class="fact"><b>' + TEXT[l].didYouKnow + '</b> ' + FACTS[s.id][l][v.f % FACTS[s.id][l].length] + '</p>'
      : "";
    if (v.again) {
      // Asked again: skip the "Why?" they already read, show the new fact first
      html += fact;
      html += '<p><b>' + TEXT[l].todo + '</b> ' + s.todo[l] + '</p>';
    } else {
      html += '<p><b>' + TEXT[l].why + '</b> ' + s.reason[l] + '</p>';
      html += '<p><b>' + TEXT[l].todo + '</b> ' + s.todo[l] + '</p>';
      html += fact;
    }
    if (s.verdict === "scam") {
      html += '<p class="tip">' + variantText("tip", l, v.t) + '</p>';   // a different safety tip each time
    }
    html += '</div>';
    if (s.verdict !== "safe") {
      html += '<p class="helpline">📞 ' + TEXT[l].helpline + '</p>';
    }
  } else {
    html += '<p class="say">' + variantText(item.key, l, item.n) + '</p>';
  }

  // Buttons: Listen + EN / हिं / ਪੰ
  html += '<div class="tools"><button class="speak">' + TEXT[l].listen + '</button>';
  for (const code of ["en", "hi", "pa"]) {
    const on = (code === l) ? " on" : "";
    html += '<button class="tr' + on + '" data-to="' + code + '">' + SHORT_NAME[code] + '</button>';
  }
  html += '</div>';

  bubble.innerHTML = html;

  // When a language button is tapped, show this same reply in that language
  bubble.querySelectorAll(".tr").forEach(function (btn) {
    btn.onclick = function () { showInLanguage(bubble, item, btn.dataset.to); };
  });
  // When Listen is tapped, read the reply aloud
  bubble.querySelector(".speak").onclick = function () {
    speak(bubble.querySelector(".say").innerText, l);
  };
}

// Show "..." for a moment, then the bot replies (feels more natural)
function botReply(items) {
  const row = document.createElement("div");
  row.className = "msg bot";
  row.innerHTML = '<div class="bubble dots"><span></span><span></span><span></span></div>';
  chat.appendChild(row);
  scrollDown();

  setTimeout(function () {
    row.remove();
    items.forEach(function (item) { addBotMessage(item); });
  }, 600);
}

function scrollDown() {
  chat.scrollTop = chat.scrollHeight;
}


/* =========== 2. THE BRAIN: finding the scam =========== */

// Give 1 point for each keyword found. The scenario with most points wins.
function findScenario(text) {
  text = text.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const s of SCENARIOS) {
    let score = 0;
    for (const word of s.keywords) {
      if (text.includes(word.toLowerCase())) score++;
    }
    if (score > bestScore) {
      best = s;
      bestScore = score;
    }
  }
  return best;   // null if nothing matched
}

// Hide numbers that could be a PIN, OTP, phone or account number
function hideSecrets(text) {
  let found = false;
  const talksAboutPin = /otp|pin|ओटीपी|पिन|ਓਟੀਪੀ|ਪਿੰਨ/i.test(text);

  // 9 or more digits = phone / account / card number
  text = text.replace(/\d[\d\s-]{7,}\d/g, function () { found = true; return "••••••"; });

  // 4 to 6 digits next to the word OTP or PIN
  if (talksAboutPin) {
    text = text.replace(/\b\d{4,6}\b/g, function () { found = true; return "••••"; });
  }
  return { text: text, found: found };
}

// Main function: runs every time the user sends something
function handleUserText(raw) {
  if (raw.trim() === "") return;

  const safe = hideSecrets(raw);
  addUserMessage(safe.text);

  const replies = [];
  if (safe.found) replies.push({ key: "pinAlert" });

  const s = findScenario(safe.text);
  if (s) replies.push(makeScenarioItem(s));
  else   replies.push({ key: "notSure", n: nextIndex("notSure", VARIANTS.notSure.en.length) });

  botReply(replies);
}


/* =========== 3. BUTTONS AND INPUTS =========== */

// Send button and Enter key
sendBtn.onclick = function () {
  handleUserText(userInput.value);
  userInput.value = "";
  userInput.focus();
};
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendBtn.onclick();
});

// Quick buttons for the 18 situations
function drawChips() {
  chips.innerHTML = "";
  SCENARIOS.forEach(function (s) {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = s.icon + " " + s.title[lang];
    b.onclick = function () {
      const item = makeScenarioItem(s);   // decide before the question is saved
      addUserMessage(s.title[lang]);
      botReply([item]);
    };
    chips.appendChild(b);
  });
}

// Language buttons at the top
document.querySelectorAll(".lang-btn").forEach(function (btn) {
  btn.onclick = function () { setLanguage(btn.dataset.lang); };
});

function setLanguage(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === l);
  });
  // Change every element that has data-t="..."
  document.querySelectorAll("[data-t]").forEach(function (el) {
    el.textContent = TEXT[l][el.dataset.t];
  });
  userInput.placeholder = TEXT[l].placeholder;
  drawChips();
}


/* =========== 4. ATTACHMENT =========== */
attachBtn.onclick = function () { fileInput.click(); };

fileInput.onchange = function () {
  const file = fileInput.files[0];
  if (!file) return;

  if (file.type.startsWith("image/")) {
    // Show the picture only on this phone. It is NOT uploaded anywhere.
    addUserImage(URL.createObjectURL(file));
    remember({ from: "user", text: "📎 🖼️" });   // we save only a note, never the picture
    botReply([{ key: "attachImage" }]);
  } else if (file.name.endsWith(".txt")) {
    // Read a text file and check it like a typed message
    file.text().then(function (words) { handleUserText(words.slice(0, 600)); });
  } else {
    botReply([{ key: "attachOther" }]);
  }
  fileInput.value = "";   // so the same file can be picked again
};


/* =========== 5. VOICE: speak to the bot =========== */
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

micBtn.onclick = function () {
  if (!SpeechRec) { botReply([{ key: "noMic" }]); return; }

  const rec = new SpeechRec();
  rec.lang = VOICE_CODE[lang];           // listen in the chosen language
  rec.interimResults = false;

  rec.onstart  = function () {
    micBtn.classList.add("listening");
    userInput.placeholder = TEXT[lang].listening;
  };
  rec.onresult = function (e) { handleUserText(e.results[0][0].transcript); };
  rec.onerror  = function () { botReply([{ key: "micError" }]); };
  rec.onend    = function () {
    micBtn.classList.remove("listening");
    userInput.placeholder = TEXT[lang].placeholder;
  };
  rec.start();
};


/* =========== 6. VOICE: the bot reads aloud =========== */
function speak(text, l) {
  if (!("speechSynthesis" in window)) { botReply([{ key: "noVoice" }]); return; }
  speechSynthesis.cancel();   // stop anything already speaking

  const code = VOICE_CODE[l];
  const voices = speechSynthesis.getVoices();
  const voice = voices.find(function (v) { return v.lang.replace("_", "-") === code; })
             || voices.find(function (v) { return v.lang.startsWith(l); });

  if (voices.length > 0 && !voice) { botReply([{ key: "noVoice" }]); return; }

  const talk = new SpeechSynthesisUtterance(text);
  talk.lang = code;
  if (voice) talk.voice = voice;
  talk.rate = 0.95;
  speechSynthesis.speak(talk);
}
// Some phones load voices late; this asks for them early
if ("speechSynthesis" in window) speechSynthesis.getVoices();


/* =========== 7. HISTORY (saved only on this phone) =========== */
// localStorage is a small box inside the browser that keeps data after closing.
// We save every chat with the bot. Each chat is a list of messages.
// We only save the hidden (••••) version of messages, never pictures.
const HISTORY_KEY = "sws-suraksha-chats";
let allChats = loadChats();     // [ { id, time, messages: [...] }, ... ]
let currentId = allChats.length > 0 ? allChats[allChats.length - 1].id : null;

function loadChats() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch (e) {
    return [];   // if the browser blocks storage, start empty
  }
}

function saveChats() {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(allChats)); } catch (e) {}
}

// Find the chat that is open right now
function currentChat() {
  return allChats.find(function (c) { return c.id === currentId; });
}

// Add one message to the open chat (a new chat is made on the first message)
function remember(entry) {
  let c = currentChat();
  if (!c) {
    currentId = Date.now();
    c = { id: currentId, time: Date.now(), messages: [] };
    allChats.push(c);
    if (allChats.length > 50) allChats.shift();   // keep only the newest 50 chats
  }
  c.messages.push(entry);
  saveChats();
}

// Show all messages of the open chat on the screen
function showChat() {
  chat.innerHTML = "";
  startChat();
  const c = currentChat();
  if (!c) return;
  c.messages.forEach(function (m) {
    if (m.from === "user") {
      addUserMessage(m.text, false);
    } else if (m.id) {
      const s = SCENARIOS.find(function (x) { return x.id === m.id; });
      if (s) addBotMessage({ scenario: s, v: m.v }, false);
    } else {
      addBotMessage({ key: m.key, n: m.n }, false);
    }
  });
}

// ----- Clear chat: empty the screen, but KEEP it in history -----
document.getElementById("clearBtn").onclick = function () {
  const hadChat = currentChat();
  currentId = null;              // the next message starts a new chat
  chat.innerHTML = "";
  startChat();
  if (hadChat) addBotMessage({ key: "cleared" }, false);
};

// ----- History: list of past chats with the bot -----
const historyPanel = document.getElementById("historyPanel");
const historyList  = document.getElementById("historyList");
const confirmBox   = document.getElementById("confirmBox");
const LOCALE = { en: "en-IN", hi: "hi-IN", pa: "pa-IN" };

document.getElementById("historyBtn").onclick = function () {
  historyList.innerHTML = "";
  confirmBox.hidden = true;

  if (allChats.length === 0) {
    historyList.innerHTML = '<p class="history-empty">' + TEXT[lang].noHistory + '</p>';
  }

  // newest chat first
  allChats.slice().reverse().forEach(function (c) {
    const userMsgs = c.messages.filter(function (m) { return m.from === "user"; });
    const item = document.createElement("button");
    item.className = "list-group-item list-group-item-action history-item";
    if (c.id === currentId) item.className += " active-chat";

    // Title = the first question in that chat
    const title = document.createElement("span");
    title.className = "d-block text-truncate";
    title.textContent = userMsgs.length ? userMsgs[0].text : "…";
    item.appendChild(title);

    const info = document.createElement("small");
    info.textContent = new Date(c.time).toLocaleString(LOCALE[lang]) +
                       "  |  " + userMsgs.length + " " + TEXT[lang].questions;
    item.appendChild(info);

    // Tap a chat to open it again
    item.onclick = function () {
      currentId = c.id;
      historyPanel.hidden = true;
      showChat();
    };
    historyList.appendChild(item);
  });

  historyPanel.hidden = false;
};

document.getElementById("closeHistory").onclick = function () {
  historyPanel.hidden = true;
};

// ----- Delete all history (inside the History panel, asks first) -----
document.getElementById("deleteAllBtn").onclick = function () { confirmBox.hidden = false; };
document.getElementById("noClear").onclick      = function () { confirmBox.hidden = true; };

document.getElementById("yesClear").onclick = function () {
  allChats = [];
  currentId = null;
  try { localStorage.removeItem(HISTORY_KEY); } catch (e) {}
  confirmBox.hidden = true;
  historyPanel.hidden = true;
  chat.innerHTML = "";
  startChat();
  showPopup("historyDeleted");   // pop-up, not a chat message
};

// ----- Pop-up message: appears at the bottom and hides after 3 seconds -----
let popupTimer;
function showPopup(key) {
  const popup = document.getElementById("popup");
  popup.textContent = "✅ " + TEXT[lang][key];
  popup.hidden = false;
  clearTimeout(popupTimer);
  popupTimer = setTimeout(function () { popup.hidden = true; }, 3000);
}


/* =========== START =========== */
function startChat() {
  addBotMessage({ key: "greet", n: nextIndex("greet", VARIANTS.greet.en.length) }, false);
  addBotMessage({ key: "warning" }, false);   // the PIN/OTP reminder the rules ask for, inside the chat
}

setLanguage("en");
showChat();     // opens the last chat (or a fresh one)
