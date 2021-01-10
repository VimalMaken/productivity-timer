import { useRef, useState, useEffect } from "react";
import '../styles/styles.css';
import {ReactComponent as Done} from "../assets/done.svg";

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function Intro({ setPage, setUserInput }) {
  let temp = [];
  const [preset, setPreset] = useState([0,0,0]);

  const wheel1 = useRef();
  const wheel2 = useRef();
  const wheel3 = useRef();
  const var_11 = useRef();
  const var_12 = useRef();
  const var_21 = useRef();
  const var_22 = useRef();
  const var_31 = useRef();
  const var_32 = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    let array = ipcRenderer.sendSync('load-time');
    setPreset(array);
    temp = array;
    if(array[0] === 0) {
      var_11.current.innerText = 23;
      var_12.current.innerText = array[0] + 1;
    }
    else if (array[0] === 23) {
      var_11.current.innerText = array[0] - 1;
      var_12.current.innerText = 0;
    }
    else {
      var_11.current.innerText = array[0] - 1;
      var_12.current.innerText = array[0] + 1;
    }
    if(array[1] === 0) {
      var_21.current.innerText = 59;
      var_22.current.innerText = array[1] + 1;
    }
    else if (array[1] === 59) {
      var_21.current.innerText = array[1] - 1;
      var_22.current.innerText = 0;
    }
    else {
      var_21.current.innerText = array[1] - 1;
      var_22.current.innerText = array[1] + 1;
    }
    if(array[2] === 0) {
      var_31.current.innerText = 59;
      var_32.current.innerText = array[2] + 1;
    }
    else if (array[2] === 59) {
      var_31.current.innerText = array[2] - 1;
      var_32.current.innerText = 0;
    }
    else {
      var_31.current.innerText = array[2] - 1;
      var_32.current.innerText = array[2] + 1;
    }

    wheel1.current.addEventListener('wheel', (event) => {
      if(event.deltaY < 0) {
        if(temp[0] === 23) {
          setOne(0);
        }
        else {
          setOne(temp[0] + 1);
        }
      }
      else {
        if(temp[0] === 0) {
          setOne(23);
        }
        else {
          setOne(temp[0] - 1);
        }
      }
    });
    var_11.current.addEventListener('click', (event) => {
      event.preventDefault();
      if(temp[0] === 0) {
        setOne(23);
      }
      else {
        setOne(temp[0] - 1);
      }
    });
    var_12.current.addEventListener('click', (event) => {
      event.preventDefault();
      if(temp[0] === 23) {
        setOne(0);
      }
      else {
        setOne(temp[0] + 1);
      }
    });
    wheel2.current.addEventListener('wheel', (event) => {
      if(event.deltaY < 0) {
        if(temp[1] === 59) {
          setTwo(0)
        }
        else {
          setTwo(temp[1] + 1);
        }
      }
      else {
        if(temp[1] === 0) {
          setTwo(59);
        }
        else {
          setTwo(temp[1] - 1);
        }
      }
    });
    var_21.current.addEventListener('click', (event) => {
      event.preventDefault();
      if(temp[1] === 0) {
        setTwo(59);
      }
      else {
        setTwo(temp[1] - 1);
      }
    });
    var_22.current.addEventListener('click', (event) => {
      event.preventDefault();
      if(temp[1] === 59) {
        setTwo(0);
      }
      else {
        setTwo(temp[1] + 1);
      }
    });
    wheel3.current.addEventListener('wheel', (event) => {
      if(event.deltaY < 0) {
        if(temp[2] === 59) {
          setThree(0);
        }
        else {
          setThree(temp[2] + 1);
        }
      }
      else {
        if(temp[2] === 0) {
          setThree(59);
        }
        else {
          setThree(temp[2] - 1);
        }
      }
    });
    var_31.current.addEventListener('click', (event) => {
      event.preventDefault();
      if(temp[2] === 0) {
        setThree(59);
      }
      else {
        setThree(temp[2] - 1);
      }
    });
    var_32.current.addEventListener('click', (event) => {
      event.preventDefault();
      if(temp[2] === 59) {
        setThree(0);
      }
      else {
        setThree(temp[2] + 1);
      }
    });
    buttonRef.current.addEventListener('click', (event) => {
      ipcRenderer.sendSync('save-time', [temp[0], temp[1], temp[2]]);
      setUserInput([temp[0],temp[1],temp[2]]);
      setPage([false, true, false]);
    });
  }, []);

  function setOne(number){
    let tempPreset = temp;
    tempPreset[0] = number;
    switch (tempPreset[0]) {
      case 0:
        var_11.current.innerText = 23;
        var_12.current.innerText = tempPreset[0] + 1;
        break;
      case 23:
        var_11.current.innerText = tempPreset[0] - 1;
        var_12.current.innerText = 0;
        break;
      default:
        var_11.current.innerText = tempPreset[0] - 1;
        var_12.current.innerText = tempPreset[0] + 1;
    }
    setPreset([tempPreset[0],tempPreset[1],tempPreset[2]]);
    temp = tempPreset;
  }

  function setTwo(number){
    let tempPreset = temp;
    tempPreset[1] = number;
    switch (tempPreset[1]) {
      case 0:
        var_21.current.innerText = 59;
        var_22.current.innerText = tempPreset[1] + 1;
        break;
      case 59:
        var_21.current.innerText = tempPreset[1] - 1;
        var_22.current.innerText = 0;
        break;
      default:
        var_21.current.innerText = tempPreset[1] - 1;
        var_22.current.innerText = tempPreset[1] + 1;
    }
    setPreset([tempPreset[0],tempPreset[1],tempPreset[2]]);
    temp = tempPreset;
  }

  function setThree(number){
    let tempPreset = temp;
    tempPreset[2] = number;
    switch (tempPreset[2]) {
      case 0:
        var_31.current.innerText = 59;
        var_32.current.innerText = tempPreset[2] + 1;
        break;
      case 59:
        var_31.current.innerText = tempPreset[2] - 1;
        var_32.current.innerText = 0;
        break;
      default:
        var_31.current.innerText = tempPreset[2] - 1;
        var_32.current.innerText = tempPreset[2] + 1;
    }
    setPreset([tempPreset[0],tempPreset[1],tempPreset[2]]);
    temp = tempPreset;
  }

  return (
    <div className="intro">
      <p className="title">How long do you want to study for?</p>
      <div className="timeWheel">
        <div className="scroll" ref={wheel1}>
          <p ref={var_11} className="pointer"></p>
          <p className="active">{preset[0]}</p>
          <p ref={var_12} className="pointer"></p>
          <p>Hours</p>
        </div>
        <div className="scroll" ref={wheel2}>
          <p ref={var_21} className="pointer"></p>
          <p className="active">{preset[1]}</p>
          <p ref={var_22} className="pointer"></p>
          <p>Minutes</p>
        </div>
        <div className="scroll" ref={wheel3}>
          <p ref={var_31} className="pointer"></p>
          <p className="active">{preset[2]}</p>
          <p ref={var_32} className="pointer"></p>
          <p>Seconds</p>
        </div>
      </div>
      <Done className="button" ref={buttonRef} />
    </div>
  );
}
  
export default Intro;