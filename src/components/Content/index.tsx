import React from 'react';
import { CastleIcon, HeartBallonIcons } from '../../assets';
import * as S from './styles';

const Content = () => {
  return (
    <S.ContentArea>
      <S.CastleImg src={CastleIcon} />
      <S.CircleBalloon>
        <span>기존에 있던 풍선은 없앨 수 없어요.</span>
      </S.CircleBalloon>
      <S.HeartBalloon>
        <img src={HeartBallonIcons} />
        <span>성을 클릭해 풍선을 추가해 보세요.</span>
      </S.HeartBalloon>
    </S.ContentArea>
  );
};

export default Content;
