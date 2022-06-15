import React from "react";

import './App.scss';

import Header from "../Header";
import Description from "../Description";
import Options from "../Options";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Options />
      </main>
    </>
  )
}

export default App