import "../styles/styles.css";
import { useState, useEffect } from "react";

function Main({ setPage, userInput, setInsights }) {
  const [button, setButton] = useState(false);

  let remainingTime = {
    hours: userInput[0],
    minutes: userInput[1],
    seconds: userInput[2]
  };

  let studyTime = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  let choreTime = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  let breakTime = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  // var timeInMS = hours*3600000 + minutes*60000 + seconds*1000;
  useEffect(() => {
    const totalTime = setInterval(() => {
        if (remainingTime.seconds == 0){ // if 60s is done, subtract 1 from minute and add another 59s
            if(remainingTime.minutes == 0){ // if minutes are done, subtract 1 from hour and add another 59 minutes
                if(remainingTime.hours == 0){ // hours is 0, minutes is 0, seconds is 0 
                    // stop timer
                }else{ // there are remaining hours
                    remainingTime.hours -= 1;
                    remainingTime.minutes = 59;
                    remainingTime.seconds = 59;
                }
            }else{ // there are remaining minutes
                remainingTime.minutes -= 1;
                remainingTime.seconds = 59;
            }
            remainingTime.seconds = 59;
        }else{ // there are remaining seconds
            remainingTime.seconds -= 1;
        }
    }, 1000); // runs setRemainingTime() every sec (1000ms)
    return () => clearInterval(totalTime);
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
    <div>
        <div>
            <p>main</p>
        </div>
        <div>
        <p>Time remaining: {remainingTime.hours} : {remainingTime.minutes} : {remainingTime.seconds}</p>
        <b></b>
        <p>Study time: {studyTime.hours} : {studyTime.minutes} : {studyTime.seconds}</p>
        <b></b>
        <p>Chores: {choreTime.hours} : {choreTime.minutes} : {choreTime.seconds}</p>
        <b></b>
        <p>Break: {breakTime.hours} : {breakTime.minutes} : {breakTime.seconds}</p>
        </div>
    </div>
  );
}

export default Main;

/*
  useEffect(() => {
    function sleep(ms);
    while(1) {
         if (remainingTime.seconds == 0){ // if 60s is done, subtract 1 from minute and add another 59s
            if(remainingTime.minutes == 0){ // if minutes are done, subtract 1 from hour and add another 59 minutes
                if(remainingTime.hours == 0){ // hours is 0, minutes is 0, seconds is 0 
                    break;
                    //go to ne
                }else{ // there are remaining hours
                    remainingTime.hours -= 1;
                    remainingTime.minutes = 59;
                    remainingTime.seconds = 59;
                }
            }else{ // there are remaining minutes
                remainingTime.minutes -= 1;
                remainingTime.seconds = 59;
            }
            remainingTime.seconds = 59;
        }else{ // there are remaining seconds
            remainingTime.seconds -= 1;
        }
        sleep(1000);
    }
  }, []);
*/