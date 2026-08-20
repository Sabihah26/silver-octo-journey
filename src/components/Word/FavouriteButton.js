import React, { useState } from "react";

function FavouriteButton() {
  const [fav, setFav] = useState(false);

  return (
    <button onClick={() => setFav(!fav)} className="favourite-button">
      {fav ? "★" : "☆"}
    </button>
  );
}

export default FavouriteButton;

