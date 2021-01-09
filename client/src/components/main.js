import "../styles/styles.css";
import { useState, useEffect, useRef } from "react";

function Main({ setPage, userInput, setInsights }) {
  const [button, setButton] = useState(false);

  const remainingTimeHour = useRef();
  const remainingTimeMinute = useRef();
  const remainingTimeSecond = useRef();
  const studyTimeHour = useRef();
  const studyTimeMinute = useRef();
  const studyTimeSecond = useRef();

  const [studyTime, setStudyTime] = useState([0,0,0]);
  const [choreTime, setChoreTime] = useState([0,0,0]);
  const [breakTime, setBreakTime] = useState([0,0,0]);

  function stopTimer(timer) {
    clearInterval(timer);
  }

  function startTimer() {
    const totalTime = setInterval(() => {
      let hours = parseInt(remainingTimeHour.current.innerText);
      let minutes = parseInt(remainingTimeMinute.current.innerText);
      let seconds = parseInt(remainingTimeSecond.current.innerText);
      if (seconds === 0){ // if 60s is done, subtract 1 from minute and add another 59s
        if(minutes === 0){ // if minutes are done, subtract 1 from hour and add another 59 minutes
          if(hours === 0){ // hours is 0, minutes is 0, seconds is 0 
            stopTimer(totalTime);
          } else { // there are remaining hours
            remainingTimeHour.current.innerText = hours - 1;
            remainingTimeMinute.current.innerText = 59;
            remainingTimeSecond.current.innerText = 59;
          }
        } else { // there are remaining minutes
          remainingTimeMinute.current.innerText = minutes - 1;
          remainingTimeSecond.current.innerText = 59;
        }
      } else { // there are remaining seconds
        remainingTimeSecond.current.innerText = seconds - 1;
      }
    }, 1000); //runs every second
  }

  function studyTimer() {
    const totalTime = setInterval(() => {
      let hours = parseInt(studyTimeHour.current.innerText);
      let minutes = parseInt(studyTimeMinute.current.innerText);
      let seconds = parseInt(studyTimeSecond.current.innerText);
      if (seconds === 59){ // if 60s is done, subtract 1 from minute and add another 59s
        if(minutes === 59){ // if minutes are done, subtract 1 from hour and add another 59 minutes
            studyTimeHour.current.innerText = hours + 1;
            studyTimeMinute.current.innerText = 0;
            studyTimeSecond.current.innerText = 0;
        } else { // there are remaining minutes
          studyTimeMinute.current.innerText = minutes + 1;
          studyTimeSecond.current.innerText = 0;
        }
      } else { // there are remaining seconds
        studyTimeSecond.current.innerText = seconds + 1;
      }
    }, 1000); //runs every second
  }

  useEffect(() => {
    remainingTimeHour.current.innerText = userInput[0];
    remainingTimeMinute.current.innerText = userInput[1];
    remainingTimeSecond.current.innerText = userInput[2];
    studyTimeHour.current.innerText = 0;
    studyTimeMinute.current.innerText = 0;
    studyTimeSecond.current.innerText = 0;
    startTimer();
    studyTimer();
  }, []);

  return ( //TODO: make ui look better to match mockup design
    <div className="main">
      <div className="time-remaining">
        <div className="time-column">
          <p className="title-time" ref={remainingTimeHour}></p>
          <p>Hours</p>
        </div>
        <p className="colon">:</p>
        <div className="time-column">
          <p className="title-time" ref={remainingTimeMinute}></p>
          <p>Minutes</p>
        </div>
        <p className="colon">:</p>
        <div className="time-column">
          <p className="title-time" ref={remainingTimeSecond}></p>
          <p>Seconds</p>
        </div>
      </div>
      <div className="alt-time">
        <p><strong>Study time</strong> - <span ref={studyTimeHour}></span> : <span ref={studyTimeMinute}></span> : <span ref={studyTimeSecond}></span></p>
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
