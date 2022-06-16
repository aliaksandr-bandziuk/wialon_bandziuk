import React from "react";

import './App.scss';

import Header from "../Header";
import Description from "../Description";
import Tasks from "../Tasks";
import Options from "../Options";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Tasks />
        <Options />
      </main>
    </>
  )
}

export default App