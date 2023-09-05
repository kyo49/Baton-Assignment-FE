import React from 'react';
import * as S from './styles';
import { CloudIcon } from '../../assets';

const Background = () => {
  const CloudPositions = [
    { top: 450, left: 500 },
    { top: 400, left: 1100 },
    { top: 500, left: 40 },
    { top: 600, left: 1250 },
    { top: 680, left: 180 },
    { top: 660, left: 1100 },
    { top: 700, left: 480 },
  ];

  const Clouds = CloudPositions.map((position, index) => {
    const style = {
      top: `${position.top}px`,
      left: `${position.left}px`,
    };
    return <S.CloundImg src={CloudIcon} index={index} style={style} />;
  });

  return <S.BackgroundArea>{Clouds}</S.BackgroundArea>;
};

export default Background;
