import React from 'react';
import { Helmet } from 'react-helmet-async';
const Mymodal = ({closeModal,children}) => {
  return (

    <div className="parent-of-modal">
      <Helmet>
        
        <style type='text/css'>{`
    .parent-of-modal{
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #00000028;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal{
      background-color: whitesmoke;
      width: 400px;
      height: 333px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      overflow-y: scroll;

      animation: movy 0.8s;
    }
    @keyframes movy {
      0%{
      scale: 0;
      transform: translateY(-100vh);
      }
      100%{
        scale: 1;
        transform: translateY(0);
      }
    }
`}
    </style>
        </Helmet>
      <form action="" className="modal">
      <div onClick={() => {
        closeModal()
      }} className="close"><i className="fa-solid fa-xmark"></i></div>
      {children}
     </form>
      </div>
    
        

  
  );
}

export default Mymodal;


 