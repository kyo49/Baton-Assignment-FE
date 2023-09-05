import React from 'react';
import { Global } from '@emotion/react';
import { reset } from './styles/globalStyle';
import Background from './components/Background';
import Content from './components/Content';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Background />
      <Content />
    </>
  );
}

export default App;
