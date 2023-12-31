/* eslint-disable react-hooks/rules-of-hooks */
import React, { memo, useState } from 'react';
import gsap from 'gsap';
import Draggable from 'react-draggable';

import * as S from './styles';
import useRandom from '../../hooks/useRandom';
import useRandomColor from '../../hooks/useRandomColor';

const Balloon = () => {
  const duration = 10 + useRandom(1, 5);
  const left = useRandom(10, 90);
  const [show, setShow] = useState(true);
  const randomColor = useRandomColor();
  const transparent = randomColor === '0';

  const audio = new Audio(
    'https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3',
  );
  audio.volume = 0.5;

  const popBalloon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetBalloon = e.currentTarget;

    audio.play();
    targetBalloon.style.visibility = 'hidden';
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <>
      {show ? (
        <S.Balloon
          color={randomColor}
          onDoubleClick={popBalloon}
          duration={duration}
          left={left}
          transparent={transparent}
          show={show}
        >
          <S.BalloonLine />
          {transparent ? <S.BalloonMsg>Lucky balloon!</S.BalloonMsg> : null}
        </S.Balloon>
      ) : null}
    </>
  );
};

export default memo(Balloon);
