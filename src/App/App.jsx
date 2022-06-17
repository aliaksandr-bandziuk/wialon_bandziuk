import React from "react";

import './App.scss';

import Header from "../Header";
import Description from "../Description";
import Tasks from "../Tasks";
import Options from "../Options";
import Footer from "../Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Tasks />
        <Options />
      </main>
      <Footer />
    </>
  )
}

export default App