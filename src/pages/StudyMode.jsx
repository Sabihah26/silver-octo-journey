// src/pages/StudyMode.jsx
import React, { useEffect, useState } from 'react';
import { getDueWords, updateWordReview } from '../utils/studyEngine';
import verbs from '../data/verbs';

function StudyMode() {
  const [dueWords, setDueWords] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const list = getDueWords(verbs);
    setDueWords(list);
    setCurrent(list[0] || null);
  }, []);

  function handleReview(result) {
    if (!current) return;

    updateWordReview(current.id, result);

    const remaining = dueWords.slice(1);
    setDueWords(remaining);
    setCurrent(remaining[0] || null);
  }

  if (!current) {
    return <div className="p-4">No words due for review.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Study Mode</h2>

      <div className="border p-4 rounded shadow">
        <h3 className="text-lg font-semibold">{current.arabic}</h3>
        <p className="text-gray-600">{current.english}</p>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => handleReview('correct')}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          I knew this
        </button>

        <button
          onClick={() => handleReview('wrong')}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          I forgot
        </button>
      </div>
    </div>
  );
}

export default StudyMode;
