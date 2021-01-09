import { useState } from "react";

import Intro from "./components/intro.js";
import Main from "./components/main.js";
import Analysis from "./components/analaysis.js";

function App() {
  const [page, setPage] = useState([true, false, false]);
  const [userInput, setUserInput] = useState([1,0,0]);
  const [insights, setInsights] = useState([]);

  return (
    <div>
      {
        page[0] ?
          <Intro setPage={setPage} setUserInput={setUserInput} />
        :
          <div />
      }
      {
        page[1] ?
          <Main setPage={setPage} userInput={userInput} setInsights={setInsights} />
        :
          <div />
      }
      {
        page[2] ?
          <Analysis setPage={setPage} insights={insights} />
          :
          <div />
      }
    </div>
  );
}

export default App;
