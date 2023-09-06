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
          <span>기존에 있던 풍선은 없앨 수 없어요.</span>
        </S.CircleBalloon>
        <S.HeartBalloon>
          <img src={HeartBallonIcons} />
          <span>성을 클릭해 풍선을 추가해 보세요.</span>
        </S.HeartBalloon>
      </S.ContentArea>
      {Array.from({ length: balloonCount }).map((_, index) => (
        <Balloon key={index} />
      ))}
    </>
  );
};

export default Content;
