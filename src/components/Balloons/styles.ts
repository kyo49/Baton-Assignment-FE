/* eslint-disable react-hooks/rules-of-hooks */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import useRandom from '../../hooks/useRandom';

const balloonsLeftUpKFAnimation = (left: number) => {
  return keyframes`
    0%{
      top: 100vh;
      left: ${`${useRandom(40, 50)}vw`};
    }
    15%{
      top: ${`${useRandom(60, 70)}vh`};
      left: ${`${left - useRandom(10, 20)}vw`};
    }
    25%{
      top: ${`${useRandom(45, 55)}vh`};
      left: ${`${left + useRandom(15, 20)}vw`};
    }
    45%{
      top: ${`${useRandom(25, 40)}vh`};
      left: ${`${left - useRandom(30, 40)}vw`};
    }
    80%{
      top: ${`${useRandom(5, 15)}vh`};
      left: ${`${left + useRandom(20, 30)}vw`};
    }
    100%{
      top: 0;
      left: ${useRandom(0, 50)}vw;
    }
`;
};

const balloonsRightUpKFAnimation = (left: number) => {
  return keyframes`
    0%{
      top: 100vh;
      left: ${`${useRandom(40, 50)}vw`};
    }
    15%{
      top: ${`${useRandom(60, 70)}vh`};
      left: ${`${left}vw`};
    }
    30%{
      top: ${`${useRandom(60, 70)}vh`};
      left: ${`${left - useRandom(15, 20)}vw`};
    }
    55%{
      top: ${`${useRandom(40, 6)}vh`};
      left: ${`${left + useRandom(5, 20)}vw`};
    }
    70%{
      top: ${`${useRandom(20, 40)}vh`};
      left: ${`${left - useRandom(20, 30)}vw`};
    }
    70%{
      top: ${`${useRandom(10, 20)}vh`};
      left: ${`${left - useRandom(20, 30)}vw`};
    }
    100%{
      top: 0;
      left: ${`${useRandom(50, 90)}vw`};
    }
`;
};

const floating = keyframes`
  0% {
		transform: rotateZ(45deg) rotate(4deg);
	}
	50% {
		transform: rotateZ(45deg) rotate(-4deg);
	}
	100% {
		transform: rotateZ(45deg) rotate(4deg);
	}
`;

export const Balloon = styled.div<{
  show: boolean;
  left: number;
  duration: number;
  color: string;
  transparent: boolean;
}>`
  cursor: pointer;
  background-color: ${(props) => props.color};
  display: ${(props) => (props.show ? 'block' : 'none')};
  left: ${(props) => `${props.left}vw`};
  animation: ${(props) =>
    props.left > 50
      ? balloonsRightUpKFAnimation(props.left)
      : balloonsLeftUpKFAnimation(
          props.left,
        )} ease-in-out forwards, ${floating} 1s ease-in-out infinite;
  animation-duration: ${(props) => `${props.duration}s`};
  animation-delay ${useRandom(0, 4)};
  border: 1px solid ${(props) => (props.transparent ? '#5e5f62' : 'none')};
  --balloonDimension: 9vmax;
  width: var(--balloonDimension);
  height: var(--balloonDimension);
  border-radius: 100% 100% 20% 100%;
  position: fixed;
  bottom: calc(-1 * var(--balloonDimension));
  &::before {
    content: '';
    width: 10%;
    height: 25%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    position: absolute;
    left: 15%;
    top: 45%;
    border-radius: 100%;
  }
  &::after {
    content: '';
    width: 13%;
    height: 7%;
    background-color: inherit;
    position: absolute;
    left: 90%;
    top: 94%;
    border-radius: 22%;
    transform: rotateZ(-45deg);
  }
`;

export const BalloonLine = styled.div`
  position: absolute;
  background-color: #5e5f62;
  border-radius: 50%/100px 100px 0 0;
  width: 4px;
  height: calc(var(--balloonDimension) * 0.6);
  transform-origin: top center;
  transform: rotateZ(-45deg);
  top: calc(var(--balloonDimension) - 5px);
  left: calc(var(--balloonDimension) - 8px);
`;

export const BalloonMsg = styled.span`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: rotate(315deg);
`;
