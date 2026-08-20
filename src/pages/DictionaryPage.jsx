import React, { useState, useEffect } from "react";

export default function DictionaryPage() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [isVerb, setIsVerb] = useState(false);
  const [verbData, setVerbData] = useState(null);
  const [currentView, setCurrentView] = useState("search"); // 'search', 'result', 'conjugations', 'verbs', 'nouns', 'grammar'
  const [selectedTense, setSelectedTense] = useState("");
  const [grammarLevel, setGrammarLevel] = useState("");
  const [selectedRoot1, setSelectedRoot1] = useState("");
  const [selectedRoot2, setSelectedRoot2] = useState("");
  const [selectedRoot3, setSelectedRoot3] = useState("");
  const [rootSearchResults, setRootSearchResults] = useState([]);
  const [rootSearchUsed, setRootSearchUsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dictionary, setDictionary] = useState({});
  const [adminJson, setAdminJson] = useState("");

  // -----------------------------
  // VOWEL OPTIONS (your original)
  // -----------------------------
  const vowelOptions = [
    { letter: "ا", display: "اَ (fatha)", value: "اَ" },
    { letter: "ا", display: "اِ (kasra)", value: "اِ" },
    { letter: "ا", display: "اُ (damma)", value: "اُ" },
    { letter: "ب", display: "بَ (fatha)", value: "بَ" },
    { letter: "ب", display: "بِ (kasra)", value: "بِ" },
    { letter: "ب", display: "بُ (damma)", value: "بُ" },
    { letter: "ت", display: "تَ (fatha)", value: "تَ" },
    { letter: "ت", display: "تِ (kasra)", value: "تِ" },
    { letter: "ت", display: "تُ (damma)", value: "تُ" },
    { letter: "ث", display: "ثَ (fatha)", value: "ثَ" },
    { letter: "ث", display: "ثِ (kasra)", value: "ثِ" },
    { letter: "ث", display: "ثُ (damma)", value: "ثُ" },
    { letter: "ج", display: "جَ (fatha)", value: "جَ" },
    { letter: "ج", display: "جِ (kasra)", value: "جِ" },
    { letter: "ج", display: "جُ (damma)", value: "جُ" },
    { letter: "ح", display: "حَ (fatha)", value: "حَ" },
    { letter: "ح", display: "حِ (kasra)", value: "حِ" },
    { letter: "ح", display: "حُ (damma)", value: "حُ" },
    { letter: "خ", display: "خَ (fatha)", value: "خَ" },
    { letter: "خ", display: "خِ (kasra)", value: "خِ" },
    { letter: "خ", display: "خُ (damma)", value: "خُ" },
    { letter: "د", display: "دَ (fatha)", value: "دَ" },
    { letter: "د", display: "دِ (kasra)", value: "دِ" },
    { letter: "د", display: "دُ (damma)", value: "دُ" },
    { letter: "ذ", display: "ذَ (fatha)", value: "ذَ" },
    { letter: "ذ", display: "ذِ (kasra)", value: "ذِ" },
    { letter: "ذ", display: "ذُ (damma)", value: "ذُ" },
    { letter: "ر", display: "رَ (fatha)", value: "رَ" },
    { letter: "ر", display: "رِ (kasra)", value: "رِ" },
    { letter: "ر", display: "رُ (damma)", value: "رُ" },
    { letter: "ز", display: "زَ (fatha)", value: "زَ" },
    { letter: "ز", display: "زِ (kasra)", value: "زِ" },
    { letter: "ز", display: "زُ (damma)", value: "زُ" },
    { letter: "س", display: "سَ (fatha)", value: "سَ" },
    { letter: "س", display: "سِ (kasra)", value: "سِ" },
    { letter: "س", display: "سُ (damma)", value: "سُ" },
    { letter: "ش", display: "شَ (fatha)", value: "شَ" },
    { letter: "ش", display: "شِ (kasra)", value: "شِ" },
    { letter: "ش", display: "شُ (damma)", value: "شُ" },
    { letter: "ص", display: "صَ (fatha)", value: "صَ" },
    { letter: "ص", display: "صِ (kasra)", value: "صِ" },
    { letter: "ص", display: "صُ (damma)", value: "صُ" },
    { letter: "ض", display: "ضَ (fatha)", value: "ضَ" },
    { letter: "ض", display: "ضِ (kasra)", value: "ضِ" },
    { letter: "ض", display: "ضُ (damma)", value: "ضُ" },
    { letter: "ط", display: "طَ (fatha)", value: "طَ" },
    { letter: "ط", display: "طِ (kasra)", value: "طِ" },
    { letter: "ط", display: "طُ (damma)", value: "طُ" },
    { letter: "ظ", display: "ظَ (fatha)", value: "ظَ" },
    { letter: "ظ", display: "ظِ (kasra)", value: "ظِ" },
    { letter: "ظ", display: "ظُ (damma)", value: "ظُ" },
    { letter: "ع", display: "عَ (fatha)", value: "عَ" },
    { letter: "ع", display: "عِ (kasra)", value: "عِ" },
    { letter: "ع", display: "عُ (damma)", value: "عُ" },
    { letter: "غ", display: "غَ (fatha)", value: "غَ" },
    { letter: "غ", display: "غِ (kasra)", value: "غِ" },
    { letter: "غ", display: "غُ (damma)", value: "غُ" },
    { letter: "ف", display: "فَ (fatha)", value: "فَ" },
    { letter: "ف", display: "فِ (kasra)", value: "فِ" },
    { letter: "ف", display: "فُ (damma)", value: "فُ" },
    { letter: "ق", display: "قَ (fatha)", value: "قَ" },
    { letter: "ق", display: "قِ (kasra)", value: "قِ" },
    { letter: "ق", display: "قُ (damma)", value: "قُ" },
    { letter: "ك", display: "كَ (fatha)", value: "كَ" },
    { letter: "ك", display: "كِ (kasra)", value: "كِ" },
    { letter: "ك", display: "كُ (damma)", value: "كُ" },
    { letter: "ل", display: "لَ (fatha)", value: "لَ" },
    { letter: "ل", display: "لِ (kasra)", value: "لِ" },
    { letter: "ل", display: "لُ (damma)", value: "لُ" },
    { letter: "م", display: "مَ (fatha)", value: "مَ" },
    { letter: "م", display: "مِ (kasra)", value: "مِ" },
    { letter: "م", display: "مُ (damma)", value: "مُ" },
    { letter: "ن", display: "نَ (fatha)", value: "نَ" },
    { letter: "ن", display: "نِ (kasra)", value: "نِ" },
    { letter: "ن", display: "نُ (damma)", value: "نُ" },
    { letter: "ه", display: "هَ (fatha)", value: "هَ" },
    { letter: "ه", display: "هِ (kasra)", value: "هِ" },
    { letter: "ه", display: "هُ (damma)", value: "هُ" },
    { letter: "و", display: "وَ (fatha)", value: "وَ" },
    { letter: "و", display: "وِ (kasra)", value: "وِ" },
    { letter: "و", display: "وُ (damma)", value: "وُ" },
    { letter: "ي", display: "يَ (fatha)", value: "يَ" },
    { letter: "ي", display: "يِ (kasra)", value: "يِ" },
    { letter: "ي", display: "يُ (damma)", value: "يُ" },
  ];

  // -----------------------------
  // DEFAULT DICTIONARY
  // -----------------------------
  const defaultDictionary = {
    سلام: {
      type: "noun",
      arabic: "سلام",
      english: "Peace/Greeting",
      meaning: "Greeting in Arabic",
    },
    كتاب: {
      type: "noun",
      arabic: "كتاب",
      english: "Book",
      meaning: "Book",
      gender: "masculine",
      forms: {
        singular: "كتاب",
        dual: "كتابان",
        plural: "كتب",
      },
    },
    مدرسة: {
      type: "noun",
      arabic: "مدرسة",
      english: "School",
      meaning: "School",
      gender: "feminine",
      forms: {
        singular: "مدرسة",
        dual: "مدرستان",
        plural: "مدارس",
      },
    },
    نصر: {
      type: "verb",
      arabic: "نصر",
      english: "To help",
      meaning: "To help",
      form: "I",
      family: "ن – ص – ر",
      root: "ن – ص – ر",
      conjugations: {
        past: [
          "هُوَ: نَصَرَ",
          "هُمَا (م): نَصَرَا",
          "هُمْ: نَصَرُوا",
          "هِيَ: نَصَرَتْ",
          "هُمَا (ف): نَصَرَتَا",
          "هُنَّ: نَصَرْنَ",
          "أَنْتَ: نَصَرْتَ",
          "أَنْتُمَا: نَصَرْتُمَا",
          "أَنْتُمْ: نَصَرْتُمْ",
          "أَنْتِ: نَصَرْتِ",
          "أَنْتُنَّ: نَصَرْتُنَّ",
          "أَنَا: نَصَرْتُ",
          "نَحْنُ: نَصَرْنَا",
        ],
        present: [
          "هُوَ: يَنْصُرُ",
          "هُمَا (م): يَنْصُرَانِ",
          "هُمْ: يَنْصُرُونَ",
          "هِيَ: تَنْصُرُ",
          "هُمَا (ف): تَنْصُرَانِ",
          "هُنَّ: يَنْصُرْنَ",
          "أَنْتَ: تَنْصُرُ",
          "أَنْتُمَا: تَنْصُرَانِ",
          "أَنْتُمْ: تَنْصُرُونَ",
          "أَنْتِ: تَنْصُرِينَ",
          "أَنْتُنَّ: تَنْصُرْنَ",
          "أَنَا: أَنْصُرُ",
          "نَحْنُ: نَنْصُرُ",
        ],
        imperative: [
          "أَنْتَ: اُنْصُرْ",
          "أَنْتُمَا: اُنْصُرَا",
          "أَنْتُمْ: اُنْصُرُوا",
          "أَنْتِ: اُنْصُرِي",
          "أَنْتُنَّ: اُنْصُرْنَ",
        ],
        negatives: ["لَا يَنْصُرُ", "لَمْ يَنْصُرْ", "لَنْ يَنْصُرَ", "مَا نَصَرَ"],
      },
    },
  };

  // -----------------------------
  // LOAD DICTIONARY
  // -----------------------------
  useEffect(() => {
    const stored = localStorage.getItem("arabicDictionary");
    if (stored) {
      setDictionary(JSON.parse(stored));
    } else {
      setDictionary(defaultDictionary);
      localStorage.setItem(
        "arabicDictionary",
        JSON.stringify(defaultDictionary)
      );
    }
  }, []);

  const saveDictionary = (newDict) => {
    setDictionary(newDict);
    localStorage.setItem("arabicDictionary", JSON.stringify(newDict));
  };

  // -----------------------------
  // NORMALIZE ARABIC
  // -----------------------------
  const normalizeArabic = (text) => {
    return text?.replace(/[\u064B-\u0652\u0640\s–-]/g, "").trim() || "";
  };

  // -----------------------------
  // SEARCH
  // -----------------------------
  const handleSearch = (searchWord) => {
    const lookup = searchWord || word;
    const result = dictionary[lookup];

    if (result?.type === "verb") {
      setIsVerb(true);
      setVerbData(result);
      setDefinition(
        `${result.arabic} (${result.english}) - فعل: ${result.meaning} (الصيغة ${result.form}، الجذر ${result.family})`
      );
      if (!searchWord) setWord(lookup);
      setCurrentView("result");
    } else if (result?.type === "noun") {
      setIsVerb(false);
      setVerbData(null);
      setDefinition(
        `${result.arabic} (${result.english}) - اسم: ${result.meaning} (${
          result.gender === "masculine" ? "مذكر" : "مؤنث"
        })`
      );
      if (!searchWord) setWord(lookup);
      setCurrentView("result");
    } else {
      setIsVerb(false);
      setVerbData(null);
      setDefinition("لم يتم العثور على هذا اللفظ");
      setCurrentView("result");
    }
  };

  // -----------------------------
  // ROOT SEARCH
  // -----------------------------
  const handleRootSearch = () => {
    setRootSearchUsed(true);

    if (!selectedRoot1 || !selectedRoot2 || !selectedRoot3) {
      setRootSearchResults([]);
      return;
    }

    const rootKey = normalizeArabic(
      `${selectedRoot1}${selectedRoot2}${selectedRoot3}`
    );

    const matches = Object.entries(dictionary)
      .filter(
        ([, value]) =>
          value?.type === "verb" &&
          value.root &&
          normalizeArabic(value.root) === rootKey
      )
      .map(([key]) => key);

    setRootSearchResults(matches);

    if (matches.length === 1) {
      setWord(matches[0]);
      handleSearch(matches[0]);
    }
  };

  // -----------------------------
  // ADMIN
  // -----------------------------
  const toggleAdmin = () => setIsAdmin((prev) => !prev);

  const importData = () => {
    try {
      const newData = JSON.parse(adminJson);
      const updatedDict = { ...dictionary, ...newData };
      saveDictionary(updatedDict);
      alert("Data imported successfully!");
      setAdminJson("");
    } catch (e) {
      alert("Invalid JSON: " + e.message);
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(dictionary, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = "arabic-dictionary.json";
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const backToSearch = () => {
    setCurrentView("search");
    setSelectedTense("");
    setGrammarLevel("");
  };

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="font-calibri max-w-4xl w-full p-8 bg-white rounded-2xl shadow-2xl min-h-[80vh] border border-gray-200 mx-auto mt-10 relative">
      {/* Admin toggle */}
      <button
        onClick={toggleAdmin}
        className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded"
      >
        {isAdmin ? "Exit Admin" : "Admin Mode"}
      </button>

      {/* Admin panel */}
      {isAdmin && (
        <div className="border border-gray-300 p-4 mb-6 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-2">Admin Panel</h2>
          <textarea
            value={adminJson}
            onChange={(e) => setAdminJson(e.target.value)}
            placeholder="Paste JSON data to import"
            rows={10}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <div className="flex gap-2">
            <button
              onClick={importData}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Import Data
            </button>
            <button
              onClick={exportData}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Export Data
            </button>
          </div>
        </div>
      )}

      {/* MAIN VIEWS */}
      {currentView === "search" && (
        <>
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6 ui-text">
            Arabic Dictionary
          </h1>

          {/* Category buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setCurrentView("verbs")}
              className="bg-green-500 text-white px-6 py-3 rounded button-text-large"
            >
              Verbs
            </button>
            <button
              onClick={() => setCurrentView("nouns")}
              className="bg-blue-500 text-white px-6 py-3 rounded button-text-large"
            >
              Nouns
            </button>
            <button
              onClick={() => setCurrentView("grammar")}
              className="bg-purple-500 text-white px-6 py-3 rounded button-text-large"
            >
              Grammar
            </button>
          </div>

          {/* Word search */}
          <div className="text-center mb-6">
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Enter verb or noun here"
              className="p-3 w-80 border border-gray-300 rounded ui-text block mx-auto mb-2"
            />
            <button
              onClick={() => handleSearch()}
              className="bg-blue-500 text-white px-6 py-3 rounded button-text-large"
            >
              Search
            </button>
          </div>

          {/* Root search */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <p className="text-gray-700 mb-3 ui-text">
              Or choose the three-letter root of the verb from the dropdowns
              below (each letter shows with vowel signs - fathaَ / kasraِ /
              dammaُ):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="flex flex-col">
                <label className="text-center ui-text mb-3 font-semibold">
                  First Letter
                </label>
                <select
                  value={selectedRoot1}
                  onChange={(e) => setSelectedRoot1(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-right large-dropdown"
                >
                  <option value="">Choose</option>
                  {vowelOptions.map((option, idx) => (
                    <option
                      key={`r1-${idx}-${option.value}`}
                      value={option.value}
                    >
                      {option.display}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-center ui-text mb-3 font-semibold">
                  Second Letter
                </label>
                <select
                  value={selectedRoot2}
                  onChange={(e) => setSelectedRoot2(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-right large-dropdown"
                >
                  <option value="">Choose</option>
                  {vowelOptions.map((option, idx) => (
                    <option
                      key={`r2-${idx}-${option.value}`}
                      value={option.value}
                    >
                      {option.display}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-center ui-text mb-3 font-semibold">
                  Third Letter
                </label>
                <select
                  value={selectedRoot3}
                  onChange={(e) => setSelectedRoot3(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-right large-dropdown"
                >
                  <option value="">Choose</option>
                  {vowelOptions.map((option, idx) => (
                    <option
                      key={`r3-${idx}-${option.value}`}
                      value={option.value}
                    >
                      {option.display}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleRootSearch}
                className="bg-indigo-500 text-white px-6 py-3 rounded button-text-large"
              >
                Search by Root
              </button>
            </div>

            {rootSearchResults.length > 0 && (
              <div className="mt-4 text-right">
                <p className="text-gray-800 mb-2">Matching verbs:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {rootSearchResults.map((result) => (
                    <button
                      key={result}
                      onClick={() => handleSearch(result)}
                      className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                    >
                      {result}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {rootSearchUsed &&
              rootSearchResults.length === 0 &&
              selectedRoot1 &&
              selectedRoot2 &&
              selectedRoot3 && (
                <p className="mt-4 text-red-600">
                  No verbs found with this root.
                </p>
              )}
          </div>
        </>
      )}

      {/* RESULT VIEW */}
      {currentView === "result" && definition && (
        <>
          <h2 className="text-center text-xl font-bold mb-6">Result</h2>
          <div className="text-center text-xl mb-6">
            {isVerb ? (
              <div>
                <div className="mb-2">
                  <span className="font-bold text-2xl text-blue-600">
                    {word}
                  </span>
                  <span className="text-lg text-gray-600 ml-2">
                    ({dictionary[word]?.english})
                  </span>
                </div>
                <p className="text-gray-700">
                  فعل: {dictionary[word]?.meaning} (الصيغة{" "}
                  {dictionary[word]?.form}، الجذر{" "}
                  {dictionary[word]?.family})
                </p>
                <button
                  onClick={() => setCurrentView("conjugations")}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded text-lg"
                >
                  عرض التصريفات
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-2">
                  <span className="font-bold text-2xl text-green-600">
                    {word}
                  </span>
                  <span className="text-lg text-gray-600 ml-2">
                    ({dictionary[word]?.english})
                  </span>
                </div>
                <p className="text-gray-700">
                  {definition.replace(
                    `${dictionary[word]?.arabic} (${dictionary[word]?.english}) - `,
                    ""
                  )}
                </p>
                {dictionary[word]?.type === "noun" && (
                  <div className="mt-4 bg-gray-50 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">
                      Forms:
                    </h3>
                    <p>
                      <strong>Singular:</strong>{" "}
                      {dictionary[word].forms.singular} (
                      {dictionary[word].gender === "masculine"
                        ? "masculine"
                        : "feminine"}
                      )
                    </p>
                    <p>
                      <strong>Dual:</strong> {dictionary[word].forms.dual}
                    </p>
                    <p>
                      <strong>Plural:</strong> {dictionary[word].forms.plural}{" "}
                      (non-human: feminine)
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={backToSearch}
              className="bg-gray-500 text-white px-6 py-3 text-lg rounded"
            >
              Back to Search
            </button>
          </div>
        </>
      )}

      {/* CONJUGATIONS VIEW */}
      {currentView === "conjugations" && verbData && (
        <>
          <h2 className="text-center text-xl font-bold mb-6">
            Conjugations for {word}
          </h2>
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            {["past", "present", "imperative", "negatives"].map((tense) => (
              <button
                key={tense}
                onClick={() => setSelectedTense(tense)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-lg"
              >
                {tense.charAt(0).toUpperCase() + tense.slice(1)}
              </button>
            ))}
          </div>
          {selectedTense && (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">
                {selectedTense.charAt(0).toUpperCase() +
                  selectedTense.slice(1)}{" "}
                Tense
              </h3>
              <ul className="list-none p-0 max-w-md mx-auto">
                {verbData.conjugations[selectedTense] ? (
                  verbData.conjugations[selectedTense].map((conj, index) => (
                    <li
                      key={index}
                      className="mb-2 text-lg text-gray-700 text-right"
                    >
                      {conj}
                    </li>
                  ))
                ) : (
                  <p>No conjugations found</p>
                )}
              </ul>
            </div>
          )}
          <div className="text-center mt-6">
            <button
              onClick={backToSearch}
              className="bg-gray-500 text-white px-6 py-3 text-lg rounded"
            >
              Back to Search
            </button>
          </div>
        </>
      )}

      {/* VERBS VIEW */}
      {currentView === "verbs" && (
        <>
          <h2 className="text-center text-xl font-bold mb-6">Verbs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(dictionary)
              .filter((key) => dictionary[key]?.type === "verb")
              .map((verb) => (
                <button
                  key={verb}
                  onClick={() => {
                    setWord(verb);
                    handleSearch(verb);
                  }}
                  className="bg-green-100 hover:bg-green-200 p-4 rounded text-lg text-right"
                >
                  {verb} ({dictionary[verb].english}):{" "}
                  {dictionary[verb].meaning}
                </button>
              ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={backToSearch}
              className="bg-gray-500 text-white px-6 py-3 text-lg rounded"
            >
              Back to Search
            </button>
          </div>
        </>
      )}

      {/* NOUNS VIEW */}
      {currentView === "nouns" && (
        <>
          <h2 className="text-center text-xl font-bold mb-6">Nouns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(dictionary)
              .filter((key) => dictionary[key]?.type === "noun")
              .map((noun) => (
                <button
                  key={noun}
                  onClick={() => {
                    setWord(noun);
                    handleSearch(noun);
                  }}
                  className="bg-blue-100 hover:bg-blue-200 p-4 rounded text-lg text-right"
                >
                  {noun} ({dictionary[noun].english}):{" "}
                  {dictionary[noun].meaning} (
                  {dictionary[noun].gender === "masculine"
                    ? "masculine"
                    : "feminine"}
                  )
                </button>
              ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={backToSearch}
              className="bg-gray-500 text-white px-6 py-3 text-lg rounded"
            >
              Back to Search
            </button>
          </div>
        </>
      )}

      {/* GRAMMAR VIEW */}
      {currentView === "grammar" && (
        <>
          <h2 className="text-center text-xl font-bold mb-6">
            Grammar Rules
          </h2>
          <div className="text-center mb-6">
            <button
              onClick={() => setGrammarLevel("simple")}
              className="bg-purple-300 hover:bg-purple-400 px-6 py-3 text-lg rounded mr-4"
            >
              Simple Rules
            </button>
            <button
              onClick={() => setGrammarLevel("in-depth")}
              className="bg-purple-500 text-white px-6 py-3 text-lg rounded"
            >
              In-depth Rules
            </button>
          </div>
          {grammarLevel === "simple" && (
            <div className="text-right">
              <h3 className="text-lg font-semibold mb-4">Simple Rules</h3>
              <p className="mb-4">
                Arabic verbs change depending on tense and person. Past tense
                often ends with specific patterns, present starts with letters
                like ي or ت, and imperative has its own forms.
              </p>
              <p className="mb-4">
                Nouns have singular, dual, and plural forms. Singular is for
                one, dual for two, and plural for three or more.
              </p>
            </div>
          )}
          {grammarLevel === "in-depth" && (
            <div className="text-right">
              <h3 className="text-lg font-semibold mb-4">In-depth Rules</h3>
              <p className="mb-4">
                Three-letter verbs follow known conjugation patterns called
                "weights". Each pattern gives a different nuance to the meaning.
              </p>
              <p className="mb-4">
                Feminine nouns often end with "ة" in singular. Non-human plurals
                are treated as feminine singular in agreement.
              </p>
            </div>
          )}
          <div className="text-center mt-6">
            <button
              onClick={backToSearch}
              className="bg-gray-500 text-white px-6 py-3 text-lg rounded"
            >
              Back to Search
            </button>
          </div>
        </>
      )}
    </div>
  );
}
