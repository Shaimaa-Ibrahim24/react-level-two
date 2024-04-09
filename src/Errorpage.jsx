import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const Errorpage = () => {
  return (
    <div>
          <Helmet>
          <title>error page</title>
          <meta
        name="description"
        content="csssssssssssssssssss"
      />
        <style type='text/css'>{`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
    @-webkit-keyframes cross1 {
      0% {
        transform: rotate(45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
      }
      100% {
        transform: rotate(45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
      }
    }
    @keyframes cross1 {
      0% {
        transform: rotate(45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
      }
      100% {
        transform: rotate(45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
      }
    }
    @-webkit-keyframes cross2 {
      0% {
        transform: rotate(-45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
      }
      100% {
        transform: rotate(-45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
      }
    }
    @keyframes cross2 {
      0% {
        transform: rotate(-45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
      }
      100% {
        transform: rotate(-45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
      }
    }
    @-webkit-keyframes cross1Reverse {
      100% {
        transform: rotate(45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
        opacity: 0;
      }
      0% {
        transform: rotate(45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
        opacity: 1;
      }
    }
    @keyframes cross1Reverse {
      100% {
        transform: rotate(45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
        opacity: 0;
      }
      0% {
        transform: rotate(45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
        opacity: 1;
      }
    }
    @-webkit-keyframes cross2Reverse {
      100% {
        transform: rotate(-45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
        opacity: 0;
      }
      0% {
        transform: rotate(-45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
        opacity: 1;
      }
    }
    @keyframes cross2Reverse {
      100% {
        transform: rotate(-45deg) scaleX(0) scaleY(0.7);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0);
        opacity: 0;
      }
      0% {
        transform: rotate(-45deg) scaleX(1) scaleY(1);
        box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
        opacity: 1;
      }
    }
    @-webkit-keyframes flip {
      0% {
        transform: rotate(-90deg) rotateY(0deg) translateX(0);
      }
      60% {
        transform: rotate(-90deg) rotateY(200deg) translateX(3vmin);
      }
      80% {
        transform: rotate(-90deg) rotateY(170deg) translateX(3vmin);
      }
      100% {
        transform: rotate(-90deg) rotateY(180deg) translateX(3vmin);
      }
    }
    @keyframes flip {
      0% {
        transform: rotate(-90deg) rotateY(0deg) translateX(0);
      }
      60% {
        transform: rotate(-90deg) rotateY(200deg) translateX(3vmin);
      }
      80% {
        transform: rotate(-90deg) rotateY(170deg) translateX(3vmin);
      }
      100% {
        transform: rotate(-90deg) rotateY(180deg) translateX(3vmin);
      }
    }
    @-webkit-keyframes flipReverse {
      100% {
        transform: rotate(-90deg) rotateY(0deg) translateX(0);
      }
      0% {
        transform: rotate(-90deg) rotateY(180deg) translateX(3vmin);
      }
    }
    @keyframes flipReverse {
      100% {
        transform: rotate(-90deg) rotateY(0deg) translateX(0);
      }
      0% {
        transform: rotate(-90deg) rotateY(180deg) translateX(3vmin);
      }
    }
    body, html {
      width: 100vw;
      height: 100vh;
      background-color: #9D1255;
      overflow: hidden;
      background-image: linear-gradient(45deg, #e91e63, #420046);
      font-family: "Open Sans";
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    
    .internal {
      font-size: 50vmin;
      text-align: center;
      color: #fff;
      text-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
      position: relative;
      margin-bottom: 10vmin;
      transition: transform 300ms;
    }
    .internal:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
    .internal:hover:before {
      -webkit-animation: flipReverse 300ms;
              animation: flipReverse 300ms;
    }
    .internal:hover .zero:before {
      -webkit-animation: cross1Reverse 300ms;
              animation: cross1Reverse 300ms;
    }
    .internal:hover .zero:after {
      -webkit-animation: cross2Reverse 300ms;
              animation: cross2Reverse 300ms;
    }
    .internal:before {
      content: "(";
      position: absolute;
      transform: rotate(-90deg);
      right: 25vmin;
      bottom: -30vmin;
      display: block;
      font-size: 115%;
      -webkit-animation: flip 1000ms 1.6s ease-in-out forwards;
              animation: flip 1000ms 1.6s ease-in-out forwards;
      transition: transform 300ms;
    }
    
    .zero {
      position: relative;
    }
    .zero:before, .zero:after {
      position: absolute;
      display: block;
      content: "";
      width: 140%;
      height: 10vmin;
      background: #3fe9ea;
      background-image: linear-gradient(90deg, #3fe9ea, #4ea6d0);
      left: -20%;
      top: 45%;
      box-shadow: 0 1vmin 5vmin rgba(0, 0, 0, 0.5);
    }
    .zero:before {
      transform: rotate(45deg) scaleX(0) scaleY(0.7);
      -webkit-animation: cross1 300ms 1s ease-in-out forwards;
              animation: cross1 300ms 1s ease-in-out forwards;
    }
    .zero:after {
      transform: rotate(-45deg) scaleX(0) scaleY(0.7);
      -webkit-animation: cross2 400ms 1.2s ease-in-out forwards;
              animation: cross2 400ms 1.2s ease-in-out forwards;
    }
    .zero:nth-child(2):before {
      transform: rotate(45deg) scaleX(0) scaleY(0.7);
      -webkit-animation: cross1 400ms 1.1s ease-in-out forwards;
              animation: cross1 400ms 1.1s ease-in-out forwards;
    }
    .zero:nth-child(2):after {
      transform: rotate(-45deg) scaleX(0) scaleY(0.7);
      -webkit-animation: cross2 500ms 1.3s ease-in-out forwards;
              animation: cross2 500ms 1.3s ease-in-out forwards;
    }
    
    .info {
      text-transform: uppercase;
      color: #3fe9ea;
      text-shadow: 0 0.5vmin 1vmin rgba(0, 0, 0, 0.5);
      font-size: 200%;
      padding: 0 24px;
      text-align: center;
    }
    
    .link {
      position: absolute;
      bottom: 0;
      padding-bottom: 24px;
    }
    .link a {
      color: #fff;
      opacity: 0.5;
      text-decoration: none;
      font-weight: 400;
      font-size: 90%;
      transition: opacity 300ms;
    }
    .link a:hover {
      opacity: 0.9;
    }
`}
    </style>
        </Helmet>
    <p className="info">Oh No! Cody is sad! Internally sad!</p>
    <h1 className="internal"><span className="five">5</span><span className="zero">0</span><span className="zero">0</span></h1>
    <footer className="link"><Link href="/">Home Page</Link></footer>
  </div>
  );
}

export default Errorpage;
