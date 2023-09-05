import React from 'react';
import * as S from './styles';
import { CloudIcon } from '../../assets';

const Background = () => {
  const CloudPositions = [
    { top: 35, left: 75 },
    { top: 45, left: 8 },
    { top: 50, left: 15 },
    { top: 65, left: 80 },
    { top: 70, left: 0 },
    { top: 80, left: 28 },
  ];

  const Clouds = CloudPositions.map((position, index) => {
    const style = {
      top: `${position.top}%`,
      left: `${position.left}%`,
    };
    return <S.CloundImg src={CloudIcon} key={index} style={style} />;
  });

  return <S.BackgroundArea>{Clouds}</S.BackgroundArea>;
};

export default Background;
