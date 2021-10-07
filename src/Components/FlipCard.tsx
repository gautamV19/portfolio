import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Card from "../Components/Card";

export default function FlipCard() {
  //type annotation
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  //typescript interface [auto detect]
  // const [hoverOn, setHoverOn] = useState(true);

  const handleHoverOn = () => {
    setIsFlipped(true);
  };

  const handleHoverOff = () => {
    setIsFlipped(false);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
          style={{
            backgroundColor: "black",
            width: "fit-content",
          }}
        >
          <Card.Front
            color="yellow"
            title="Social Media App"
            img="https://bit.ly/3mzGwT8"
          />
        </div>

        <div
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
          style={{ backgroundColor: "black", width: "fit-content" }}
        >
          <Card.Back color="white" link="https://bit.ly/3mzGwT8" />
        </div>
      </ReactCardFlip>
    </div>
  );
}
