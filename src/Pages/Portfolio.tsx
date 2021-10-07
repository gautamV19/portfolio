import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Card from "../Components/Card";

export default function Portfolio() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoverOn, setHoverOn] = useState(true);

  const handleHoverOn = () => {
    if (hoverOn) {
      setIsFlipped(!isFlipped);
    }
    setHoverOn(false);
  };

  const handleHoverOff = () => {
    setHoverOn(true);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
          style={{ backgroundColor: "black", width: "fit-content" }}
        >
          <Card />
        </div>

        <div
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
          style={{ backgroundColor: "black", width: "fit-content" }}
        >
          <Card />
        </div>
      </ReactCardFlip>
    </div>
  );
}
