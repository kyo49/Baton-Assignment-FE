import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const BackgroundArea = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#6be8fc, #66ddfb, #58bdf9);
  z-index: 1;
`;

const floating = keyframes`
    0 {
        transform: translateX(0);
    }
    50% {
        transform: translateX(15px);
    }
`;

export const CloundImg = styled.img`
  position: absolute;
  width: 200px;
  height: 140px;
  object-fit: cover;
  /* animation: ${floating} 3s ease infinite; */
`;
