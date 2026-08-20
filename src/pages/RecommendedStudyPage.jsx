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
    example: "أنا أكتب رسالة.",
  },
  {
    id: 2,
    arabic: "قرأ",
    english: "to read",
    root: "ق ر أ",
    past: "قرأ",
    present: "يقرأ",
    masdar: "قراءة",
    example: "هي تقرأ كتابًا.",
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
// SUMMARY MODAL
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        style={{
          background: "white",
          borderRadius: 12,
          padding: 24,
          width: "90%",
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
          Session Summary
        </h2>

        <p style={{ fontSize: 18, marginBottom: 8 }}>
          <strong>XP Earned:</strong> {xpEarned}
        </p>

        <p style={{ fontSize: 18, marginBottom: 8 }}>
          <strong>Streak:</strong> {streak} days
        </p>

        <p style={{ fontSize: 18, marginBottom: 16 }}>
          <strong>Level:</strong> {level}
        </p>

        {perfectSession && (
          <div
            style={{
              background: "#d1fae5",
              color: "#065f46",
              padding: 12,
              borderRadius: 8,
              marginBottom: 16,
              fontWeight: "bold",
            }}
          >
            🎉 Perfect Session! No mistakes!
          </div>
        )}

        {mistakes.length > 0 && (
          <div
            style={{
              background: "#fee2e2",
              color: "#991b1b",
              padding: 12,
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            <p style={{ fontWeight: "bold", marginBottom: 8 }}>Mistakes:</p>
            {mistakes.map((v) => (
              <p key={v.id}>
                {v.arabic} — {v.english}
              </p>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {mistakes.length > 0 && (
            <button
              onClick={onReviewMistakes}
              style={{
                background: "#f59e0b",
                color: "white",
                padding: "10px 0",
                borderRadius: 8,
                fontWeight: "bold",
              }}
            >
              Review Mistakes
            </button>
          )}

          <button
            onClick={onStudyAgain}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "10px 0",
              borderRadius: 8,
              fontWeight: "bold",
            }}
          >
            Study Again
          </button>

          <button
            onClick={onClose}
            style={{
              background: "#e5e7eb",
              color: "#1f2937",
              padding: "10px 0",
              borderRadius: 8,
              fontWeight: "bold",
            }}
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
    if (!sessionActive && totalCards > 0 && currentIndex === 0 && !sessionCompleted) {
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
    setSessionActive(totalCards > 0);
    setSessionCompleted(false);
    setMistakes([]);
    setAnswers([]);
    setXpEarned(0);
    setPerfectSession(false);
    setShowSummaryModal(false);
    setShowConfetti(false);
    setReviewMode(false);
    setReviewIndex(0);
  };

  const startReviewMistakes = () => {
    if (mistakes.length === 0) return;
    setReviewMode(true);
    setReviewIndex(0);
    setIsFlipped(false);
    setShowSummaryModal(false);
    setShowConfetti(false);
  };

  const exitReviewMistakes = () => {
    setReviewMode(false);
    setReviewIndex(0);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    if (!currentVerb || !sessionActive) return;
    setIsFlipped(true);
  };

  const handleRating = (ratingKey) => {
    if (!currentVerb || !isFlipped) return;
    const rating = SRS_RATINGS[ratingKey];
    if (!rating) return;

    setAnswers((prev) => [...prev, { verbId: currentVerb.id, rating: ratingKey }]);

    if (rating.isMistake && !reviewMode) {
      setMistakes((prev) => {
        const exists = prev.find((v) => v.id === currentVerb.id);
        return exists ? prev : [...prev, currentVerb];
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
        background: "linear-gradient(135deg, #111827, #1f2937)", // HOMEPAGE BACKGROUND
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
        <div style={{ width: "100%", maxWidth: 420, marginTop: 40 }}>
          {/* FLIP CARD */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 420, // LARGE CARD
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
                  style={{
                    fontSize: 45,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 16,
                    color: "#000",
                  }}
                >
                  {currentVerb.arabic}
                </p>
                <p style={{ fontSize: 18, color: "#6b7280" }}>Tap</p>
              </div>

              {/* BACK */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "white",
                  borderRadius: 16,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  padding: 24,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 45,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 12,
                    color: "#000",
                  }}
                >
                  {currentVerb.arabic}
                </p>

                {/* ⭐ CHANGED FROM 20 → 25 */}
                <p style={{ fontSize: 25, marginBottom: 16, color: "#000" }}>
                  {currentVerb.english}
                </p>

                <p style={{ marginBottom: 8, color: "#000" }}>
                  <strong>Root:</strong> {currentVerb.root}
                </p>

                {currentVerb.past && (
                  <p style={{ marginBottom: 8, color: "#000" }}>
                    <strong>Past:</strong> {currentVerb.past}
                  </p>
                )}

                {currentVerb.present && (
                  <p style={{ marginBottom: 8, color: "#000" }}>
                    <strong>Present:</strong> {currentVerb.present}
                  </p>
                )}

                {currentVerb.masdar && (
                  <p style={{ marginBottom: 8, color: "#000" }}>
                    <strong>Masdar:</strong> {currentVerb.masdar}
                  </p>
                )}

                {currentVerb.example && (
                  <p style={{ marginTop: 12, fontStyle: "italic", color: "#000" }}>
                    “{currentVerb.example}”
                  </p>
                )}

                {currentVerb.audio && (
                  <audio controls style={{ marginTop: 12, width: "100%" }}>
                    <source src={currentVerb.audio} type="audio/mpeg" />
                  </audio>
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
