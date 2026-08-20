// src/pages/MixedFlashcardsPage.jsx
import React, { useEffect, useState } from 'react';
import { getMixedFlashcards } from '../utils/mixedFlashcardEngine';

function MixedFlashcardsPage() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCards(getMixedFlashcards());
  }, []);

  const current = cards[index];

  function nextCard() {
    setIndex((i) => (i + 1 < cards.length ? i + 1 : 0));
  }

  if (!current) {
    return <div className="p-4">Loading flashcards…</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mixed Flashcards</h2>

      <div className="border p-4 rounded shadow mb-4">
        <h3 className="text-lg font-semibold">{current.arabic}</h3>
        <p className="text-gray-600">{current.english}</p>
        <p className="text-sm text-gray-500 mt-2">Type: {current.type}</p>
      </div>

      <button
        onClick={nextCard}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default MixedFlashcardsPage;
