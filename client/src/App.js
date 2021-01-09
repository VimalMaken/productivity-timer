import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Intro from "./components/intro.js";
import Main from "./components/main.js";
import Analysis from "./components/analaysis.js";

function App() {
  const [page, setPage] = useState([true, false, false]);
  const [userInput, setUserInput] = useState([1,0,0]);
  const [insights, setInsights] = useState([]);

  return (
    // <div>
    //   {
    //     page[0] ?
    //       <Intro setPage={setPage} setUserInput={setUserInput} />
    //     :
    //       <div />
    //   }
    //   {
    //     page[1] ?
    //       <Main setPage={setPage} userInput={userInput} setInsights={setInsights} />
    //     :
    //       <div />
    //   }
    //   {
    //     page[2] ?
    //       <Analysis setPage={setPage} insights={insights} />
    //       :
    //       <div />
    //   }
    // </div>
    <Router>
      <div>
        <Switch>
          <Route path="/intro">
            <Intro setPage={setPage} setUserInput={setUserInput} />
          </Route>
          <Route path="/main">
            <Main setPage={setPage} userInput={userInput} setInsights={setInsights} />
          </Route>
          <Route path="/analysis">
            <Analysis setPage={setPage} insights={insights} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
