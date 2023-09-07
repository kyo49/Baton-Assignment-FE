import React, { useState } from 'react';

import * as S from './styles';
import { CastleIcon, HeartBallonIcons } from '../../assets';
import Balloon from '../Balloons';

const Content = () => {
  const [balloonCount, setBalloonCount] = useState(10);

  const onAddBalloon = () => {
    setBalloonCount(balloonCount + 1);
  };
  return (
    <>
      <S.ContentArea>
        <S.CastleImg src={CastleIcon} onClick={onAddBalloon} />
        <S.CircleBalloon>
          <span>Double-click to delete balloons</span>
        </S.CircleBalloon>
        <S.HeartBalloon>
          <img src={HeartBallonIcons} />
          <span>Click Castle to add a balloon</span>
        </S.HeartBalloon>
      </S.ContentArea>
      {Array.from({ length: balloonCount }).map((_, index) => (
        <Balloon key={index} />
      ))}
    </>
  );
};

export default Content;
