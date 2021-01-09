import "../styles/styles.css";
import { useState, useEffect } from "react";

function Main({ setPage, userInput, setInsights }) {
  const [button, setButton] = useState(false);

  const [remainingTime, setRemainingTime] = useState([userInput[0], userInput[1], userInput[2]]);
  const [studyTime, setStudyTime] = useState([0,0,0]);
  const [choreTime, setChoreTime] = useState([0,0,0]);
  const [breakTime, setBreakTime] = useState([0,0,0]);

  // var timeInMS = hours*3600000 + minutes*60000 + seconds*1000;
  useEffect(() => {
    function stopTimer() {
      clearInterval(totalTime);
    }
    const totalTime = setInterval(() => {
        if (remainingTime[2] == 0){ // if 60s is done, subtract 1 from minute and add another 59s
          if(remainingTime[1] == 0){ // if minutes are done, subtract 1 from hour and add another 59 minutes
            if(remainingTime[0] == 0){ // hours is 0, minutes is 0, seconds is 0 
              stopTimer();
            }else{ // there are remaining hours
              setRemainingTime([remainingTime[0] - 1, 59, 59]);
              setStudyTime([studyTime[0] + 1, 0, 0]);
            }
          }else{ // there are remaining minutes
            setRemainingTime([remainingTime[0], remainingTime[1] - 1, 59]);
            setStudyTime([studyTime[0], studyTime[1] + 1, 0]);
          }
        }else{ // there are remaining seconds
            setRemainingTime([remainingTime[0], remainingTime[1], remainingTime[2] - 1]);
            setStudyTime([studyTime[0], studyTime[1], studyTime[2] + 1]);
        }
    }, 1000); // runs setRemainingTime() every sec (1000ms)
  }, []);

//   const changeButtonText = ( // used for changing between start/stop button
//     if(buttonText == "Start"){
//         newButtonText = "Stop";
//     }else{ // button is currently set to "Stop"
//         newButtonText = "Start";
//     }  
//     text) => setButtonText(newButtonText);


//   const choresButton = {
//     return (
//         <Button onClick={() => changeButtonText()}>{buttonText}</Button>
//       )
//   }

//   const breaKButton ={

//   }
  return ( //TODO: make ui look better to match mockup design
    <div className="main">
      <div className="time-remaining">
        <div className="time-column">
          <p className="title-time">{remainingTime[0]}</p>
          <p>Hours</p>
        </div>
        <p className="colon">:</p>
        <div className="time-column">
          <p className="title-time">{remainingTime[1]}</p>
          <p>Minutes</p>
        </div>
        <p className="colon">:</p>
        <div className="time-column">
          <p className="title-time">{remainingTime[2]}</p>
          <p>Seconds</p>
        </div>
      </div>
      <div className="alt-time">
        <p><strong>Study time</strong> - {studyTime[0]} : {studyTime[1]} : {studyTime[2]}</p>
      </div>
      <div className="alt-time">
        <p><strong>Chores</strong> - {choreTime[0]} : {choreTime[1]} : {choreTime[2]}</p>
        <p>Start</p>
      </div>
      <div className="alt-time">
        <p><strong>Break</strong> - {breakTime[0]} : {breakTime[1]} : {breakTime[2]}</p>
        <p>Start</p>
      </div>
    </div>
  );
}

export default Main;
