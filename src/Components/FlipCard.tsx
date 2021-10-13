import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Card from "../Components/Card";
import { Project } from "../interface";

export default function FlipCard({ title, img, link, description }: Project) {
  // const { title, img, link, description } = project;
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
        <div onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
          <Card.Front title={title} img={img} link={link} />
        </div>

        <div onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
          <Card.Back link={link} description={description} />
        </div>
      </ReactCardFlip>
    </div>
  );
}
