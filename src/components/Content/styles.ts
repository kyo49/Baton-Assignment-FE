import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const ContentArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
`;

export const CastleImg = styled.img`
  width: 420px;
  height: 420px;
  vertical-align: middle;
  cursor: pointer;
`;

const bounceIn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const HeartBalloon = styled.div`
  position: fixed;
  bottom: 60%;
  left: 95%;
  transform: rotate(25deg);
  img {
    width: 10vw;
    animation: ${bounceIn} 2s ease-in-out infinite;
  }
  span {
    width: 10vw;
    position: absolute;
    bottom: 50%;
    left: 2%;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    animation: ${bounceIn} 2s ease-in-out infinite;
  }
`;

const floating = keyframes`
    0 {
        transform: translateY(0);
    }
    50% {
        transform: translateY(0.1px);
    }
`;

export const CircleBalloon = styled.div`
  --balloonDimension: 8vmax;
  width: var(--balloonDimension);
  height: var(--balloonDimension);
  border-radius: 100% 100% 50% 100%;
  position: fixed;
  bottom: 50%;
  left: -45%;
  background-color: #f09fb0;
  transform: rotate(15deg);
  animation: ${floating} 3s ease-in-out infinite;
  background: radial-gradient(circle, #f1e6e8, #ff7d99);
  &::after {
    content: '';
    width: 13%;
    height: 5%;
    background-color: #ff7d99;
    position: absolute;
    left: 88%;
    top: 90%;
    border-radius: 22%;
    transform: rotateZ(-45deg);
  }
  span {
    position: absolute;
    bottom: 35%;
    left: 12%;
    text-align: center;
    color: #5e5f62;
    font-size: 0.8rem;
    transform: rotate(310deg);
  }
`;
