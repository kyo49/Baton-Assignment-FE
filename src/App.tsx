import React from 'react';
import { Global } from "@emotion/react";
import { reset } from "./styles/globalStyle";

function App() {
  return (
    <>
     <Global styles={reset} />
    </>
  );
}

export default App;
