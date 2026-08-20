import React from "react";

function ShareButton() {
  const share = () => {
    alert("Sharing coming soon!");
  };

  return (
    <button onClick={share} className="share-button">
      📤
    </button>
  );
}

export default ShareButton;

