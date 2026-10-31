// src/data/verbs.js

function importAll(r) {
  return r.keys().map(r);
}

// Automatically import ALL verb files in all subfolders
const modules = importAll(
  require.context("./verbs", true, /\.js$/)
);

const verbs = modules
  .map((m) => m.default)
  .filter((v) => v && v.type === "verb");

export default verbs;
