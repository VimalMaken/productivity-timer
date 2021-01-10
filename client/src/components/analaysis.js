import '../styles/styles.css';
import {ReactComponent as Replay} from "../assets/replay.svg";
import { useEffect } from "react";

function Analysis({ setPage, insights }) {
    return (
      <div className="analysis">
          <p className="title">Results</p>
          <div className="results">
            <div className="results-row">
              <p>Study time:</p>
              <p>{insights[0][0]}:{insights[0][1]}:{insights[0][2]}</p>
            </div>
            <div className="results-row">
              <p>Chores:</p>
              <p>{insights[1][0]}:{insights[1][1]}:{insights[1][2]}</p>
            </div>
            <div className="results-row">
              <p>Break:</p>
              <p>{insights[2][0]}:{insights[2][1]}:{insights[2][2]}</p>
            </div>
          </div>
          <Replay onClick = {() => setPage([true, false, false])} />
      </div>
    );
  }
  
  export default Analysis;
  
  //calculate the insights