import React, { useState, useEffect, useMemo } from "react";

// -----------------------------
// SRS RATINGS
// -----------------------------
const SRS_RATINGS = {
  again: { key: "again", label: "Again", icon: "🔁", xp: 1, isMistake: true },
  hard: { key: "hard", label: "Hard", icon: "😬", xp: 2, isMistake: true },
  good: { key: "good", label: "Good", icon: "🙂", xp: 3, isMistake: false },
  easy: { key: "easy", label: "Easy", icon: "😎", xp: 4, isMistake: false },
};

// -----------------------------
// FALLBACK SAMPLE VERBS
// -----------------------------
const SAMPLE_VERBS = [
  {
    id: 1,
    arabic: "كتب",
    english: "to write",
    root: "ك ت ب",
    past: "كتب",
    present: "يكتب",
    masdar: "كتابة",
    examples: {
      simple: {
        ar: "أنا أكتب رسالة.",
        en: "I am writing a letter.",
        audio: "/audio/examples/ana_aktubu_risala.mp3",
      },
    },
  },
  {
    id: 2,
    arabic: "قرأ",
    english: "to read",
    root: "ق ر أ",
    past: "قرأ",
    present: "يقرأ",
    masdar: "قراءة",
    examples: {
      simple: {
        ar: "هي تقرأ كتابًا.",
        en: "She is reading a book.",
        audio: "/audio/examples/hiya_taqra_kitaban.mp3",
      },
    },
  },
];

// -----------------------------
// CONFETTI COMPONENT
// -----------------------------
const Confetti = () => {
  const pieces = Array.from({ length: 40 });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${0.5 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
};

// -----------------------------
// SUMMARY MODAL (UPGRADED DESIGN)
// -----------------------------
const SummaryModal = ({
  xpEarned,
  streak,
  level,
  mistakes,
  perfectSession,
  onClose,
  onReviewMistakes,
  onStudyAgain,
}) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[90%] max-w-[420px] bg-white rounded-2xl shadow-2xl p-6 text-center">
        <h2
          className="font-english text-black"
          style={{ fontSize: 21, fontWeight: "bold", marginBottom: 20 }}
        >
          Session Summary
        </h2>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-xl py-3 shadow-sm">
            <p className="font-english text-black" style={{ fontSize: 21 }}>
              <strong>{xpEarned}</strong>
            </p>
            <p className="font-english text-gray-600" style={{ fontSize: 16 }}>
              XP
            </p>
          </div>

          <div className="bg-green-50 rounded-xl py-3 shadow-sm">
            <p className="font-english text-black" style={{ fontSize: 21 }}>
              <strong>{streak}</strong>
            </p>
            <p className="font-english text-gray-600" style={{ fontSize: 16 }}>
              Streak
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl py-3 shadow-sm">
            <p className="font-english text-black" style={{ fontSize: 21 }}>
              <strong>{level}</strong>
            </p>
            <p className="font-english text-gray-600" style={{ fontSize: 16 }}>
              Level
            </p>
          </div>
        </div>

        {perfectSession && (
          <div className="bg-emerald-100 text-emerald-700 font-english font-bold py-3 rounded-xl mb-6 shadow-sm">
            🎉 Perfect Session No mistakes
          </div>
        )}

        {mistakes.length > 0 && (
          <div className="bg-red-100 text-red-700 rounded-xl p-4 mb-6 shadow-sm">
            <p
              className="font-english font-bold mb-3"
              style={{ fontSize: 21 }}
            >
              Mistakes
            </p>

            {mistakes.map((v) => (
              <div key={v.id} className="mb-2">
                <span
                  className="font-arabic text-black"
                  style={{ fontSize: 35 }}
                >
                  {v.arabic?.past || v.arabic}
                </span>
                <span
                  className="font-english text-black"
                  style={{ fontSize: 21 }}
                >
                  {" — "}
                  {v.english?.simple || v.english}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3">
          {mistakes.length > 0 && (
            <button
              onClick={onReviewMistakes}
              className="font-english bg-orange-500 text-white py-3 rounded-xl shadow-md"
              style={{ fontSize: 21, fontWeight: "bold" }}
            >
              Review Mistakes
            </button>
          )}

          <button
            onClick={onStudyAgain}
            className="font-english bg-blue-600 text-white py-3 rounded-xl shadow-md"
            style={{ fontSize: 21, fontWeight: "bold" }}
          >
            Study Again
          </button>

          <button
            onClick={onClose}
            className="font-english bg-gray-200 text-gray-800 py-3 rounded-xl shadow-md"
            style={{ fontSize: 21, fontWeight: "bold" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// MAIN COMPONENT
// -----------------------------
const RecommendedStudyPage = ({ recommendedVerbs = [] }) => {
  const sourceVerbs =
    recommendedVerbs && recommendedVerbs.length > 0
      ? recommendedVerbs
      : SAMPLE_VERBS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const [mistakes, setMistakes] = useState([]);
  const [answers, setAnswers] = useState([]);

  const [xpEarned, setXpEarned] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);

  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playEndSound, setPlayEndSound] = useState(false);
  const [perfectSession, setPerfectSession] = useState(false);

  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const totalCards = sourceVerbs.length;

  const currentVerb = useMemo(() => {
    if (reviewMode) return mistakes[reviewIndex] || null;
    return totalCards > 0 ? sourceVerbs[currentIndex] : null;
  }, [reviewMode, mistakes, reviewIndex, sourceVerbs, currentIndex, totalCards]);

  useEffect(() => {
    if (
      !sessionActive &&
      totalCards > 0 &&
      currentIndex === 0 &&
      !sessionCompleted
    ) {
      setSessionActive(true);
    }
  }, [totalCards, sessionActive, currentIndex, sessionCompleted]);

  useEffect(() => {
    if (!playEndSound) return;
    const audio = new Audio("/sounds/session-complete.mp3");
    audio.play().catch(() => {});
    const timeout = setTimeout(() => setPlayEndSound(false), 500);
    return () => clearTimeout(timeout);
  }, [playEndSound]);

  const resetSession = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionActive(true);
    setSessionCompleted(false);
    setMistakes([]);
    setAnswers([]);
    setXpEarned(0);
    setPerfectSession(false);
    setReviewMode(false);
    setReviewIndex(0);
    setShowSummaryModal(false);
    setShowConfetti(false);
  };

  const startReviewMistakes = () => {
    if (mistakes.length === 0) return;
    setReviewMode(true);
    setReviewIndex(0);
    setIsFlipped(false);
    setShowSummaryModal(false);
  };

  const exitReviewMistakes = () => {
    setReviewMode(false);
    setReviewIndex(0);
    setIsFlipped(false);
    setShowSummaryModal(true);
  };

  const handleFlip = () => {
    if (!currentVerb) return;
    setIsFlipped((prev) => !prev);
  };

  const handleRating = (ratingKey) => {
    if (!currentVerb) return;

    const rating = SRS_RATINGS[ratingKey];
    if (!rating) return;

    setAnswers((prev) => [
      ...prev,
      {
        verbId: currentVerb.id,
        rating: rating.key,
        timestamp: Date.now(),
      },
    ]);

    if (rating.isMistake) {
      setMistakes((prev) => {
        const already = prev.some((v) => v.id === currentVerb.id);
        if (already) return prev;
        return [...prev, currentVerb];
      });
    }

    setXpEarned((prev) => prev + rating.xp);

    reviewMode ? goToNextReviewCard() : goToNextStudyCard();
  };

  const goToNextStudyCard = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= totalCards) {
      finishSession();
    } else {
      setCurrentIndex(nextIndex);
      setIsFlipped(false);
    }
  };

  const goToNextReviewCard = () => {
    const nextIndex = reviewIndex + 1;
    if (nextIndex >= mistakes.length) {
      exitReviewMistakes();
    } else {
      setReviewIndex(nextIndex);
      setIsFlipped(false);
    }
  };

  const finishSession = () => {
    setSessionActive(false);
    setSessionCompleted(true);

    const hadMistakes = mistakes.length > 0;
    setPerfectSession(!hadMistakes);

    setShowConfetti(true);
    setPlayEndSound(true);
    setShowSummaryModal(true);

    setStreak((prev) => (hadMistakes ? 0 : prev + 1));
    setLevel((prev) => prev + (hadMistakes ? 0 : 1));
  };

  // -----------------------------
  // MAIN JSX
  // -----------------------------
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1f2937)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 24,
      }}
    >
      {showConfetti && <Confetti />}
      {playEndSound && <div />}

      {showSummaryModal && (
        <SummaryModal
          xpEarned={xpEarned}
          streak={streak}
          level={level}
          mistakes={mistakes}
          perfectSession={perfectSession}
          onClose={() => setShowSummaryModal(false)}
          onReviewMistakes={startReviewMistakes}
          onStudyAgain={resetSession}
        />
      )}

      {!currentVerb && !sessionCompleted && (
        <p style={{ color: "#e5e7eb", fontSize: 18, marginTop: 80 }}>
          No verbs to study.
        </p>
      )}

      {currentVerb && !sessionCompleted && (
        <div style={{ width: "100%", maxWidth: 420, marginTop: 12 }}>
          {/* FLIP CARD */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 640,
              cursor: "pointer",
              perspective: "1000px",
            }}
            onClick={handleFlip}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                transition: "transform 0.3s",
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* FRONT */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "white",
                  color: "#222",
                  borderRadius: 16,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  textAlign: "center",
                }}
              >
                <p
                  className="font-arabic mb-4 text-black"
                  style={{ fontSize: 80 }}
                >
                  {currentVerb.arabic?.past || currentVerb.arabic}
                </p>
                <p
                  className="font-english"
                  style={{ fontSize: 29, color: "#1061e4" }}
                >
                  Tap
                </p>
              </div>

              {/* BACK */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "white",
                  color: "#222",
                  fontSize: 18,
                  borderRadius: 16,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  padding: 16,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  textAlign: "center",
                  boxSizing: "border-box",
                  overflowY: "auto",
                  lineHeight: 1.15,
                }}
              >
                <p
                  className="font-arabic mb-1"
                  style={{ fontSize: 45, color: "#1061e4" }}
                >
                  {currentVerb.arabic?.past || currentVerb.arabic}
                </p>

                <p className="font-english mb-2 text-black" style={{ fontSize: 24 }}>
                  {currentVerb.english?.simple || currentVerb.english}
                </p>

                <p className="mb-1">
                  <strong className="font-english text-black" style={{ fontSize: 24 }}>Root:</strong>{" "}
                  <span className="font-arabic" style={{ fontSize: 35, color: "#1061e4" }}>{currentVerb.root}</span>
                </p>

                {currentVerb.past && (
                  <p className="mb-1">
                    <strong className="font-english text-black" style={{ fontSize: 24 }}>Past:</strong>{" "}
                    <span className="font-arabic" style={{ fontSize: 35, color: "#1061e4" }}>{currentVerb.past}</span>
                  </p>
                )}

                {currentVerb.present && (
                  <p className="mb-1">
                    <strong className="font-english text-black" style={{ fontSize: 24 }}>Present:</strong>{" "}
                    <span className="font-arabic" style={{ fontSize: 35, color: "#1061e4" }}>{currentVerb.present}</span>
                  </p>
                )}

                {currentVerb.masdar && (
                  <p className="mb-1">
                    <strong className="font-english text-black" style={{ fontSize: 24 }}>Masdar:</strong>{" "}
                    <span className="font-arabic" style={{ fontSize: 35, color: "#1061e4" }}>
                    {Array.isArray(currentVerb.masdar)
                      ? currentVerb.masdar.join(", ")
                      : currentVerb.masdar}
                    </span>
                  </p>
                )}

                {/* SAFE EXAMPLE + AUDIO */}
                <p
                  className="font-arabic italic mt-2"
                  style={{ fontSize: 35, color: "#1061e4" }}
                >
                  {currentVerb.examples?.simple?.ar || "لا يوجد مثال"}
                </p>

                <p className="font-english italic text-black mt-1" style={{ fontSize: 24 }}>
                  {currentVerb.examples?.simple?.en || "No example available"}
                </p>

                {currentVerb.examples?.simple?.audio ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      try {
                        const audio = new Audio(
                          currentVerb.examples.simple.audio
                        );
                        audio.play().catch(() => {});
                      } catch (err) {
                        // silently ignore audio errors
                      }
                    }}
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded font-english"
                    style={{ fontSize: 18 }}
                  >
                    ▶ Play Audio
                  </button>
                ) : (
                  <p className="font-english text-gray-500 mt-2">
                    No audio available
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* SRS BUTTONS */}
          {isFlipped && (
            <div
              style={{
                marginTop: 32,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}
            >
              {Object.values(SRS_RATINGS).map((rating) => (
                <button
                  key={rating.key}
                  onClick={() => handleRating(rating.key)}
                  style={{
                    padding: "12px 0",
                    borderRadius: 10,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:
                      rating.key === "again"
                        ? "#ef4444"
                        : rating.key === "hard"
                        ? "#f59e0b"
                        : rating.key === "good"
                        ? "#3b82f6"
                        : "#10b981",
                  }}
                  className="font-english"
                >
                  <span style={{ fontSize: 22 }}>{rating.icon}</span>
                  {rating.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecommendedStudyPage;
