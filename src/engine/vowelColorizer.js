// src/engine/vowelColorizer.js

// Return an HTML string instead of React elements
export function colorizeArabic(text) {
  if (!text) return "";

  const map = {
    "َ": "color:#d9534f;",      // fatḥa - red
    "ُ": "color:#0275d8;",      // ḍamma - blue
    "ِ": "color:#5cb85c;",      // kasra - green
    "ْ": "color:#6c757d;",      // sukūn - grey
    "ّ": "font-weight:bold;",   // shadda - bold
  };

  let html = "";

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const style = map[ch];

    if (style) {
      html += `<span style="${style}">${ch}</span>`;
    } else {
      html += `<span>${ch}</span>`;
    }
  }

  return html;
}
