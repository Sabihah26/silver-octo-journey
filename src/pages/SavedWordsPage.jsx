// src/pages/SavedWordsPage.jsx
import React from 'react';
import AppLayout from '../components/AppLayout';

function SavedWordsPage() {
  const saved = JSON.parse(localStorage.getItem('savedWords') || '[]');

  return (
    <AppLayout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Saved Words</h2>

        {saved.length === 0 && (
          <p>No saved words yet.</p>
        )}

        {saved.map((word, i) => (
          <div key={i} className="border p-3 rounded mb-2">
            <h3 className="font-semibold">{word.arabic}</h3>
            <p className="text-gray-600">{word.english}</p>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

export default SavedWordsPage;
