// src/utils/tts.js

export function speakArabic(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ar-SA";
  utter.rate = 0.9;
  speechSynthesis.speak(utter);
}

export function speakEnglish(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 1;
  speechSynthesis.speak(utter);
}
