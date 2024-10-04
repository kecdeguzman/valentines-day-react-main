import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';



function App() {

  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const form = useRef();


  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
      heartArr[0].remove()
    }

  }, 100);


  /* code for moving button */
  const popUp = () => {
    alert(":((");
  }

  const clickedYes = () => {
    alert("YEEEEEEEEEEEEEY");
  }

  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }
  
  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };
  
  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  }

  /* code for email alert sent when she says yes */
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_z199l6g', 'template_w4y121f', form.current, 'KI7bceeNiZsp0c9Kp')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  // };



  return (
  
    <><p className="pre-valentine">
      Will you go out
    </p><p className="valentine">With Meeee</p><button
      style={yesStyle}
      type="submit"
      onClick={clickedYes}
    >
        YES!
      </button><button
        onMouseOver={mouseOver}
        style={noStyle}
        onClick={popUp}
      >
        no
      </button></>
  );
}

export default App;
