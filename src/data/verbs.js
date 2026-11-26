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
  .filter((v) => v && v.type === "verb")
  .sort((a, b) => {
    const aId = String(a.id);
    const bId = String(b.id);
    const aNumber = Number(aId.match(/\d+/)?.[0]);
    const bNumber = Number(bId.match(/\d+/)?.[0]);

    if (Number.isFinite(aNumber) && Number.isFinite(bNumber) && aNumber !== bNumber) {
      return aNumber - bNumber;
    }

    return aId.localeCompare(bId, undefined, { numeric: true });
  });

export default verbs;
