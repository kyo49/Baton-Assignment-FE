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

  const popBalloon = (e: any) => {
    let t = e.currentTarget;
    let color = t.getAttribute('color');

    audio.play();
    t.style.visibility = 'hidden';
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <>
      {show ? (
        <S.StyledBalloon
          color={randomColor}
          onDoubleClick={popBalloon}
          duration={duration}
          left={left}
          transparent={transparent}
          show={show}
        >
          <div className="string" />
          {transparent ? <S.BalloonMsg>Lucky balloon!</S.BalloonMsg> : null}
        </S.StyledBalloon>
      ) : null}
    </>
  );
};

export default memo(Balloon);
