import "../styles/styles.css";
import { useState, useEffect, useRef } from "react";

let remaining_Timer, study_Timer, chore_Timer, break_Timer;

function Main({ setPage, userInput, setInsights }) {
  const [choreButton, setChoreButton] = useState(true);
  const [breakButton, setBreakButton] = useState(true);

  const remainingTimeHour = useRef();
  const remainingTimeMinute = useRef();
  const remainingTimeSecond = useRef();
  const studyTimeHour = useRef();
  const studyTimeMinute = useRef();
  const studyTimeSecond = useRef();
  const choreTimeHour = useRef();
  const choreTimeMinute = useRef();
  const choreTimeSecond = useRef();
  const breakTimeHour = useRef();
  const breakTimeMinute = useRef();
  const breakTimeSecond = useRef();

  function stopTimer(timer) {
    clearInterval(timer);
  }

  function startTimer() {
    remaining_Timer = setInterval(() => {
      let hours = parseInt(remainingTimeHour.current.innerText);
      let minutes = parseInt(remainingTimeMinute.current.innerText);
      let seconds = parseInt(remainingTimeSecond.current.innerText);
      if (seconds === 0){ // if 60s is done, subtract 1 from minute and add another 59s
        if(minutes === 0){ // if minutes are done, subtract 1 from hour and add another 59 minutes
          if(hours === 0){ // hours is 0, minutes is 0, seconds is 0 
            stopTimer(remaining_Timer);
            stopTimer(study_Timer);
            //go to next page
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
    study_Timer = setInterval(() => {
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

  function choreTimer() {

  }

  function breakTimer() {

  }

  function startChores() {
    setChoreButton(false);
    setBreakButton(true);
    // stopTimer(remaining_Timer);
    // stopTimer(study_Timer);
    // stopTimer(break_Timer);
    // choreTimer();
  }

  function stopChores() {
    setChoreButton(true);
    // stopTimer(chore_Timer);
    // startTimer();
    // studyTimer();
  }

  function startBreak() {
    setChoreButton(true);
    setBreakButton(false);
    // stopTimer(remaining_Timer);
    // stopTimer(study_Timer);
    // stopTimer(chore_Timer);
    // breakTimer();
  }

  function stopBreak() {
    setBreakButton(true);
    // stopTimer(break_Timer);
    // startTimer();
    // studyTimer();
  }

  function leaveMain() {
    stopTimer(remaining_Timer);
    stopTimer(study_Timer);
    stopTimer(chore_Timer);
    stopTimer(break_Timer);

    //LEAVE
  }

  useEffect(() => {
    remainingTimeHour.current.innerText = userInput[0];
    remainingTimeMinute.current.innerText = userInput[1];
    remainingTimeSecond.current.innerText = userInput[2];
    studyTimeHour.current.innerText = 0;
    studyTimeMinute.current.innerText = 0;
    studyTimeSecond.current.innerText = 0;
    choreTimeHour.current.innerText = 0;
    choreTimeMinute.current.innerText = 0;
    choreTimeSecond.current.innerText = 0;
    breakTimeHour.current.innerText = 0;
    breakTimeMinute.current.innerText = 0;
    breakTimeSecond.current.innerText = 0;
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
        <p><strong>Chores</strong> - <span ref={choreTimeHour}></span> : <span ref={choreTimeMinute}></span> : <span ref={choreTimeSecond}></span></p>
        {
          choreButton ?
            <p onClick={() => startChores()}>Start</p>
          :
            <p onClick={() => stopChores()}>Stop</p>
        }
      </div>
      <div className="alt-time">
        <p><strong>Break</strong> - <span ref={breakTimeHour}></span> : <span ref={breakTimeMinute}></span> : <span ref={breakTimeSecond}></span></p>
        {
          breakButton ?
            <p onClick={() => startBreak()}>Start</p>
          :
            <p onClick={() => stopBreak()}>Stop</p>
        }
      </div>
    </div>
  );
}

export default Main;