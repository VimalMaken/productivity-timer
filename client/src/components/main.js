import "../styles/styles.css";
import { useState, useEffect, useRef } from "react";
import {ReactComponent as Stop} from "../assets/stop.svg";
import {ReactComponent as Play} from "../assets/play.svg";
import {ReactComponent as Replay} from "../assets/replay.svg";

var remaining_Timer, study_Timer, chore_Timer, break_Timer;

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

  // let remaining_Timer, study_Timer, chore_Timer, break_Timer;

  function startTimer(bool) {
    if(bool) {
      remaining_Timer = setInterval(() => {
        let hours = parseInt(remainingTimeHour.current.innerText);
        let minutes = parseInt(remainingTimeMinute.current.innerText);
        let seconds = parseInt(remainingTimeSecond.current.innerText);
        if (seconds === 0){ // if 60s is done, subtract 1 from minute and add another 59s
          if(minutes === 0){ // if minutes are done, subtract 1 from hour and add another 59 minutes
            if(hours === 0){ // hours is 0, minutes is 0, seconds is 0 
              clearInterval(remaining_Timer);
              clearInterval(study_Timer);
              let array1 = [parseInt(studyTimeHour.current.innerText), parseInt(studyTimeMinute.current.innerText), parseInt(studyTimeSecond.current.innerText)];
              let array2 = [parseInt(choreTimeHour.current.innerText), parseInt(choreTimeMinute.current.innerText), parseInt(choreTimeSecond.current.innerText)];
              let array3 = [parseInt(breakTimeHour.current.innerText), parseInt(breakTimeMinute.current.innerText), parseInt(breakTimeSecond.current.innerText)];
              setInsights([array1,array2,array3]);
              setPage([false,false,true]);
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
    else {
      clearInterval(remaining_Timer);
    }
  }

  function studyTimer(bool) {
    if(bool) {
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
    else{
      clearInterval(study_Timer);
    }
  }

  function choreTimer(bool) {
    if(bool) {
      chore_Timer = setInterval(() => {
        let hours = parseInt(choreTimeHour.current.innerText);
        let minutes = parseInt(choreTimeMinute.current.innerText);
        let seconds = parseInt(choreTimeSecond.current.innerText);
        if (seconds === 59){ // if 60s is done, subtract 1 from minute and add another 59s
          if(minutes === 59){ // if minutes are done, subtract 1 from hour and add another 59 minutes
            choreTimeHour.current.innerText = hours + 1;
            choreTimeMinute.current.innerText = 0;
            choreTimeSecond.current.innerText = 0;
          } else { // there are remaining minutes
            choreTimeMinute.current.innerText = minutes + 1;
            choreTimeSecond.current.innerText = 0;
          }
        } else { // there are remaining seconds
          choreTimeSecond.current.innerText = seconds + 1;
        }
      }, 1000); //runs every second
    }
    else {
      clearInterval(chore_Timer);
    }
  }

  function breakTimer(bool) {
    if(bool) {
      break_Timer = setInterval(() => {
        let hours = parseInt(breakTimeHour.current.innerText);
        let minutes = parseInt(breakTimeMinute.current.innerText);
        let seconds = parseInt(breakTimeSecond.current.innerText);
        if (seconds === 59){ // if 60s is done, subtract 1 from minute and add another 59s
          if(minutes === 59){ // if minutes are done, subtract 1 from hour and add another 59 minutes
            breakTimeHour.current.innerText = hours + 1;
            breakTimeMinute.current.innerText = 0;
            breakTimeSecond.current.innerText = 0;
          } else { // there are remaining minutes
            breakTimeMinute.current.innerText = minutes + 1;
            breakTimeSecond.current.innerText = 0;
          }
        } else { // there are remaining seconds
          breakTimeSecond.current.innerText = seconds + 1;
        }
      }, 1000); //runs every second
    }
    else {
      clearInterval(break_Timer);
    }
  }

  function startChores() {
    setChoreButton(false);
    setBreakButton(true);
    startTimer(false);
    studyTimer(false);
    breakTimer(false);
    choreTimer(true);
  }

  function stopChores() {
    setChoreButton(true);
    startTimer(true);
    studyTimer(true);
    breakTimer(false);
    choreTimer(false);
  }

  function startBreak() {
    setChoreButton(true);
    setBreakButton(false);
    startTimer(false);
    studyTimer(false);
    breakTimer(true);
    choreTimer(false);
  }

  function stopBreak() {
    setBreakButton(true);
    startTimer(true);
    studyTimer(true);
    breakTimer(false);
    choreTimer(false);
  }

  function leaveMain() {
    startTimer(false);
    studyTimer(false);
    breakTimer(false);
    choreTimer(false);
    let array1 = [parseInt(studyTimeHour.current.innerText), parseInt(studyTimeMinute.current.innerText), parseInt(studyTimeSecond.current.innerText)];
    let array2 = [parseInt(choreTimeHour.current.innerText), parseInt(choreTimeMinute.current.innerText), parseInt(choreTimeSecond.current.innerText)];
    let array3 = [parseInt(breakTimeHour.current.innerText), parseInt(breakTimeMinute.current.innerText), parseInt(breakTimeSecond.current.innerText)];
    setInsights([array1,array2,array3]);
    setPage([false,false,true]);
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
    startTimer(true);
    studyTimer(true);
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
            <Play className="icon" onClick={() => startChores()} />
          :
            <Stop className="icon" onClick={() => stopChores()} />
        }
      </div>
      <div className="alt-time">
        <p><strong>Break</strong> - <span ref={breakTimeHour}></span> : <span ref={breakTimeMinute}></span> : <span ref={breakTimeSecond}></span></p>
        {
          breakButton ?
            <Play className="icon" onClick={() => startBreak()} />
          :
            <Stop className="icon" onClick={() => stopBreak()} />
        }
      </div>
      <Replay className="continue" onClick={() => leaveMain()}/>
    </div>
  );
}

export default Main;