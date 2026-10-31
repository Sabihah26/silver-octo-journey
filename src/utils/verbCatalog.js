import verbs from "../data/verbs";

export function normalizeTopicKey(topic) {
  return String(topic || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getVerbTopics(verb) {
  if (Array.isArray(verb?.topics) && verb.topics.length > 0) {
    return verb.topics.filter(Boolean);
  }

  if (verb?.topic) {
    return [verb.topic];
  }

  return [];
}

function romanToNumber(value) {
  const normalized = String(value || "").trim().toUpperCase();
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let total = 0;
  let previous = 0;

  for (let index = normalized.length - 1; index >= 0; index -= 1) {
    const current = romanMap[normalized[index]];

    if (!current) continue;

    if (current < previous) {
      total -= current;
    } else {
      total += current;
      previous = current;
    }
  }

  return total;
}

export function getVerbFormEntries(verbList = verbs) {
  const formNames = Array.from(new Set(verbList.map((verb) => verb.form).filter(Boolean)));

  return formNames
    .map((label) => {
      const numericMatch = String(label).match(/(\d+)/);
      const romanMatch = String(label).match(/([IVXLCDM]+)$/i);
      const number = numericMatch
        ? Number(numericMatch[1])
        : romanMatch
          ? romanToNumber(romanMatch[1])
          : null;

      return {
        label,
        number,
      };
    })
    .sort((a, b) => {
      if (a.number === null) return 1;
      if (b.number === null) return -1;
      return a.number - b.number;
    });
}

export function getVerbFormLabel(formNumber, verbList = verbs) {
  const entry = getVerbFormEntries(verbList).find(
    (form) => String(form.number) === String(formNumber)
  );

  return entry?.label || `Form ${formNumber}`;
}

/* ⭐ NEW — Safe topic grouping (no deletions, no renaming) */
const TOPIC_GROUPS = {
  actions: "daily life",
  movement: "daily life",

  authority: "communication",
  commands: "communication",
  speech: "communication",
  writing: "communication",

  learning: "school",

  "family meals": "food",
};

export function getTopicsForForm(formLabel, verbList = verbs) {
  const topics = new Set();

  verbList.forEach((verb) => {
    if (verb.form !== formLabel) return;

    const verbTopics = getVerbTopics(verb);

    if (verbTopics.length > 0) {
      verbTopics.forEach((topic) => {
        const normalized = TOPIC_GROUPS[topic] || topic; // ⭐ remap micro-topics safely
        topics.add(String(normalized));
      });
    } else {
      topics.add("General");
    }
  });

  return Array.from(topics).sort((a, b) => {
    if (a === "General") return 1;
    if (b === "General") return -1;
    return a.localeCompare(b);
  });
}

export function matchesTopic(verb, selectedTopic) {
  const normalizedTarget = normalizeTopicKey(selectedTopic);

  if (!normalizedTarget || normalizedTarget === "all") {
    return true;
  }

  const verbTopics = getVerbTopics(verb);

  if (verbTopics.length === 0) {
    return normalizeTopicKey("General") === normalizedTarget;
  }

  return verbTopics.some((topic) => normalizeTopicKey(topic) === normalizedTarget);
}
