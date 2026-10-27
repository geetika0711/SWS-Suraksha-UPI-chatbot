/* =========================================================
   data.js  —  ALL the words the bot says live in this file.
   To add a new scam: copy one { ... } block in SCENARIOS,
   change the id, keywords and the 3 language texts.
   Sources: RBI "BE(A)WARE" booklet, cybercrime.gov.in,
   NPCI safety tips, Punjab Police cyber advisories.
   ========================================================= */

// Words used on the screen, in 3 languages
const TEXT = {
  en: {
    subtitle: "Your UPI safety coach",
    history: "🕘 History",
    clear: "🧹 Clear chat",
    historyTitle: "Your past chats",
    historyNote: "Saved only on this phone. Tap a chat to open it.",
    noHistory: "No saved chats yet. Your chats with the bot will be saved here.",
    confirmClear: "Delete all your chat history from this phone?",
    deleteAll: "🗑️ Delete all history",
    historyDeleted: "All history deleted.",
    questions: "questions",
    yesDelete: "Yes, delete",
    cancel: "Cancel",
    close: "Close",
    cleared: "Chat cleared. Your old chat is saved in History.",
    warning: "Never type your real PIN or OTP here.",
    placeholder: "Describe what happened…",
    chipsLabel: "Common situations",
    greet: "Namaste! I'm SWS Suraksha Bot. Tell me about a suspicious call, message or payment request, and I'll tell you if it's a scam, why, and what to do next. You can type, speak with the 🎤 button, or tap a situation below.",
    why: "Why?",
    todo: "What to do next:",
    didYouKnow: "🔎 Did you know?",
    again: "🔁 You asked about this before, so here is something new for you:",
    tip: "💡 Stay safe: Never share your UPI PIN or OTP with anyone. Stop and talk to a parent, teacher or your bank before you take any step.",
    helpline: 'Call <a href="tel:1930">1930</a> or report at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener">cybercrime.gov.in</a>',
    scam: "SCAM",
    safe: "SAFE",
    help: "ACT NOW",
    listen: "🔊 Listen",
    notSure: "I'm not sure yet. Tell me a bit more: who contacted you, and did they ask for your PIN, OTP, a QR scan, an app download or money? Remember: your UPI PIN is only needed to SEND money, never to receive it.",
    pinAlert: "Stop! That looks like a PIN, OTP, phone or account number, so I hid it. Never share these numbers with anyone, not even with me.",
    attachImage: "I got your picture. I can't read pictures yet, so tap the situation below that matches it, or type what it says. Make sure the picture doesn't show your PIN, OTP or card number.",
    attachOther: "I can only open pictures or .txt files. Please type what the message says.",
    listening: "Listening… speak now",
    noMic: "Voice typing works in Google Chrome on Android or a computer. Please type instead.",
    micError: "I couldn't hear you. Check the microphone permission and try again.",
    noVoice: "This device has no voice for this language. Try Google Chrome, or add the voice in your phone's settings."
  },
  hi: {
    subtitle: "आपका UPI सुरक्षा साथी",
    history: "🕘 इतिहास",
    clear: "🧹 चैट साफ़ करें",
    historyTitle: "आपकी पिछली चैट",
    historyNote: "सिर्फ इसी फ़ोन में सेव है। चैट खोलने के लिए उस पर टैप करें।",
    noHistory: "अभी कोई चैट सेव नहीं है। बॉट के साथ आपकी चैट यहाँ सेव होंगी।",
    confirmClear: "क्या इस फ़ोन से पूरी चैट हिस्ट्री मिटा दें?",
    deleteAll: "🗑️ पूरा इतिहास मिटाएं",
    historyDeleted: "पूरा इतिहास मिटा दिया गया।",
    questions: "सवाल",
    yesDelete: "हाँ, मिटाएं",
    cancel: "रहने दें",
    close: "बंद करें",
    cleared: "चैट साफ़ हो गई। आपकी पुरानी चैट इतिहास में सेव है।",
    warning: "यहाँ कभी अपना असली PIN या OTP न लिखें।",
    placeholder: "बताइए क्या हुआ…",
    chipsLabel: "आम स्थितियाँ",
    greet: "नमस्ते! मैं SWS सुरक्षा बॉट हूँ। किसी शक वाली कॉल, मैसेज या पेमेंट रिक्वेस्ट के बारे में बताइए, मैं बताऊँगा कि यह ठगी है या नहीं, क्यों, और आगे क्या करें। आप लिख सकते हैं, 🎤 बटन से बोल सकते हैं, या नीचे कोई स्थिति चुन सकते हैं।",
    why: "क्यों?",
    todo: "आगे क्या करें:",
    didYouKnow: "🔎 क्या आप जानते हैं?",
    again: "🔁 आपने यह पहले भी पूछा था, इसलिए इस बार कुछ नया:",
    tip: "💡 सुरक्षित रहें: अपना UPI PIN या OTP किसी को न बताएं। कोई भी कदम उठाने से पहले रुकें और माता-पिता, शिक्षक या बैंक से बात करें।",
    helpline: '<a href="tel:1930">1930</a> पर फ़ोन करें या <a href="https://cybercrime.gov.in" target="_blank" rel="noopener">cybercrime.gov.in</a> पर शिकायत करें',
    scam: "ठगी",
    safe: "सुरक्षित",
    help: "तुरंत करें",
    listen: "🔊 सुनें",
    notSure: "मुझे अभी पक्का नहीं पता। थोड़ा और बताइए: किसने संपर्क किया, और क्या उन्होंने PIN, OTP, QR स्कैन, ऐप डाउनलोड या पैसे मांगे? याद रखें: UPI PIN सिर्फ पैसे भेजने के लिए होता है, पैसे लेने के लिए कभी नहीं।",
    pinAlert: "रुकिए! यह PIN, OTP, फ़ोन या खाता नंबर जैसा लगता है, इसलिए मैंने इसे छिपा दिया। ये नंबर किसी को न बताएं, मुझे भी नहीं।",
    attachImage: "आपकी फोटो मिल गई। मैं अभी फोटो पढ़ नहीं सकता, इसलिए नीचे मिलती-जुलती स्थिति चुनें या लिखें कि उसमें क्या लिखा है। ध्यान रखें कि फोटो में आपका PIN, OTP या कार्ड नंबर न दिखे।",
    attachOther: "मैं सिर्फ फोटो या .txt फ़ाइल खोल सकता हूँ। कृपया मैसेज लिखकर बताइए।",
    listening: "सुन रहा हूँ… अब बोलिए",
    noMic: "बोलकर लिखना Android या कंप्यूटर पर Google Chrome में चलता है। कृपया लिखकर बताइए।",
    micError: "मैं आपकी आवाज़ नहीं सुन पाया। माइक की अनुमति देखें और फिर कोशिश करें।",
    noVoice: "इस फ़ोन में इस भाषा की आवाज़ नहीं है। Google Chrome आज़माएं या फ़ोन की सेटिंग में आवाज़ जोड़ें।"
  },
  pa: {
    subtitle: "ਤੁਹਾਡਾ UPI ਸੁਰੱਖਿਆ ਸਾਥੀ",
    history: "🕘 ਇਤਿਹਾਸ",
    clear: "🧹 ਚੈਟ ਸਾਫ਼ ਕਰੋ",
    historyTitle: "ਤੁਹਾਡੀਆਂ ਪਿਛਲੀਆਂ ਚੈਟਾਂ",
    historyNote: "ਸਿਰਫ਼ ਇਸੇ ਫ਼ੋਨ ਵਿੱਚ ਸੇਵ ਹੈ। ਚੈਟ ਖੋਲ੍ਹਣ ਲਈ ਉਸ ਉੱਤੇ ਟੈਪ ਕਰੋ।",
    noHistory: "ਹਾਲੇ ਕੋਈ ਚੈਟ ਸੇਵ ਨਹੀਂ ਹੈ। ਬੋਟ ਨਾਲ ਤੁਹਾਡੀਆਂ ਚੈਟਾਂ ਇੱਥੇ ਸੇਵ ਹੋਣਗੀਆਂ।",
    confirmClear: "ਕੀ ਇਸ ਫ਼ੋਨ ਤੋਂ ਸਾਰੀ ਚੈਟ ਹਿਸਟਰੀ ਮਿਟਾ ਦੇਈਏ?",
    deleteAll: "🗑️ ਸਾਰਾ ਇਤਿਹਾਸ ਮਿਟਾਓ",
    historyDeleted: "ਸਾਰਾ ਇਤਿਹਾਸ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ।",
    questions: "ਸਵਾਲ",
    yesDelete: "ਹਾਂ, ਮਿਟਾਓ",
    cancel: "ਰਹਿਣ ਦਿਓ",
    close: "ਬੰਦ ਕਰੋ",
    cleared: "ਚੈਟ ਸਾਫ਼ ਹੋ ਗਈ। ਤੁਹਾਡੀ ਪੁਰਾਣੀ ਚੈਟ ਇਤਿਹਾਸ ਵਿੱਚ ਸੇਵ ਹੈ।",
    warning: "ਇੱਥੇ ਕਦੇ ਵੀ ਆਪਣਾ ਅਸਲੀ PIN ਜਾਂ OTP ਨਾ ਲਿਖੋ।",
    placeholder: "ਦੱਸੋ ਕੀ ਹੋਇਆ…",
    chipsLabel: "ਆਮ ਹਾਲਾਤ",
    greet: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ SWS ਸੁਰੱਖਿਆ ਬੋਟ ਹਾਂ। ਕਿਸੇ ਸ਼ੱਕੀ ਕਾਲ, ਮੈਸੇਜ ਜਾਂ ਪੇਮੈਂਟ ਰਿਕੁਐਸਟ ਬਾਰੇ ਦੱਸੋ, ਮੈਂ ਦੱਸਾਂਗਾ ਕਿ ਇਹ ਠੱਗੀ ਹੈ ਜਾਂ ਨਹੀਂ, ਕਿਉਂ, ਅਤੇ ਅੱਗੇ ਕੀ ਕਰਨਾ ਹੈ। ਤੁਸੀਂ ਲਿਖ ਸਕਦੇ ਹੋ, 🎤 ਬਟਨ ਨਾਲ ਬੋਲ ਸਕਦੇ ਹੋ, ਜਾਂ ਹੇਠਾਂ ਕੋਈ ਹਾਲਤ ਚੁਣ ਸਕਦੇ ਹੋ।",
    why: "ਕਿਉਂ?",
    todo: "ਅੱਗੇ ਕੀ ਕਰੀਏ:",
    didYouKnow: "🔎 ਕੀ ਤੁਸੀਂ ਜਾਣਦੇ ਹੋ?",
    again: "🔁 ਤੁਸੀਂ ਇਹ ਪਹਿਲਾਂ ਵੀ ਪੁੱਛਿਆ ਸੀ, ਇਸ ਲਈ ਇਸ ਵਾਰ ਕੁਝ ਨਵਾਂ:",
    tip: "💡 ਸੁਰੱਖਿਅਤ ਰਹੋ: ਆਪਣਾ UPI PIN ਜਾਂ OTP ਕਿਸੇ ਨੂੰ ਨਾ ਦੱਸੋ। ਕੋਈ ਵੀ ਕਦਮ ਚੁੱਕਣ ਤੋਂ ਪਹਿਲਾਂ ਰੁਕੋ ਅਤੇ ਮਾਪਿਆਂ, ਅਧਿਆਪਕ ਜਾਂ ਬੈਂਕ ਨਾਲ ਗੱਲ ਕਰੋ।",
    helpline: '<a href="tel:1930">1930</a> ਉੱਤੇ ਫ਼ੋਨ ਕਰੋ ਜਾਂ <a href="https://cybercrime.gov.in" target="_blank" rel="noopener">cybercrime.gov.in</a> ਉੱਤੇ ਸ਼ਿਕਾਇਤ ਕਰੋ',
    scam: "ਠੱਗੀ",
    safe: "ਸੁਰੱਖਿਅਤ",
    help: "ਤੁਰੰਤ ਕਰੋ",
    listen: "🔊 ਸੁਣੋ",
    notSure: "ਮੈਨੂੰ ਹਾਲੇ ਪੱਕਾ ਨਹੀਂ ਪਤਾ। ਥੋੜ੍ਹਾ ਹੋਰ ਦੱਸੋ: ਕਿਸ ਨੇ ਸੰਪਰਕ ਕੀਤਾ, ਅਤੇ ਕੀ ਉਨ੍ਹਾਂ ਨੇ PIN, OTP, QR ਸਕੈਨ, ਐਪ ਡਾਊਨਲੋਡ ਜਾਂ ਪੈਸੇ ਮੰਗੇ? ਯਾਦ ਰੱਖੋ: UPI PIN ਸਿਰਫ਼ ਪੈਸੇ ਭੇਜਣ ਲਈ ਹੁੰਦਾ ਹੈ, ਪੈਸੇ ਲੈਣ ਲਈ ਕਦੇ ਨਹੀਂ।",
    pinAlert: "ਰੁਕੋ! ਇਹ PIN, OTP, ਫ਼ੋਨ ਜਾਂ ਖਾਤਾ ਨੰਬਰ ਵਰਗਾ ਲੱਗਦਾ ਹੈ, ਇਸ ਲਈ ਮੈਂ ਇਸਨੂੰ ਲੁਕਾ ਦਿੱਤਾ। ਇਹ ਨੰਬਰ ਕਿਸੇ ਨੂੰ ਨਾ ਦੱਸੋ, ਮੈਨੂੰ ਵੀ ਨਹੀਂ।",
    attachImage: "ਤੁਹਾਡੀ ਫ਼ੋਟੋ ਮਿਲ ਗਈ। ਮੈਂ ਹਾਲੇ ਫ਼ੋਟੋ ਪੜ੍ਹ ਨਹੀਂ ਸਕਦਾ, ਇਸ ਲਈ ਹੇਠਾਂ ਮਿਲਦੀ-ਜੁਲਦੀ ਹਾਲਤ ਚੁਣੋ ਜਾਂ ਲਿਖੋ ਕਿ ਉਸ ਵਿੱਚ ਕੀ ਲਿਖਿਆ ਹੈ। ਧਿਆਨ ਰੱਖੋ ਕਿ ਫ਼ੋਟੋ ਵਿੱਚ ਤੁਹਾਡਾ PIN, OTP ਜਾਂ ਕਾਰਡ ਨੰਬਰ ਨਾ ਦਿਸੇ।",
    attachOther: "ਮੈਂ ਸਿਰਫ਼ ਫ਼ੋਟੋ ਜਾਂ .txt ਫ਼ਾਈਲ ਖੋਲ੍ਹ ਸਕਦਾ ਹਾਂ। ਕਿਰਪਾ ਕਰਕੇ ਮੈਸੇਜ ਲਿਖ ਕੇ ਦੱਸੋ।",
    listening: "ਸੁਣ ਰਿਹਾ ਹਾਂ… ਹੁਣ ਬੋਲੋ",
    noMic: "ਬੋਲ ਕੇ ਲਿਖਣਾ Android ਜਾਂ ਕੰਪਿਊਟਰ ਉੱਤੇ Google Chrome ਵਿੱਚ ਚੱਲਦਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਲਿਖ ਕੇ ਦੱਸੋ।",
    micError: "ਮੈਂ ਤੁਹਾਡੀ ਆਵਾਜ਼ ਨਹੀਂ ਸੁਣ ਸਕਿਆ। ਮਾਈਕ ਦੀ ਇਜਾਜ਼ਤ ਵੇਖੋ ਅਤੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    noVoice: "ਇਸ ਫ਼ੋਨ ਵਿੱਚ ਇਸ ਭਾਸ਼ਾ ਦੀ ਆਵਾਜ਼ ਨਹੀਂ ਹੈ। Google Chrome ਵਰਤ ਕੇ ਵੇਖੋ ਜਾਂ ਫ਼ੋਨ ਦੀ ਸੈਟਿੰਗ ਵਿੱਚ ਆਵਾਜ਼ ਜੋੜੋ।"
  }
};

/* The 16 scam scenarios + 2 extra helpers ("lost money" and "safe way").
   verdict can be: "scam", "safe" or "help".
   keywords: words in English, Hinglish, Hindi and Punjabi.
   The bot gives 1 point for every keyword it finds. Most points wins. */
const SCENARIOS = [
  {
    id: "refund", icon: "↩️", verdict: "scam",
    keywords: ["refund", "रिफंड", "ਰਿਫੰਡ", "return my money", "cancel order", "order cancel", "delivery"],
    title: { en: "Fake refund call", hi: "नकली रिफंड कॉल", pa: "ਨਕਲੀ ਰਿਫੰਡ ਕਾਲ" },
    reason: {
      en: "Real refunds come back on their own. No company asks you to scan a QR code or enter your PIN to get a refund.",
      hi: "असली रिफंड अपने आप आता है। कोई भी कंपनी रिफंड के लिए QR स्कैन करने या PIN डालने को नहीं कहती।",
      pa: "ਅਸਲੀ ਰਿਫੰਡ ਆਪਣੇ ਆਪ ਆਉਂਦਾ ਹੈ। ਕੋਈ ਵੀ ਕੰਪਨੀ ਰਿਫੰਡ ਲਈ QR ਸਕੈਨ ਕਰਨ ਜਾਂ PIN ਪਾਉਣ ਲਈ ਨਹੀਂ ਕਹਿੰਦੀ।"
    },
    todo: {
      en: "Cut the call. Check your refund only inside the official app. Never enter your PIN.",
      hi: "कॉल काट दें। रिफंड सिर्फ असली ऐप में चेक करें। कभी PIN न डालें।",
      pa: "ਕਾਲ ਕੱਟ ਦਿਓ। ਰਿਫੰਡ ਸਿਰਫ਼ ਅਸਲੀ ਐਪ ਵਿੱਚ ਚੈੱਕ ਕਰੋ। ਕਦੇ ਵੀ PIN ਨਾ ਪਾਓ।"
    }
  },
  {
    id: "qr", icon: "🔳", verdict: "scam",
    keywords: ["qr", "scan", "स्कैन", "ਸਕੈਨ", "क्यूआर", "ਕਿਊਆਰ", "receive money", "पैसे लेने", "ਪੈਸੇ ਲੈਣ"],
    title: { en: "QR code 'to receive money'", hi: "'पैसे लेने' वाला QR कोड", pa: "'ਪੈਸੇ ਲੈਣ' ਵਾਲਾ QR ਕੋਡ" },
    reason: {
      en: "Scammers trick people into scanning a QR code 'to receive money', but scanning it and entering your PIN actually SENDS money from your account. Scanning a QR code is only for sending money. You never need a QR or PIN to receive money.",
      hi: "ठग 'पैसे लेने' के नाम पर QR कोड स्कैन करवाते हैं, लेकिन स्कैन करके PIN डालने से असल में आपके खाते से पैसे चले जाते हैं। QR स्कैन सिर्फ पैसे भेजने के लिए होता है। पैसे लेने के लिए QR या PIN की ज़रूरत नहीं होती।",
      pa: "ਠੱਗ 'ਪੈਸੇ ਲੈਣ' ਦੇ ਨਾਂ ਉੱਤੇ QR ਕੋਡ ਸਕੈਨ ਕਰਵਾਉਂਦੇ ਹਨ, ਪਰ ਸਕੈਨ ਕਰਕੇ PIN ਪਾਉਣ ਨਾਲ ਅਸਲ ਵਿੱਚ ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚੋਂ ਪੈਸੇ ਚਲੇ ਜਾਂਦੇ ਹਨ। QR ਸਕੈਨ ਸਿਰਫ਼ ਪੈਸੇ ਭੇਜਣ ਲਈ ਹੁੰਦਾ ਹੈ। ਪੈਸੇ ਲੈਣ ਲਈ QR ਜਾਂ PIN ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ।"
    },
    todo: {
      en: "Never scan unknown QR codes or enter your UPI PIN to receive money. To receive money, just share your UPI ID or mobile number. If money was taken, report the fraud at 1930.",
      hi: "अनजान QR कोड कभी स्कैन न करें और पैसे लेने के लिए UPI PIN न डालें। पैसे लेने के लिए सिर्फ अपनी UPI ID या मोबाइल नंबर दें। अगर पैसे कट गए हैं तो 1930 पर शिकायत करें।",
      pa: "ਅਣਜਾਣ QR ਕੋਡ ਕਦੇ ਸਕੈਨ ਨਾ ਕਰੋ ਅਤੇ ਪੈਸੇ ਲੈਣ ਲਈ UPI PIN ਨਾ ਪਾਓ। ਪੈਸੇ ਲੈਣ ਲਈ ਸਿਰਫ਼ ਆਪਣੀ UPI ID ਜਾਂ ਮੋਬਾਈਲ ਨੰਬਰ ਦਿਓ। ਜੇ ਪੈਸੇ ਕੱਟੇ ਗਏ ਹਨ ਤਾਂ 1930 ਉੱਤੇ ਸ਼ਿਕਾਇਤ ਕਰੋ।"
    }
  },
  {
    id: "collect", icon: "📩", verdict: "scam",
    keywords: ["collect", "request", "रिक्वेस्ट", "ਰਿਕੁਐਸਟ", "approve", "मंज़ूर", "ਮਨਜ਼ੂਰ", "pay request"],
    title: { en: "Unknown payment request", hi: "अनजान पेमेंट रिक्वेस्ट", pa: "ਅਣਜਾਣ ਪੇਮੈਂਟ ਰਿਕੁਐਸਟ" },
    reason: {
      en: "A 'collect request' asks YOU to pay. Approving it with your PIN takes money out of your account.",
      hi: "'कलेक्ट रिक्वेस्ट' में आपसे पैसे मांगे जाते हैं। PIN डालकर मंज़ूर करने से आपके खाते से पैसे कटते हैं।",
      pa: "'ਕਲੈਕਟ ਰਿਕੁਐਸਟ' ਵਿੱਚ ਤੁਹਾਡੇ ਤੋਂ ਪੈਸੇ ਮੰਗੇ ਜਾਂਦੇ ਹਨ। PIN ਪਾ ਕੇ ਮਨਜ਼ੂਰ ਕਰਨ ਨਾਲ ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚੋਂ ਪੈਸੇ ਕੱਟੇ ਜਾਂਦੇ ਹਨ।"
    },
    todo: {
      en: "Decline requests from people you don't know. Read the screen carefully before typing your PIN.",
      hi: "अनजान लोगों की रिक्वेस्ट रद्द (Decline) करें। PIN डालने से पहले स्क्रीन ध्यान से पढ़ें।",
      pa: "ਅਣਜਾਣ ਲੋਕਾਂ ਦੀ ਰਿਕੁਐਸਟ ਰੱਦ (Decline) ਕਰੋ। PIN ਪਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਸਕਰੀਨ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹੋ।"
    }
  },
  {
    id: "mistake", icon: "😟", verdict: "scam",
    keywords: ["mistake", "galti", "गलती", "ਗਲਤੀ", "accidental", "wrong number", "galat", "गलत", "ਗਲਤ", "send back", "वापस भेज", "ਵਾਪਸ ਭੇਜ"],
    title: { en: "'Sent you money by mistake'", hi: "'गलती से पैसे भेज दिए'", pa: "'ਗਲਤੀ ਨਾਲ ਪੈਸੇ ਭੇਜ ਦਿੱਤੇ'" },
    reason: {
      en: "Scammers send a fake SMS or a small amount, then beg you to 'return' it. Often no real money came at all.",
      hi: "ठग नकली SMS या थोड़े पैसे भेजकर 'वापस' मांगते हैं। अक्सर असली पैसे आए ही नहीं होते।",
      pa: "ਠੱਗ ਨਕਲੀ SMS ਜਾਂ ਥੋੜ੍ਹੇ ਪੈਸੇ ਭੇਜ ਕੇ 'ਵਾਪਸ' ਮੰਗਦੇ ਹਨ। ਅਕਸਰ ਅਸਲੀ ਪੈਸੇ ਆਏ ਹੀ ਨਹੀਂ ਹੁੰਦੇ।"
    },
    todo: {
      en: "Check your balance in the bank app, not the SMS. Don't send money back yourself. Tell them to contact their bank.",
      hi: "SMS नहीं, बैंक ऐप में बैलेंस देखें। खुद पैसे वापस न भेजें। उन्हें अपने बैंक से बात करने को कहें।",
      pa: "SMS ਨਹੀਂ, ਬੈਂਕ ਐਪ ਵਿੱਚ ਬੈਲੈਂਸ ਵੇਖੋ। ਆਪ ਪੈਸੇ ਵਾਪਸ ਨਾ ਭੇਜੋ। ਉਨ੍ਹਾਂ ਨੂੰ ਆਪਣੇ ਬੈਂਕ ਨਾਲ ਗੱਲ ਕਰਨ ਲਈ ਕਹੋ।"
    }
  },
  {
    id: "otp", icon: "🔐", verdict: "scam",
    keywords: ["otp", "kyc", "ओटीपी", "केवाईसी", "ਓਟੀਪੀ", "ਕੇਵਾਈਸੀ", "blocked", "account band", "खाता बंद", "ਖਾਤਾ ਬੰਦ", "verify", "pin batao", "pin bata"],
    title: { en: "OTP / KYC call", hi: "OTP / KYC कॉल", pa: "OTP / KYC ਕਾਲ" },
    reason: {
      en: "Banks, RBI and NPCI never ask for your OTP, PIN or KYC on a phone call or through an SMS link.",
      hi: "बैंक, RBI या NPCI कभी फ़ोन या SMS लिंक पर OTP, PIN या KYC नहीं मांगते।",
      pa: "ਬੈਂਕ, RBI ਜਾਂ NPCI ਕਦੇ ਵੀ ਫ਼ੋਨ ਜਾਂ SMS ਲਿੰਕ ਉੱਤੇ OTP, PIN ਜਾਂ KYC ਨਹੀਂ ਮੰਗਦੇ।"
    },
    todo: {
      en: "Never share OTP or PIN. Cut the call. Do KYC only at your bank branch or in the official app.",
      hi: "OTP या PIN कभी न बताएं। कॉल काटें। KYC सिर्फ बैंक शाखा या असली ऐप से करें।",
      pa: "OTP ਜਾਂ PIN ਕਦੇ ਨਾ ਦੱਸੋ। ਕਾਲ ਕੱਟੋ। KYC ਸਿਰਫ਼ ਬੈਂਕ ਸ਼ਾਖਾ ਜਾਂ ਅਸਲੀ ਐਪ ਤੋਂ ਕਰੋ।"
    }
  },
  {
    id: "screenshare", icon: "📱", verdict: "scam",
    keywords: ["anydesk", "any desk", "teamviewer", "team viewer", "quicksupport", "quick support", "screen share", "screen sharing", "स्क्रीन शेयर", "ਸਕਰੀਨ ਸ਼ੇਅਰ", "remote", "install app", "unknown app", "इंस्टॉल", "ਇੰਸਟਾਲ"],
    title: { en: "Screen-share app", hi: "स्क्रीन-शेयर ऐप", pa: "ਸਕਰੀਨ-ਸ਼ੇਅਰ ਐਪ" },
    reason: {
      en: "Scammers use screen-sharing apps like AnyDesk or TeamViewer to steal your OTPs, PINs and banking details. These apps let them see everything on your screen.",
      hi: "ठग AnyDesk या TeamViewer जैसे स्क्रीन-शेयर ऐप से आपके OTP, PIN और बैंक की जानकारी चुराते हैं। इन ऐप से वे आपकी स्क्रीन पर सब कुछ देख सकते हैं।",
      pa: "ਠੱਗ AnyDesk ਜਾਂ TeamViewer ਵਰਗੇ ਸਕਰੀਨ-ਸ਼ੇਅਰ ਐਪ ਨਾਲ ਤੁਹਾਡੇ OTP, PIN ਅਤੇ ਬੈਂਕ ਦੀ ਜਾਣਕਾਰੀ ਚੋਰੀ ਕਰਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਐਪਾਂ ਨਾਲ ਉਹ ਤੁਹਾਡੀ ਸਕਰੀਨ ਉੱਤੇ ਸਭ ਕੁਝ ਵੇਖ ਸਕਦੇ ਹਨ।"
    },
    todo: {
      en: "Never install unknown apps. If you already installed one, uninstall it now, change your UPI PIN, call your bank and report the scam at 1930.",
      hi: "अनजान ऐप कभी इंस्टॉल न करें। अगर कर लिया है तो तुरंत हटाएं, UPI PIN बदलें, बैंक को फ़ोन करें और 1930 पर शिकायत करें।",
      pa: "ਅਣਜਾਣ ਐਪ ਕਦੇ ਇੰਸਟਾਲ ਨਾ ਕਰੋ। ਜੇ ਕਰ ਲਈ ਹੈ ਤਾਂ ਤੁਰੰਤ ਹਟਾਓ, UPI PIN ਬਦਲੋ, ਬੈਂਕ ਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ 1930 ਉੱਤੇ ਸ਼ਿਕਾਇਤ ਕਰੋ।"
    }
  },
  {
    id: "customercare", icon: "☎️", verdict: "scam",
    keywords: ["customer care", "customer service", "helpline number", "support number", "google", "कस्टमर केयर", "ਕਸਟਮਰ ਕੇਅਰ", "complaint number"],
    title: { en: "Fake customer care number", hi: "नकली कस्टमर केयर नंबर", pa: "ਨਕਲੀ ਕਸਟਮਰ ਕੇਅਰ ਨੰਬਰ" },
    reason: {
      en: "Scammers put fake helpline numbers on Google and social media.",
      hi: "ठग Google और सोशल मीडिया पर नकली हेल्पलाइन नंबर डालते हैं।",
      pa: "ਠੱਗ Google ਅਤੇ ਸੋਸ਼ਲ ਮੀਡੀਆ ਉੱਤੇ ਨਕਲੀ ਹੈਲਪਲਾਈਨ ਨੰਬਰ ਪਾਉਂਦੇ ਹਨ।"
    },
    todo: {
      en: "Take customer care numbers only from the official app or website. Real support never asks for your PIN.",
      hi: "कस्टमर केयर नंबर सिर्फ असली ऐप या वेबसाइट से लें। असली सपोर्ट कभी PIN नहीं मांगता।",
      pa: "ਕਸਟਮਰ ਕੇਅਰ ਨੰਬਰ ਸਿਰਫ਼ ਅਸਲੀ ਐਪ ਜਾਂ ਵੈੱਬਸਾਈਟ ਤੋਂ ਲਓ। ਅਸਲੀ ਸਪੋਰਟ ਕਦੇ PIN ਨਹੀਂ ਮੰਗਦੀ।"
    }
  },
  {
    id: "lottery", icon: "🎁", verdict: "scam",
    keywords: ["lottery", "prize", "you won", "inaam", "इनाम", "लॉटरी", "ਇਨਾਮ", "ਲਾਟਰੀ", "kbc", "lucky draw", "cashback", "कैशबैक", "ਕੈਸ਼ਬੈਕ", "gift", "jeet"],
    title: { en: "Lottery / prize / cashback", hi: "लॉटरी / इनाम / कैशबैक", pa: "ਲਾਟਰੀ / ਇਨਾਮ / ਕੈਸ਼ਬੈਕ" },
    reason: {
      en: "If you must pay a 'fee' or 'tax' to get a prize, it is a scam. You can't win a contest you never entered.",
      hi: "अगर इनाम पाने के लिए 'फीस' या 'टैक्स' देना पड़े, तो यह ठगी है। जिस मुकाबले में आपने भाग नहीं लिया, उसमें आप जीत नहीं सकते।",
      pa: "ਜੇ ਇਨਾਮ ਲੈਣ ਲਈ 'ਫੀਸ' ਜਾਂ 'ਟੈਕਸ' ਦੇਣਾ ਪਵੇ, ਤਾਂ ਇਹ ਠੱਗੀ ਹੈ। ਜਿਸ ਮੁਕਾਬਲੇ ਵਿੱਚ ਤੁਸੀਂ ਹਿੱਸਾ ਨਹੀਂ ਲਿਆ, ਉਸ ਵਿੱਚ ਤੁਸੀਂ ਜਿੱਤ ਨਹੀਂ ਸਕਦੇ।"
    },
    todo: {
      en: "Ignore it. Don't pay anything and don't open the link. Block the number.",
      hi: "ध्यान न दें। कोई पैसे न भरें, लिंक न खोलें। नंबर ब्लॉक करें।",
      pa: "ਧਿਆਨ ਨਾ ਦਿਓ। ਕੋਈ ਪੈਸੇ ਨਾ ਭਰੋ, ਲਿੰਕ ਨਾ ਖੋਲ੍ਹੋ। ਨੰਬਰ ਬਲੌਕ ਕਰੋ।"
    }
  },
  {
    id: "job", icon: "💼", verdict: "scam",
    keywords: ["job", "naukri", "नौकरी", "ਨੌਕਰੀ", "task", "part time", "work from home", "like videos", "youtube", "telegram", "invest", "earn money", "कमाई", "ਕਮਾਈ"],
    title: { en: "Fake job / online task", hi: "नकली नौकरी / ऑनलाइन टास्क", pa: "ਨਕਲੀ ਨੌਕਰੀ / ਆਨਲਾਈਨ ਟਾਸਕ" },
    reason: {
      en: "Fake jobs pay a little at first, then ask you to 'invest' or pay a fee to earn more. Real jobs never ask you to pay.",
      hi: "नकली नौकरी वाले पहले थोड़े पैसे देते हैं, फिर 'निवेश' या फीस मांगते हैं। असली नौकरी में पैसे नहीं भरने पड़ते।",
      pa: "ਨਕਲੀ ਨੌਕਰੀ ਵਾਲੇ ਪਹਿਲਾਂ ਥੋੜ੍ਹੇ ਪੈਸੇ ਦਿੰਦੇ ਹਨ, ਫਿਰ 'ਨਿਵੇਸ਼' ਜਾਂ ਫੀਸ ਮੰਗਦੇ ਹਨ। ਅਸਲੀ ਨੌਕਰੀ ਵਿੱਚ ਪੈਸੇ ਨਹੀਂ ਭਰਨੇ ਪੈਂਦੇ।"
    },
    todo: {
      en: "Stop and don't pay anything. Leave the Telegram or WhatsApp group and report it.",
      hi: "रुक जाएं, कोई पैसा न दें। Telegram या WhatsApp ग्रुप छोड़ें और शिकायत करें।",
      pa: "ਰੁਕ ਜਾਓ, ਕੋਈ ਪੈਸਾ ਨਾ ਦਿਓ। Telegram ਜਾਂ WhatsApp ਗਰੁੱਪ ਛੱਡੋ ਅਤੇ ਸ਼ਿਕਾਇਤ ਕਰੋ।"
    }
  },
  {
    id: "bill", icon: "💡", verdict: "scam",
    keywords: ["electricity", "bijli", "बिजली", "ਬਿਜਲੀ", "bill", "बिल", "ਬਿੱਲ", "power cut", "disconnect", "connection", "कनेक्शन", "ਕੁਨੈਕਸ਼ਨ"],
    title: { en: "Electricity bill SMS", hi: "बिजली बिल SMS", pa: "ਬਿਜਲੀ ਬਿੱਲ SMS" },
    reason: {
      en: "Electricity boards don't send SMS from personal numbers saying 'your power will be cut tonight, call this officer'.",
      hi: "बिजली विभाग निजी नंबर से 'आज रात बिजली कटेगी, इस अफसर को फ़ोन करें' जैसे SMS नहीं भेजता।",
      pa: "ਬਿਜਲੀ ਵਿਭਾਗ ਨਿੱਜੀ ਨੰਬਰ ਤੋਂ 'ਅੱਜ ਰਾਤ ਬਿਜਲੀ ਕੱਟੀ ਜਾਵੇਗੀ, ਇਸ ਅਫ਼ਸਰ ਨੂੰ ਫ਼ੋਨ ਕਰੋ' ਵਰਗੇ SMS ਨਹੀਂ ਭੇਜਦਾ।"
    },
    todo: {
      en: "Don't call that number or open the link. Check your bill only on the official board website or app.",
      hi: "उस नंबर पर फ़ोन न करें, लिंक न खोलें। बिल सिर्फ बिजली विभाग की असली वेबसाइट या ऐप पर देखें।",
      pa: "ਉਸ ਨੰਬਰ ਉੱਤੇ ਫ਼ੋਨ ਨਾ ਕਰੋ, ਲਿੰਕ ਨਾ ਖੋਲ੍ਹੋ। ਬਿੱਲ ਸਿਰਫ਼ ਬਿਜਲੀ ਵਿਭਾਗ ਦੀ ਅਸਲੀ ਵੈੱਬਸਾਈਟ ਜਾਂ ਐਪ ਉੱਤੇ ਵੇਖੋ।"
    }
  },
  {
    id: "olx", icon: "🪖", verdict: "scam",
    keywords: ["olx", "buyer", "selling", "बेच", "ਵੇਚ", "army", "आर्मी", "ਆਰਮੀ", "fauji", "फौजी", "ਫੌਜੀ", "marketplace", "advance"],
    title: { en: "Fake buyer ('army officer')", hi: "नकली खरीदार ('फौजी')", pa: "ਨਕਲੀ ਖਰੀਦਦਾਰ ('ਫੌਜੀ')" },
    reason: {
      en: "Fake buyers, often saying they are army officers, send a QR or request and say 'enter PIN to receive payment'.",
      hi: "नकली खरीदार, जो अक्सर खुद को फौजी बताते हैं, QR या रिक्वेस्ट भेजकर कहते हैं 'पैसे लेने के लिए PIN डालो'।",
      pa: "ਨਕਲੀ ਖਰੀਦਦਾਰ, ਜੋ ਅਕਸਰ ਆਪਣੇ ਆਪ ਨੂੰ ਫੌਜੀ ਦੱਸਦੇ ਹਨ, QR ਜਾਂ ਰਿਕੁਐਸਟ ਭੇਜ ਕੇ ਕਹਿੰਦੇ ਹਨ 'ਪੈਸੇ ਲੈਣ ਲਈ PIN ਪਾਓ'।"
    },
    todo: {
      en: "Take payment only by sharing your UPI ID. Never scan their QR or enter a PIN to receive money.",
      hi: "पैसे सिर्फ अपनी UPI ID देकर लें। उनका QR स्कैन न करें, पैसे लेने के लिए PIN न डालें।",
      pa: "ਪੈਸੇ ਸਿਰਫ਼ ਆਪਣੀ UPI ID ਦੇ ਕੇ ਲਓ। ਉਨ੍ਹਾਂ ਦਾ QR ਸਕੈਨ ਨਾ ਕਰੋ, ਪੈਸੇ ਲੈਣ ਲਈ PIN ਨਾ ਪਾਓ।"
    }
  },
  {
    id: "screenshot", icon: "🧾", verdict: "scam",
    keywords: ["screenshot", "स्क्रीनशॉट", "ਸਕਰੀਨਸ਼ਾਟ", "payment done", "fake payment", "shop", "dukaan", "दुकान", "ਦੁਕਾਨ", "customer paid"],
    title: { en: "Fake payment screenshot", hi: "नकली पेमेंट स्क्रीनशॉट", pa: "ਨਕਲੀ ਪੇਮੈਂਟ ਸਕਰੀਨਸ਼ਾਟ" },
    reason: {
      en: "Payment screenshots and SMS can be faked easily with apps.",
      hi: "पेमेंट का स्क्रीनशॉट और SMS ऐप से आसानी से नकली बनाए जा सकते हैं।",
      pa: "ਪੇਮੈਂਟ ਦਾ ਸਕਰੀਨਸ਼ਾਟ ਅਤੇ SMS ਐਪ ਨਾਲ ਆਸਾਨੀ ਨਾਲ ਨਕਲੀ ਬਣਾਏ ਜਾ ਸਕਦੇ ਹਨ।"
    },
    todo: {
      en: "Before handing over goods, check that the money really arrived in your own bank/UPI app or sound box.",
      hi: "सामान देने से पहले अपने बैंक/UPI ऐप या साउंड बॉक्स में पक्का करें कि पैसे सच में आए हैं।",
      pa: "ਸਮਾਨ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਬੈਂਕ/UPI ਐਪ ਜਾਂ ਸਾਊਂਡ ਬਾਕਸ ਵਿੱਚ ਪੱਕਾ ਕਰੋ ਕਿ ਪੈਸੇ ਸੱਚਮੁੱਚ ਆਏ ਹਨ।"
    }
  },
  {
    id: "arrest", icon: "🚔", verdict: "scam",
    keywords: ["police", "पुलिस", "ਪੁਲਿਸ", "cbi", "digital arrest", "arrest", "गिरफ्तार", "ਗ੍ਰਿਫ਼ਤਾਰ", "customs", "parcel", "पार्सल", "ਪਾਰਸਲ", "video call", "court"],
    title: { en: "'Digital arrest' / police call", hi: "'डिजिटल अरेस्ट' / पुलिस कॉल", pa: "'ਡਿਜੀਟਲ ਅਰੈਸਟ' / ਪੁਲਿਸ ਕਾਲ" },
    reason: {
      en: "Police, CBI or courts never arrest anyone on a video call or ask for money to 'clear your name'. 'Digital arrest' is not real.",
      hi: "पुलिस, CBI या कोर्ट कभी वीडियो कॉल पर गिरफ्तार नहीं करते, न 'नाम साफ़ करने' के लिए पैसे मांगते हैं। 'डिजिटल अरेस्ट' जैसा कुछ नहीं होता।",
      pa: "ਪੁਲਿਸ, CBI ਜਾਂ ਅਦਾਲਤ ਕਦੇ ਵੀ ਵੀਡੀਓ ਕਾਲ ਉੱਤੇ ਗ੍ਰਿਫ਼ਤਾਰ ਨਹੀਂ ਕਰਦੇ, ਨਾ ਹੀ 'ਨਾਂ ਸਾਫ਼ ਕਰਨ' ਲਈ ਪੈਸੇ ਮੰਗਦੇ ਹਨ। 'ਡਿਜੀਟਲ ਅਰੈਸਟ' ਵਰਗਾ ਕੁਝ ਨਹੀਂ ਹੁੰਦਾ।"
    },
    todo: {
      en: "Cut the call and don't pay. Tell your family right away.",
      hi: "कॉल काटें और पैसे न दें। तुरंत अपने परिवार को बताएं।",
      pa: "ਕਾਲ ਕੱਟੋ ਅਤੇ ਪੈਸੇ ਨਾ ਦਿਓ। ਤੁਰੰਤ ਆਪਣੇ ਪਰਿਵਾਰ ਨੂੰ ਦੱਸੋ।"
    }
  },
  {
    id: "link", icon: "🔗", verdict: "scam",
    keywords: ["link", "लिंक", "ਲਿੰਕ", "apk", "click", "download", "reward points", "रिवॉर्ड", "ਰਿਵਾਰਡ", "wedding card", "शादी का कार्ड"],
    title: { en: "Unknown link or .apk file", hi: "अनजान लिंक या .apk फ़ाइल", pa: "ਅਣਜਾਣ ਲਿੰਕ ਜਾਂ .apk ਫ਼ਾਈਲ" },
    reason: {
      en: "Unknown links and .apk files can steal your SMS, OTP and bank details.",
      hi: "अनजान लिंक और .apk फ़ाइलें आपके SMS, OTP और बैंक की जानकारी चुरा सकती हैं।",
      pa: "ਅਣਜਾਣ ਲਿੰਕ ਅਤੇ .apk ਫ਼ਾਈਲਾਂ ਤੁਹਾਡੇ SMS, OTP ਅਤੇ ਬੈਂਕ ਦੀ ਜਾਣਕਾਰੀ ਚੋਰੀ ਕਰ ਸਕਦੀਆਂ ਹਨ।"
    },
    todo: {
      en: "Don't open it. Install apps only from Play Store or App Store. If you already opened it, tell your bank.",
      hi: "न खोलें। ऐप सिर्फ Play Store या App Store से डालें। अगर खोल लिया है तो बैंक को बताएं।",
      pa: "ਨਾ ਖੋਲ੍ਹੋ। ਐਪ ਸਿਰਫ਼ Play Store ਜਾਂ App Store ਤੋਂ ਪਾਓ। ਜੇ ਖੋਲ੍ਹ ਲਿਆ ਹੈ ਤਾਂ ਬੈਂਕ ਨੂੰ ਦੱਸੋ।"
    }
  },
  {
    id: "friend", icon: "👤", verdict: "scam",
    keywords: ["friend", "dost", "दोस्त", "ਦੋਸਤ", "relative", "रिश्तेदार", "ਰਿਸ਼ਤੇਦਾਰ", "uncle", "new number", "naya number", "नया नंबर", "ਨਵਾਂ ਨੰਬਰ", "urgent", "hospital", "emergency", "facebook"],
    title: { en: "'Friend' asking for urgent money", hi: "'दोस्त' जल्दी में पैसे मांगे", pa: "'ਦੋਸਤ' ਜਲਦੀ ਪੈਸੇ ਮੰਗੇ" },
    reason: {
      en: "Scammers copy a friend's photo or say 'this is my new number' and ask for money urgently.",
      hi: "ठग दोस्त की फोटो लगाकर या 'यह मेरा नया नंबर है' कहकर जल्दी में पैसे मांगते हैं।",
      pa: "ਠੱਗ ਦੋਸਤ ਦੀ ਫ਼ੋਟੋ ਲਾ ਕੇ ਜਾਂ 'ਇਹ ਮੇਰਾ ਨਵਾਂ ਨੰਬਰ ਹੈ' ਕਹਿ ਕੇ ਜਲਦੀ ਵਿੱਚ ਪੈਸੇ ਮੰਗਦੇ ਹਨ।"
    },
    todo: {
      en: "Call the person on their old number before you pay anything.",
      hi: "पैसे भेजने से पहले उस व्यक्ति को उसके पुराने नंबर पर फ़ोन करें।",
      pa: "ਪੈਸੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਉਸ ਵਿਅਕਤੀ ਨੂੰ ਉਸਦੇ ਪੁਰਾਣੇ ਨੰਬਰ ਉੱਤੇ ਫ਼ੋਨ ਕਰੋ।"
    }
  },
  {
    id: "suspicious", icon: "✉️", verdict: "scam",
    keywords: ["suspicious", "message", "msg", "sms", "whatsapp", "unknown number", "shak", "शक", "ਸ਼ੱਕ", "मैसेज", "संदेश", "ਮੈਸੇਜ"],
    title: { en: "Suspicious message", hi: "शक वाला मैसेज", pa: "ਸ਼ੱਕੀ ਮੈਸੇਜ" },
    reason: {
      en: "Scam messages try to scare you or tempt you so you act fast: 'account blocked', 'you won', 'pay now'. Rushing you is a big red flag.",
      hi: "ठगी वाले मैसेज आपको डराकर या लालच देकर जल्दी कुछ करवाना चाहते हैं: 'खाता बंद हो जाएगा', 'आप जीत गए', 'अभी पैसे भेजें'। जल्दबाज़ी करवाना खतरे का बड़ा संकेत है।",
      pa: "ਠੱਗੀ ਵਾਲੇ ਮੈਸੇਜ ਤੁਹਾਨੂੰ ਡਰਾ ਕੇ ਜਾਂ ਲਾਲਚ ਦੇ ਕੇ ਜਲਦੀ ਕੁਝ ਕਰਵਾਉਣਾ ਚਾਹੁੰਦੇ ਹਨ: 'ਖਾਤਾ ਬੰਦ ਹੋ ਜਾਵੇਗਾ', 'ਤੁਸੀਂ ਜਿੱਤ ਗਏ', 'ਹੁਣੇ ਪੈਸੇ ਭੇਜੋ'। ਜਲਦਬਾਜ਼ੀ ਕਰਵਾਉਣਾ ਖ਼ਤਰੇ ਦੀ ਵੱਡੀ ਨਿਸ਼ਾਨੀ ਹੈ।"
    },
    todo: {
      en: "Handle it carefully: don't click any link, don't reply and don't call back. Don't forward it to others. Block the number and report it.",
      hi: "सावधानी से संभालें: कोई लिंक न खोलें, जवाब न दें और वापस फ़ोन न करें। दूसरों को फ़ॉरवर्ड न करें। नंबर ब्लॉक करें और शिकायत करें।",
      pa: "ਧਿਆਨ ਨਾਲ ਸੰਭਾਲੋ: ਕੋਈ ਲਿੰਕ ਨਾ ਖੋਲ੍ਹੋ, ਜਵਾਬ ਨਾ ਦਿਓ ਅਤੇ ਵਾਪਸ ਫ਼ੋਨ ਨਾ ਕਰੋ। ਦੂਜਿਆਂ ਨੂੰ ਫ਼ਾਰਵਰਡ ਨਾ ਕਰੋ। ਨੰਬਰ ਬਲੌਕ ਕਰੋ ਅਤੇ ਸ਼ਿਕਾਇਤ ਕਰੋ।"
    }
  },

  /* ---------- 2 helpers (not scams) ---------- */
  {
    id: "lost", icon: "🆘", verdict: "help",
    keywords: ["lost money", "money gone", "paise gaye", "paise kat", "पैसे कट", "पैसे चले गए", "ठगी हो गई", "ਪੈਸੇ ਕੱਟ", "ਠੱਗੀ ਹੋ ਗਈ", "fraud ho gaya", "fraud hua", "i got scammed", "cheated"],
    title: { en: "I already lost money", hi: "मेरे पैसे चले गए", pa: "ਮੇਰੇ ਪੈਸੇ ਚਲੇ ਗਏ" },
    reason: {
      en: "Act fast. The first few hours matter most to stop the money.",
      hi: "जल्दी करें। पैसे रुकवाने के लिए पहले कुछ घंटे सबसे ज़रूरी हैं।",
      pa: "ਜਲਦੀ ਕਰੋ। ਪੈਸੇ ਰੁਕਵਾਉਣ ਲਈ ਪਹਿਲੇ ਕੁਝ ਘੰਟੇ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਹਨ।"
    },
    todo: {
      en: "1) Call 1930 right now. 2) Report at cybercrime.gov.in. 3) Call your bank to block UPI. 4) Keep screenshots and the transaction ID.",
      hi: "1) अभी 1930 पर फ़ोन करें। 2) cybercrime.gov.in पर शिकायत करें। 3) बैंक को फ़ोन करके UPI बंद करवाएं। 4) स्क्रीनशॉट और ट्रांज़ैक्शन ID संभालकर रखें।",
      pa: "1) ਹੁਣੇ 1930 ਉੱਤੇ ਫ਼ੋਨ ਕਰੋ। 2) cybercrime.gov.in ਉੱਤੇ ਸ਼ਿਕਾਇਤ ਕਰੋ। 3) ਬੈਂਕ ਨੂੰ ਫ਼ੋਨ ਕਰਕੇ UPI ਬੰਦ ਕਰਵਾਓ। 4) ਸਕਰੀਨਸ਼ਾਟ ਅਤੇ ਟ੍ਰਾਂਜ਼ੈਕਸ਼ਨ ID ਸੰਭਾਲ ਕੇ ਰੱਖੋ।"
    }
  },
  {
    id: "safeway", icon: "✅", verdict: "safe",
    keywords: ["how to receive", "safe way", "is it safe", "paise kaise le", "पैसे कैसे लें", "ਪੈਸੇ ਕਿਵੇਂ ਲਈਏ", "safely"],
    title: { en: "Safe way to receive money", hi: "पैसे लेने का सही तरीका", pa: "ਪੈਸੇ ਲੈਣ ਦਾ ਸਹੀ ਤਰੀਕਾ" },
    reason: {
      en: "To receive money you only share your UPI ID, mobile number or your own QR. The PIN is only for SENDING money.",
      hi: "पैसे लेने के लिए सिर्फ अपनी UPI ID, मोबाइल नंबर या अपना QR दें। PIN सिर्फ पैसे भेजने के लिए होता है।",
      pa: "ਪੈਸੇ ਲੈਣ ਲਈ ਸਿਰਫ਼ ਆਪਣੀ UPI ID, ਮੋਬਾਈਲ ਨੰਬਰ ਜਾਂ ਆਪਣਾ QR ਦਿਓ। PIN ਸਿਰਫ਼ ਪੈਸੇ ਭੇਜਣ ਲਈ ਹੁੰਦਾ ਹੈ।"
    },
    todo: {
      en: "Check that the money arrived in your bank app. Never enter your PIN to receive.",
      hi: "बैंक ऐप में देखें कि पैसे आ गए। पैसे लेने के लिए कभी PIN न डालें।",
      pa: "ਬੈਂਕ ਐਪ ਵਿੱਚ ਵੇਖੋ ਕਿ ਪੈਸੇ ਆ ਗਏ। ਪੈਸੇ ਲੈਣ ਲਈ ਕਦੇ PIN ਨਾ ਪਾਓ।"
    }
  }
];

/* =========================================================
   VARIETY: so the bot doesn't repeat the same reply every time.
   Each new answer picks the NEXT line from these lists.
   (null = use the normal line from TEXT above)
   ========================================================= */

// Extra versions of the welcome, "not sure" and safety-tip lines
const VARIANTS = {
  "greet": {
    "en": [
      null,
      "Hi there! 👋 I'm SWS Suraksha Bot. Got a strange call, message or QR code? Tell me about it, and I'll tell you if it's a scam, why, and what to do next.",
      "Namaste! 🛡️ SWS Suraksha Bot here. Paste a suspicious message, speak with 🎤, or tap a situation below. I'll explain if it's a scam and how to stay safe."
    ],
    "hi": [
      null,
      "नमस्ते! 👋 मैं SWS सुरक्षा बॉट हूँ। कोई अजीब कॉल, मैसेज या QR कोड आया है? मुझे बताइए, मैं बताऊँगा कि यह ठगी है या नहीं, क्यों, और आगे क्या करें।",
      "नमस्ते! 🛡️ मैं SWS सुरक्षा बॉट। शक वाला मैसेज यहाँ पेस्ट करें, 🎤 से बोलें, या नीचे कोई स्थिति चुनें। मैं बताऊँगा कि यह ठगी है या नहीं और कैसे सुरक्षित रहें।"
    ],
    "pa": [
      null,
      "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 👋 ਮੈਂ SWS ਸੁਰੱਖਿਆ ਬੋਟ ਹਾਂ। ਕੋਈ ਅਜੀਬ ਕਾਲ, ਮੈਸੇਜ ਜਾਂ QR ਕੋਡ ਆਇਆ ਹੈ? ਮੈਨੂੰ ਦੱਸੋ, ਮੈਂ ਦੱਸਾਂਗਾ ਕਿ ਇਹ ਠੱਗੀ ਹੈ ਜਾਂ ਨਹੀਂ, ਕਿਉਂ, ਅਤੇ ਅੱਗੇ ਕੀ ਕਰਨਾ ਹੈ।",
      "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 🛡️ ਮੈਂ SWS ਸੁਰੱਖਿਆ ਬੋਟ। ਸ਼ੱਕੀ ਮੈਸੇਜ ਇੱਥੇ ਪੇਸਟ ਕਰੋ, 🎤 ਨਾਲ ਬੋਲੋ, ਜਾਂ ਹੇਠਾਂ ਕੋਈ ਹਾਲਤ ਚੁਣੋ। ਮੈਂ ਦੱਸਾਂਗਾ ਕਿ ਇਹ ਠੱਗੀ ਹੈ ਜਾਂ ਨਹੀਂ ਅਤੇ ਕਿਵੇਂ ਸੁਰੱਖਿਅਤ ਰਹਿਣਾ ਹੈ।"
    ]
  },
  "notSure": {
    "en": [
      null,
      "Hmm, I couldn't match that to a known scam yet. Can you add a detail? For example: was it a call, SMS or WhatsApp, and what did they ask you to do?",
      "Not sure about this one. A simple rule while you tell me more: if anyone asks for your PIN, OTP, a QR scan or an app install, stop. That's almost always a scam."
    ],
    "hi": [
      null,
      "हम्म, मैं इसे अभी किसी जानी-मानी ठगी से नहीं मिला पाया। थोड़ी और जानकारी दें, जैसे: कॉल थी, SMS या WhatsApp, और उन्होंने आपसे क्या करने को कहा?",
      "इसके बारे में पक्का नहीं हूँ। जब तक आप और बताएं, एक आसान नियम: अगर कोई PIN, OTP, QR स्कैन या ऐप इंस्टॉल करने को कहे, तो रुक जाएं। यह लगभग हमेशा ठगी होती है।"
    ],
    "pa": [
      null,
      "ਹੰਮ, ਮੈਂ ਇਸਨੂੰ ਹਾਲੇ ਕਿਸੇ ਜਾਣੀ-ਪਛਾਣੀ ਠੱਗੀ ਨਾਲ ਨਹੀਂ ਮਿਲਾ ਸਕਿਆ। ਥੋੜ੍ਹੀ ਹੋਰ ਜਾਣਕਾਰੀ ਦਿਓ, ਜਿਵੇਂ: ਕਾਲ ਸੀ, SMS ਜਾਂ WhatsApp, ਅਤੇ ਉਨ੍ਹਾਂ ਨੇ ਤੁਹਾਨੂੰ ਕੀ ਕਰਨ ਲਈ ਕਿਹਾ?",
      "ਇਸ ਬਾਰੇ ਪੱਕਾ ਨਹੀਂ ਹਾਂ। ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਹੋਰ ਦੱਸੋ, ਇੱਕ ਆਸਾਨ ਨਿਯਮ: ਜੇ ਕੋਈ PIN, OTP, QR ਸਕੈਨ ਜਾਂ ਐਪ ਇੰਸਟਾਲ ਕਰਨ ਲਈ ਕਹੇ, ਤਾਂ ਰੁਕ ਜਾਓ। ਇਹ ਲਗਭਗ ਹਮੇਸ਼ਾ ਠੱਗੀ ਹੁੰਦੀ ਹੈ।"
    ]
  },
  "tip": {
    "en": [
      null,
      "💡 Your UPI PIN is like your house key. Only you should ever have it.",
      "💡 Scammers love the word 'URGENT'. When someone rushes you, slow down and ask an elder.",
      "💡 Save 1930 in your phone today. It's India's cyber fraud helpline.",
      "💡 Share what you learned today with your parents and grandparents. Scammers often target elders.",
      "💡 Read every UPI screen before typing your PIN. If it says 'Pay', money is leaving your account.",
      "💡 If an offer sounds too good to be true, it is usually a trap.",
      "💡 Not sure? Don't act. Ask a parent or teacher, or call your bank using the number in its official app."
    ],
    "hi": [
      null,
      "💡 आपका UPI PIN घर की चाबी जैसा है। यह सिर्फ आपके पास होना चाहिए।",
      "💡 ठगों को 'जल्दी करो' शब्द बहुत पसंद है। कोई जल्दी करवाए तो रुकें और किसी बड़े से पूछें।",
      "💡 आज ही 1930 अपने फ़ोन में सेव करें। यह भारत की साइबर ठगी हेल्पलाइन है।",
      "💡 आज जो सीखा, वह अपने माता-पिता और दादा-दादी को बताएं। ठग अक्सर बुज़ुर्गों को निशाना बनाते हैं।",
      "💡 PIN डालने से पहले UPI स्क्रीन ध्यान से पढ़ें। अगर 'Pay' लिखा है, तो पैसे आपके खाते से जा रहे हैं।",
      "💡 अगर कोई ऑफ़र सच होने के लिए बहुत अच्छा लगे, तो वह अक्सर जाल होता है।",
      "💡 पक्का नहीं पता? तो कुछ न करें। माता-पिता या शिक्षक से पूछें, या बैंक के असली ऐप में दिए नंबर पर फ़ोन करें।"
    ],
    "pa": [
      null,
      "💡 ਤੁਹਾਡਾ UPI PIN ਘਰ ਦੀ ਚਾਬੀ ਵਰਗਾ ਹੈ। ਇਹ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਕੋਲ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
      "💡 ਠੱਗਾਂ ਨੂੰ 'ਜਲਦੀ ਕਰੋ' ਸ਼ਬਦ ਬਹੁਤ ਪਸੰਦ ਹੈ। ਕੋਈ ਜਲਦੀ ਕਰਵਾਏ ਤਾਂ ਰੁਕੋ ਅਤੇ ਕਿਸੇ ਵੱਡੇ ਨੂੰ ਪੁੱਛੋ।",
      "💡 ਅੱਜ ਹੀ 1930 ਆਪਣੇ ਫ਼ੋਨ ਵਿੱਚ ਸੇਵ ਕਰੋ। ਇਹ ਭਾਰਤ ਦੀ ਸਾਈਬਰ ਠੱਗੀ ਹੈਲਪਲਾਈਨ ਹੈ।",
      "💡 ਅੱਜ ਜੋ ਸਿੱਖਿਆ, ਉਹ ਆਪਣੇ ਮਾਪਿਆਂ ਅਤੇ ਦਾਦਾ-ਦਾਦੀ ਨੂੰ ਦੱਸੋ। ਠੱਗ ਅਕਸਰ ਬਜ਼ੁਰਗਾਂ ਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਉਂਦੇ ਹਨ।",
      "💡 PIN ਪਾਉਣ ਤੋਂ ਪਹਿਲਾਂ UPI ਸਕਰੀਨ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹੋ। ਜੇ 'Pay' ਲਿਖਿਆ ਹੈ, ਤਾਂ ਪੈਸੇ ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚੋਂ ਜਾ ਰਹੇ ਹਨ।",
      "💡 ਜੇ ਕੋਈ ਆਫ਼ਰ ਸੱਚ ਹੋਣ ਲਈ ਬਹੁਤ ਵਧੀਆ ਲੱਗੇ, ਤਾਂ ਉਹ ਅਕਸਰ ਜਾਲ ਹੁੰਦਾ ਹੈ।",
      "💡 ਪੱਕਾ ਨਹੀਂ ਪਤਾ? ਤਾਂ ਕੁਝ ਨਾ ਕਰੋ। ਮਾਪਿਆਂ ਜਾਂ ਅਧਿਆਪਕ ਨੂੰ ਪੁੱਛੋ, ਜਾਂ ਬੈਂਕ ਦੇ ਅਸਲੀ ਐਪ ਵਿੱਚ ਦਿੱਤੇ ਨੰਬਰ ਉੱਤੇ ਫ਼ੋਨ ਕਰੋ।"
    ]
  }
};

// A different first line on each card, by verdict
const OPENERS = {
  "scam": {
    "en": [
      "🚨 Careful! This is a well-known scam.",
      "🛑 Stop right there. This looks like a trick.",
      "👀 Good thing you checked first! This is a scam.",
      "⚠️ Red alert! Scammers use this trick a lot.",
      "🧠 Smart move asking me. Here's the truth:"
    ],
    "hi": [
      "🚨 सावधान! यह एक जानी-मानी ठगी है।",
      "🛑 वहीं रुकिए। यह एक चाल लगती है।",
      "👀 अच्छा किया जो पहले पूछ लिया! यह ठगी है।",
      "⚠️ खतरा! ठग यह चाल बहुत इस्तेमाल करते हैं।",
      "🧠 मुझसे पूछना समझदारी थी। सच यह है:"
    ],
    "pa": [
      "🚨 ਸਾਵਧਾਨ! ਇਹ ਇੱਕ ਜਾਣੀ-ਪਛਾਣੀ ਠੱਗੀ ਹੈ।",
      "🛑 ਉੱਥੇ ਹੀ ਰੁਕੋ। ਇਹ ਇੱਕ ਚਾਲ ਲੱਗਦੀ ਹੈ।",
      "👀 ਚੰਗਾ ਕੀਤਾ ਜੋ ਪਹਿਲਾਂ ਪੁੱਛ ਲਿਆ! ਇਹ ਠੱਗੀ ਹੈ।",
      "⚠️ ਖ਼ਤਰਾ! ਠੱਗ ਇਹ ਚਾਲ ਬਹੁਤ ਵਰਤਦੇ ਹਨ।",
      "🧠 ਮੈਨੂੰ ਪੁੱਛਣਾ ਸਮਝਦਾਰੀ ਸੀ। ਸੱਚ ਇਹ ਹੈ:"
    ]
  },
  "help": {
    "en": [
      "🆘 Don't panic. Let's act fast together.",
      "💪 It's not your fault. Here's what to do right now.",
      "⏱️ Every minute counts. Follow these steps."
    ],
    "hi": [
      "🆘 घबराइए मत। चलिए जल्दी कदम उठाते हैं।",
      "💪 इसमें आपकी गलती नहीं है। अभी यह करें।",
      "⏱️ हर मिनट ज़रूरी है। ये कदम उठाएं।"
    ],
    "pa": [
      "🆘 ਘਬਰਾਓ ਨਾ। ਆਓ ਜਲਦੀ ਕਦਮ ਚੁੱਕੀਏ।",
      "💪 ਇਸ ਵਿੱਚ ਤੁਹਾਡੀ ਗਲਤੀ ਨਹੀਂ ਹੈ। ਹੁਣੇ ਇਹ ਕਰੋ।",
      "⏱️ ਹਰ ਮਿੰਟ ਜ਼ਰੂਰੀ ਹੈ। ਇਹ ਕਦਮ ਚੁੱਕੋ।"
    ]
  },
  "safe": {
    "en": [
      "👍 Great question!",
      "✅ Here's the safe way.",
      "🌟 Smart thinking!"
    ],
    "hi": [
      "👍 बहुत अच्छा सवाल!",
      "✅ यह रहा सही तरीका।",
      "🌟 समझदारी की बात!"
    ],
    "pa": [
      "👍 ਬਹੁਤ ਵਧੀਆ ਸਵਾਲ!",
      "✅ ਇਹ ਰਿਹਾ ਸਹੀ ਤਰੀਕਾ।",
      "🌟 ਸਮਝਦਾਰੀ ਦੀ ਗੱਲ!"
    ]
  }
};

// "Did you know?" facts for each situation (by scenario id)
const FACTS = {
  "refund": {
    "en": [
      "Scammers can get your name and order details from fake shopping sites or leaked data, so the call can sound very real.",
      "A real refund usually goes back to the same account or card you paid from. You don't have to do anything."
    ],
    "hi": [
      "ठग नकली शॉपिंग साइट या लीक हुए डेटा से आपका नाम और ऑर्डर की जानकारी ले सकते हैं, इसलिए कॉल बिल्कुल असली लग सकती है।",
      "असली रिफंड आमतौर पर उसी खाते या कार्ड में वापस आता है जिससे आपने पैसे दिए थे। आपको कुछ नहीं करना पड़ता।"
    ],
    "pa": [
      "ਠੱਗ ਨਕਲੀ ਸ਼ਾਪਿੰਗ ਸਾਈਟ ਜਾਂ ਲੀਕ ਹੋਏ ਡੇਟਾ ਤੋਂ ਤੁਹਾਡਾ ਨਾਂ ਅਤੇ ਆਰਡਰ ਦੀ ਜਾਣਕਾਰੀ ਲੈ ਸਕਦੇ ਹਨ, ਇਸ ਲਈ ਕਾਲ ਬਿਲਕੁਲ ਅਸਲੀ ਲੱਗ ਸਕਦੀ ਹੈ।",
      "ਅਸਲੀ ਰਿਫੰਡ ਆਮ ਤੌਰ ਉੱਤੇ ਉਸੇ ਖਾਤੇ ਜਾਂ ਕਾਰਡ ਵਿੱਚ ਵਾਪਸ ਆਉਂਦਾ ਹੈ ਜਿਸ ਤੋਂ ਤੁਸੀਂ ਪੈਸੇ ਦਿੱਤੇ ਸਨ। ਤੁਹਾਨੂੰ ਕੁਝ ਨਹੀਂ ਕਰਨਾ ਪੈਂਦਾ।"
    ]
  },
  "qr": {
    "en": [
      "Fake QR codes are sometimes stuck on top of real ones at shops and parking spots. Check the name shown before you pay.",
      "Easy rule to remember: Scan = Send. Your own QR = Receive."
    ],
    "hi": [
      "दुकानों और पार्किंग में कभी-कभी असली QR के ऊपर नकली QR चिपका दिए जाते हैं। पैसे देने से पहले दिख रहा नाम ज़रूर देखें।",
      "आसान नियम याद रखें: स्कैन = पैसे भेजना। अपना QR = पैसे लेना।"
    ],
    "pa": [
      "ਦੁਕਾਨਾਂ ਅਤੇ ਪਾਰਕਿੰਗ ਵਿੱਚ ਕਦੇ-ਕਦੇ ਅਸਲੀ QR ਉੱਤੇ ਨਕਲੀ QR ਚਿਪਕਾ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ। ਪੈਸੇ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਦਿਖ ਰਿਹਾ ਨਾਂ ਜ਼ਰੂਰ ਵੇਖੋ।",
      "ਆਸਾਨ ਨਿਯਮ ਯਾਦ ਰੱਖੋ: ਸਕੈਨ = ਪੈਸੇ ਭੇਜਣਾ। ਆਪਣਾ QR = ਪੈਸੇ ਲੈਣਾ।"
    ]
  },
  "collect": {
    "en": [
      "Scammers write things like 'Approve to receive ₹5000' on the request. The words can lie, the 'Pay' button can't.",
      "Most UPI apps let you block a sender after you decline. Do it so they can't keep sending requests."
    ],
    "hi": [
      "ठग रिक्वेस्ट में '₹5000 पाने के लिए Approve करें' जैसा लिख देते हैं। लिखे शब्द झूठ हो सकते हैं, 'Pay' बटन नहीं।",
      "ज़्यादातर UPI ऐप में रिक्वेस्ट रद्द करने के बाद भेजने वाले को ब्लॉक कर सकते हैं। ऐसा करें ताकि वे बार-बार रिक्वेस्ट न भेजें।"
    ],
    "pa": [
      "ਠੱਗ ਰਿਕੁਐਸਟ ਵਿੱਚ '₹5000 ਲੈਣ ਲਈ Approve ਕਰੋ' ਵਰਗਾ ਲਿਖ ਦਿੰਦੇ ਹਨ। ਲਿਖੇ ਸ਼ਬਦ ਝੂਠ ਹੋ ਸਕਦੇ ਹਨ, 'Pay' ਬਟਨ ਨਹੀਂ।",
      "ਜ਼ਿਆਦਾਤਰ UPI ਐਪਾਂ ਵਿੱਚ ਰਿਕੁਐਸਟ ਰੱਦ ਕਰਨ ਤੋਂ ਬਾਅਦ ਭੇਜਣ ਵਾਲੇ ਨੂੰ ਬਲੌਕ ਕਰ ਸਕਦੇ ਹੋ। ਅਜਿਹਾ ਕਰੋ ਤਾਂ ਜੋ ਉਹ ਵਾਰ-ਵਾਰ ਰਿਕੁਐਸਟ ਨਾ ਭੇਜਣ।"
    ]
  },
  "mistake": {
    "en": [
      "A fake 'money credited' SMS can come from any normal mobile number. Real bank SMS come from the bank's sender name, not a 10-digit number.",
      "If someone really sent money by mistake, their own bank can help them get it back. You don't have to return it yourself."
    ],
    "hi": [
      "नकली 'पैसे जमा' SMS किसी भी आम मोबाइल नंबर से आ सकता है। असली बैंक SMS बैंक के नाम से आते हैं, 10 अंकों वाले नंबर से नहीं।",
      "अगर किसी ने सच में गलती से पैसे भेजे हैं, तो उनका बैंक पैसे वापस दिलाने में मदद कर सकता है। आपको खुद लौटाने की ज़रूरत नहीं।"
    ],
    "pa": [
      "ਨਕਲੀ 'ਪੈਸੇ ਜਮ੍ਹਾਂ' SMS ਕਿਸੇ ਵੀ ਆਮ ਮੋਬਾਈਲ ਨੰਬਰ ਤੋਂ ਆ ਸਕਦਾ ਹੈ। ਅਸਲੀ ਬੈਂਕ SMS ਬੈਂਕ ਦੇ ਨਾਂ ਤੋਂ ਆਉਂਦੇ ਹਨ, 10 ਅੰਕਾਂ ਵਾਲੇ ਨੰਬਰ ਤੋਂ ਨਹੀਂ।",
      "ਜੇ ਕਿਸੇ ਨੇ ਸੱਚਮੁੱਚ ਗਲਤੀ ਨਾਲ ਪੈਸੇ ਭੇਜੇ ਹਨ, ਤਾਂ ਉਨ੍ਹਾਂ ਦਾ ਬੈਂਕ ਪੈਸੇ ਵਾਪਸ ਦਿਵਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਆਪ ਵਾਪਸ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ।"
    ]
  },
  "otp": {
    "en": [
      "Read the full OTP SMS. It usually says 'Do not share this OTP with anyone', and that includes bank staff.",
      "Scammers may already know your name and bank. Knowing your details does not make a caller real."
    ],
    "hi": [
      "OTP वाला पूरा SMS पढ़ें। उसमें आमतौर पर लिखा होता है 'यह OTP किसी को न बताएं', बैंक कर्मचारी को भी नहीं।",
      "ठगों को आपका नाम और बैंक पहले से पता हो सकता है। आपकी जानकारी पता होने से कॉल करने वाला असली नहीं बन जाता।"
    ],
    "pa": [
      "OTP ਵਾਲਾ ਪੂਰਾ SMS ਪੜ੍ਹੋ। ਉਸ ਵਿੱਚ ਆਮ ਤੌਰ ਉੱਤੇ ਲਿਖਿਆ ਹੁੰਦਾ ਹੈ 'ਇਹ OTP ਕਿਸੇ ਨੂੰ ਨਾ ਦੱਸੋ', ਬੈਂਕ ਕਰਮਚਾਰੀ ਨੂੰ ਵੀ ਨਹੀਂ।",
      "ਠੱਗਾਂ ਨੂੰ ਤੁਹਾਡਾ ਨਾਂ ਅਤੇ ਬੈਂਕ ਪਹਿਲਾਂ ਤੋਂ ਪਤਾ ਹੋ ਸਕਦਾ ਹੈ। ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਪਤਾ ਹੋਣ ਨਾਲ ਕਾਲ ਕਰਨ ਵਾਲਾ ਅਸਲੀ ਨਹੀਂ ਬਣ ਜਾਂਦਾ।"
    ]
  },
  "screenshare": {
    "en": [
      "Scammers often pretend to be bank or app support and say 'install this to fix your problem'. Real support never does this.",
      "Even a normal video call with screen sharing turned on can show your OTP to the other person."
    ],
    "hi": [
      "ठग अक्सर बैंक या ऐप सपोर्ट बनकर कहते हैं 'समस्या ठीक करने के लिए यह ऐप डालें'। असली सपोर्ट ऐसा कभी नहीं कहता।",
      "स्क्रीन शेयरिंग चालू करके की गई आम वीडियो कॉल में भी सामने वाला आपका OTP देख सकता है।"
    ],
    "pa": [
      "ਠੱਗ ਅਕਸਰ ਬੈਂਕ ਜਾਂ ਐਪ ਸਪੋਰਟ ਬਣ ਕੇ ਕਹਿੰਦੇ ਹਨ 'ਸਮੱਸਿਆ ਠੀਕ ਕਰਨ ਲਈ ਇਹ ਐਪ ਪਾਓ'। ਅਸਲੀ ਸਪੋਰਟ ਕਦੇ ਅਜਿਹਾ ਨਹੀਂ ਕਹਿੰਦੀ।",
      "ਸਕਰੀਨ ਸ਼ੇਅਰਿੰਗ ਚਾਲੂ ਕਰਕੇ ਕੀਤੀ ਆਮ ਵੀਡੀਓ ਕਾਲ ਵਿੱਚ ਵੀ ਸਾਹਮਣੇ ਵਾਲਾ ਤੁਹਾਡਾ OTP ਵੇਖ ਸਕਦਾ ਹੈ।"
    ]
  },
  "customercare": {
    "en": [
      "Fake numbers can appear at the top of search results, so being first on Google doesn't mean a number is real.",
      "Your bank's real helpline number is printed on the back of your debit card and shown in its official app."
    ],
    "hi": [
      "नकली नंबर सर्च में सबसे ऊपर भी दिख सकते हैं, इसलिए Google पर पहला नंबर होना असली होने का सबूत नहीं है।",
      "बैंक का असली हेल्पलाइन नंबर आपके डेबिट कार्ड के पीछे और बैंक के असली ऐप में लिखा होता है।"
    ],
    "pa": [
      "ਨਕਲੀ ਨੰਬਰ ਸਰਚ ਵਿੱਚ ਸਭ ਤੋਂ ਉੱਤੇ ਵੀ ਦਿਸ ਸਕਦੇ ਹਨ, ਇਸ ਲਈ Google ਉੱਤੇ ਪਹਿਲਾ ਨੰਬਰ ਹੋਣਾ ਅਸਲੀ ਹੋਣ ਦਾ ਸਬੂਤ ਨਹੀਂ ਹੈ।",
      "ਬੈਂਕ ਦਾ ਅਸਲੀ ਹੈਲਪਲਾਈਨ ਨੰਬਰ ਤੁਹਾਡੇ ਡੈਬਿਟ ਕਾਰਡ ਦੇ ਪਿੱਛੇ ਅਤੇ ਬੈਂਕ ਦੇ ਅਸਲੀ ਐਪ ਵਿੱਚ ਲਿਖਿਆ ਹੁੰਦਾ ਹੈ।"
    ]
  },
  "lottery": {
    "en": [
      "Scammers use famous names like KBC or big companies to look real. Real contests never call you asking for a fee.",
      "A 'scratch card' that asks for your PIN to claim cashback will take money, not give it."
    ],
    "hi": [
      "ठग असली दिखने के लिए KBC या बड़ी कंपनियों के नाम इस्तेमाल करते हैं। असली प्रतियोगिताएं कभी फ़ोन करके फीस नहीं मांगतीं।",
      "जो 'स्क्रैच कार्ड' कैशबैक के लिए PIN मांगे, वह पैसे देगा नहीं, ले लेगा।"
    ],
    "pa": [
      "ਠੱਗ ਅਸਲੀ ਦਿਸਣ ਲਈ KBC ਜਾਂ ਵੱਡੀਆਂ ਕੰਪਨੀਆਂ ਦੇ ਨਾਂ ਵਰਤਦੇ ਹਨ। ਅਸਲੀ ਮੁਕਾਬਲੇ ਕਦੇ ਫ਼ੋਨ ਕਰਕੇ ਫੀਸ ਨਹੀਂ ਮੰਗਦੇ।",
      "ਜੋ 'ਸਕ੍ਰੈਚ ਕਾਰਡ' ਕੈਸ਼ਬੈਕ ਲਈ PIN ਮੰਗੇ, ਉਹ ਪੈਸੇ ਦੇਵੇਗਾ ਨਹੀਂ, ਲੈ ਲਵੇਗਾ।"
    ]
  },
  "job": {
    "en": [
      "Task scams start with tiny payouts like ₹50 to ₹150 to build trust, then ask for bigger 'deposits'.",
      "The other 'members' in these groups who post big profits are often part of the scam team."
    ],
    "hi": [
      "टास्क वाली ठगी में पहले ₹50 से ₹150 जैसे छोटे पैसे देकर भरोसा जीता जाता है, फिर बड़ी 'जमा राशि' मांगी जाती है।",
      "इन ग्रुप में बड़ी कमाई दिखाने वाले दूसरे 'सदस्य' अक्सर ठगों की ही टीम होते हैं।"
    ],
    "pa": [
      "ਟਾਸਕ ਵਾਲੀ ਠੱਗੀ ਵਿੱਚ ਪਹਿਲਾਂ ₹50 ਤੋਂ ₹150 ਵਰਗੇ ਛੋਟੇ ਪੈਸੇ ਦੇ ਕੇ ਭਰੋਸਾ ਜਿੱਤਿਆ ਜਾਂਦਾ ਹੈ, ਫਿਰ ਵੱਡੀ 'ਜਮ੍ਹਾਂ ਰਕਮ' ਮੰਗੀ ਜਾਂਦੀ ਹੈ।",
      "ਇਨ੍ਹਾਂ ਗਰੁੱਪਾਂ ਵਿੱਚ ਵੱਡੀ ਕਮਾਈ ਦਿਖਾਉਣ ਵਾਲੇ ਦੂਜੇ 'ਮੈਂਬਰ' ਅਕਸਰ ਠੱਗਾਂ ਦੀ ਹੀ ਟੀਮ ਹੁੰਦੇ ਹਨ।"
    ]
  },
  "bill": {
    "en": [
      "These messages are often sent at night, when offices are closed and you can't check.",
      "The fake 'officer' often asks you to install an app to pay, which is really a screen-share app."
    ],
    "hi": [
      "ये मैसेज अक्सर रात में भेजे जाते हैं, जब दफ़्तर बंद होते हैं और आप जाँच नहीं कर पाते।",
      "नकली 'अफसर' अक्सर पैसे भरने के लिए एक ऐप डलवाता है, जो असल में स्क्रीन-शेयर ऐप होता है।"
    ],
    "pa": [
      "ਇਹ ਮੈਸੇਜ ਅਕਸਰ ਰਾਤ ਨੂੰ ਭੇਜੇ ਜਾਂਦੇ ਹਨ, ਜਦੋਂ ਦਫ਼ਤਰ ਬੰਦ ਹੁੰਦੇ ਹਨ ਅਤੇ ਤੁਸੀਂ ਜਾਂਚ ਨਹੀਂ ਕਰ ਸਕਦੇ।",
      "ਨਕਲੀ 'ਅਫ਼ਸਰ' ਅਕਸਰ ਪੈਸੇ ਭਰਨ ਲਈ ਇੱਕ ਐਪ ਪਵਾਉਂਦਾ ਹੈ, ਜੋ ਅਸਲ ਵਿੱਚ ਸਕਰੀਨ-ਸ਼ੇਅਰ ਐਪ ਹੁੰਦਾ ਹੈ।"
    ]
  },
  "olx": {
    "en": [
      "Fake buyers often agree to your price without bargaining or asking questions. That's a warning sign.",
      "Photos of an army ID card or uniform are easy to copy from the internet. They prove nothing."
    ],
    "hi": [
      "नकली खरीदार अक्सर बिना मोलभाव या सवाल पूछे आपकी कीमत मान लेते हैं। यह खतरे का संकेत है।",
      "आर्मी ID कार्ड या वर्दी की फोटो इंटरनेट से आसानी से कॉपी हो जाती है। इससे कुछ साबित नहीं होता।"
    ],
    "pa": [
      "ਨਕਲੀ ਖਰੀਦਦਾਰ ਅਕਸਰ ਬਿਨਾਂ ਮੋਲ-ਭਾਅ ਜਾਂ ਸਵਾਲ ਪੁੱਛੇ ਤੁਹਾਡੀ ਕੀਮਤ ਮੰਨ ਲੈਂਦੇ ਹਨ। ਇਹ ਖ਼ਤਰੇ ਦੀ ਨਿਸ਼ਾਨੀ ਹੈ।",
      "ਆਰਮੀ ID ਕਾਰਡ ਜਾਂ ਵਰਦੀ ਦੀ ਫ਼ੋਟੋ ਇੰਟਰਨੈੱਟ ਤੋਂ ਆਸਾਨੀ ਨਾਲ ਕਾਪੀ ਹੋ ਜਾਂਦੀ ਹੈ। ਇਸ ਨਾਲ ਕੁਝ ਸਾਬਤ ਨਹੀਂ ਹੁੰਦਾ।"
    ]
  },
  "screenshot": {
    "en": [
      "Fake payment apps can even play a 'payment received' sound. Trust only your own sound box or bank app.",
      "This trick works best in busy hours. Shopkeepers should check every payment, even when there's a queue."
    ],
    "hi": [
      "नकली पेमेंट ऐप 'पेमेंट मिल गया' की आवाज़ भी बजा सकते हैं। सिर्फ अपने साउंड बॉक्स या बैंक ऐप पर भरोसा करें।",
      "भीड़ के समय यह चाल सबसे ज़्यादा चलती है। लाइन लगी हो तब भी दुकानदार हर पेमेंट जाँचें।"
    ],
    "pa": [
      "ਨਕਲੀ ਪੇਮੈਂਟ ਐਪ 'ਪੇਮੈਂਟ ਮਿਲ ਗਿਆ' ਦੀ ਆਵਾਜ਼ ਵੀ ਵਜਾ ਸਕਦੇ ਹਨ। ਸਿਰਫ਼ ਆਪਣੇ ਸਾਊਂਡ ਬਾਕਸ ਜਾਂ ਬੈਂਕ ਐਪ ਉੱਤੇ ਭਰੋਸਾ ਕਰੋ।",
      "ਭੀੜ ਦੇ ਵੇਲੇ ਇਹ ਚਾਲ ਸਭ ਤੋਂ ਵੱਧ ਚੱਲਦੀ ਹੈ। ਲਾਈਨ ਲੱਗੀ ਹੋਵੇ ਤਾਂ ਵੀ ਦੁਕਾਨਦਾਰ ਹਰ ਪੇਮੈਂਟ ਜਾਂਚਣ।"
    ]
  },
  "arrest": {
    "en": [
      "Scammers use fake police station backgrounds and uniforms on video calls to scare people.",
      "They say 'don't tell anyone or you'll be arrested'. Keeping you alone is part of the trick, so tell your family."
    ],
    "hi": [
      "ठग वीडियो कॉल पर नकली पुलिस स्टेशन का बैकग्राउंड और वर्दी इस्तेमाल करके लोगों को डराते हैं।",
      "वे कहते हैं 'किसी को बताया तो गिरफ्तार हो जाओगे'। आपको अकेला रखना इस चाल का हिस्सा है, इसलिए परिवार को ज़रूर बताएं।"
    ],
    "pa": [
      "ਠੱਗ ਵੀਡੀਓ ਕਾਲ ਉੱਤੇ ਨਕਲੀ ਪੁਲਿਸ ਸਟੇਸ਼ਨ ਦਾ ਬੈਕਗ੍ਰਾਊਂਡ ਅਤੇ ਵਰਦੀ ਵਰਤ ਕੇ ਲੋਕਾਂ ਨੂੰ ਡਰਾਉਂਦੇ ਹਨ।",
      "ਉਹ ਕਹਿੰਦੇ ਹਨ 'ਕਿਸੇ ਨੂੰ ਦੱਸਿਆ ਤਾਂ ਗ੍ਰਿਫ਼ਤਾਰ ਹੋ ਜਾਓਗੇ'। ਤੁਹਾਨੂੰ ਇਕੱਲਾ ਰੱਖਣਾ ਇਸ ਚਾਲ ਦਾ ਹਿੱਸਾ ਹੈ, ਇਸ ਲਈ ਪਰਿਵਾਰ ਨੂੰ ਜ਼ਰੂਰ ਦੱਸੋ।"
    ]
  },
  "link": {
    "en": [
      "Fake links can look almost real, like 'mybank-rewards.co' instead of the bank's real website. One letter can make the difference.",
      "Once installed, a '.apk' file sent on WhatsApp can hide on your phone and read all your SMS, including OTPs."
    ],
    "hi": [
      "नकली लिंक लगभग असली जैसे दिख सकते हैं, जैसे बैंक की असली वेबसाइट की जगह 'mybank-rewards.co'। एक अक्षर का फ़र्क भी हो सकता है।",
      "WhatsApp पर आई '.apk' फ़ाइल इंस्टॉल होने के बाद फ़ोन में छिपकर आपके सारे SMS पढ़ सकती है, OTP भी।"
    ],
    "pa": [
      "ਨਕਲੀ ਲਿੰਕ ਲਗਭਗ ਅਸਲੀ ਵਰਗੇ ਦਿਸ ਸਕਦੇ ਹਨ, ਜਿਵੇਂ ਬੈਂਕ ਦੀ ਅਸਲੀ ਵੈੱਬਸਾਈਟ ਦੀ ਥਾਂ 'mybank-rewards.co'। ਇੱਕ ਅੱਖਰ ਦਾ ਫ਼ਰਕ ਵੀ ਹੋ ਸਕਦਾ ਹੈ।",
      "WhatsApp ਉੱਤੇ ਆਈ '.apk' ਫ਼ਾਈਲ ਇੰਸਟਾਲ ਹੋਣ ਤੋਂ ਬਾਅਦ ਫ਼ੋਨ ਵਿੱਚ ਲੁਕ ਕੇ ਤੁਹਾਡੇ ਸਾਰੇ SMS ਪੜ੍ਹ ਸਕਦੀ ਹੈ, OTP ਵੀ।"
    ]
  },
  "friend": {
    "en": [
      "Some scammers now use AI to copy a person's voice. Even if the voice sounds right, call back on the old number.",
      "Ask a question only the real person would know, like a family nickname."
    ],
    "hi": [
      "कुछ ठग अब AI से किसी की आवाज़ की नकल कर लेते हैं। आवाज़ सही लगे तब भी पुराने नंबर पर वापस फ़ोन करें।",
      "कोई ऐसा सवाल पूछें जो सिर्फ असली व्यक्ति जानता हो, जैसे घर का कोई निकनेम।"
    ],
    "pa": [
      "ਕੁਝ ਠੱਗ ਹੁਣ AI ਨਾਲ ਕਿਸੇ ਦੀ ਆਵਾਜ਼ ਦੀ ਨਕਲ ਕਰ ਲੈਂਦੇ ਹਨ। ਆਵਾਜ਼ ਸਹੀ ਲੱਗੇ ਤਾਂ ਵੀ ਪੁਰਾਣੇ ਨੰਬਰ ਉੱਤੇ ਵਾਪਸ ਫ਼ੋਨ ਕਰੋ।",
      "ਕੋਈ ਅਜਿਹਾ ਸਵਾਲ ਪੁੱਛੋ ਜੋ ਸਿਰਫ਼ ਅਸਲੀ ਵਿਅਕਤੀ ਜਾਣਦਾ ਹੋਵੇ, ਜਿਵੇਂ ਘਰ ਦਾ ਕੋਈ ਨਿੱਕਾ ਨਾਂ।"
    ]
  },
  "suspicious": {
    "en": [
      "Spelling mistakes, strange links and unknown numbers are common signs of a scam message.",
      "You can report fraud calls and messages on the government's Sanchar Saathi portal using the 'Chakshu' option."
    ],
    "hi": [
      "स्पेलिंग की गलतियाँ, अजीब लिंक और अनजान नंबर ठगी वाले मैसेज के आम संकेत हैं।",
      "आप सरकार के संचार साथी पोर्टल पर 'चक्षु' विकल्प से ठगी वाले कॉल और मैसेज की शिकायत कर सकते हैं।"
    ],
    "pa": [
      "ਸਪੈਲਿੰਗ ਦੀਆਂ ਗਲਤੀਆਂ, ਅਜੀਬ ਲਿੰਕ ਅਤੇ ਅਣਜਾਣ ਨੰਬਰ ਠੱਗੀ ਵਾਲੇ ਮੈਸੇਜ ਦੀਆਂ ਆਮ ਨਿਸ਼ਾਨੀਆਂ ਹਨ।",
      "ਤੁਸੀਂ ਸਰਕਾਰ ਦੇ ਸੰਚਾਰ ਸਾਥੀ ਪੋਰਟਲ ਉੱਤੇ 'ਚਕਸ਼ੂ' ਵਿਕਲਪ ਨਾਲ ਠੱਗੀ ਵਾਲੀਆਂ ਕਾਲਾਂ ਅਤੇ ਮੈਸੇਜਾਂ ਦੀ ਸ਼ਿਕਾਇਤ ਕਰ ਸਕਦੇ ਹੋ।"
    ]
  },
  "lost": {
    "en": [
      "Reporting within the first hour (the 'golden hour') gives the best chance of freezing the money.",
      "Beware of 'recovery agents' who promise to get your money back for a fee. That's a second scam."
    ],
    "hi": [
      "पहले एक घंटे ('गोल्डन आवर') में शिकायत करने से पैसे रुकवाने की सबसे अच्छी संभावना होती है।",
      "जो 'रिकवरी एजेंट' फीस लेकर पैसे वापस दिलाने का वादा करें, उनसे बचें। यह दूसरी ठगी है।"
    ],
    "pa": [
      "ਪਹਿਲੇ ਇੱਕ ਘੰਟੇ ('ਗੋਲਡਨ ਆਵਰ') ਵਿੱਚ ਸ਼ਿਕਾਇਤ ਕਰਨ ਨਾਲ ਪੈਸੇ ਰੁਕਵਾਉਣ ਦੀ ਸਭ ਤੋਂ ਵਧੀਆ ਸੰਭਾਵਨਾ ਹੁੰਦੀ ਹੈ।",
      "ਜੋ 'ਰਿਕਵਰੀ ਏਜੰਟ' ਫੀਸ ਲੈ ਕੇ ਪੈਸੇ ਵਾਪਸ ਦਿਵਾਉਣ ਦਾ ਵਾਅਦਾ ਕਰਨ, ਉਨ੍ਹਾਂ ਤੋਂ ਬਚੋ। ਇਹ ਦੂਜੀ ਠੱਗੀ ਹੈ।"
    ]
  },
  "safeway": {
    "en": [
      "Many UPI apps let you set a daily payment limit, so even a mistake can't take too much.",
      "Change your UPI PIN if you think anyone saw you type it. Don't use easy PINs like 1234 or your birth year."
    ],
    "hi": [
      "कई UPI ऐप में आप रोज़ की पेमेंट सीमा तय कर सकते हैं, ताकि गलती होने पर भी ज़्यादा पैसे न जाएं।",
      "अगर लगे कि किसी ने आपको PIN डालते देखा है तो UPI PIN बदलें। 1234 या जन्म का साल जैसा आसान PIN न रखें।"
    ],
    "pa": [
      "ਕਈ UPI ਐਪਾਂ ਵਿੱਚ ਤੁਸੀਂ ਰੋਜ਼ਾਨਾ ਪੇਮੈਂਟ ਸੀਮਾ ਤੈਅ ਕਰ ਸਕਦੇ ਹੋ, ਤਾਂ ਜੋ ਗਲਤੀ ਹੋਣ ਉੱਤੇ ਵੀ ਜ਼ਿਆਦਾ ਪੈਸੇ ਨਾ ਜਾਣ।",
      "ਜੇ ਲੱਗੇ ਕਿ ਕਿਸੇ ਨੇ ਤੁਹਾਨੂੰ PIN ਪਾਉਂਦੇ ਵੇਖਿਆ ਹੈ ਤਾਂ UPI PIN ਬਦਲੋ। 1234 ਜਾਂ ਜਨਮ ਦਾ ਸਾਲ ਵਰਗਾ ਆਸਾਨ PIN ਨਾ ਰੱਖੋ।"
    ]
  }
};
