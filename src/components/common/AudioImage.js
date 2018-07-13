import React from 'react';

const AudioImage = ({ imageSrc, audioSrc }) => {
  const audio = new Audio();
  audio.src = audioSrc;
  return (
    <figure className="image">
      <img src={imageSrc}
        onMouseOver={() => audio.play()}
        onMouseOut={() => audio.pause()}
      />
    </figure>
  );
};

export default AudioImage;
