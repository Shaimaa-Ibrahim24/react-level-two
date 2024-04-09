import React from 'react';
import Mymodal from '../Shared/Mymodal';
import ReactLoading from 'react-loading';

const HomeModal = ({titleInput,detailInput,addBtn,submitBtn,closeModal,
  showload,array,title,subtask}) => {
  return (
    <Mymodal closeModal={closeModal}>
    <div style={{textAlign:"left"}}>
    <input onChange={(eo) => {
      titleInput(eo)
    }} required value={title} type="text" placeholder='Add Title:' />
    <div>
    <input value={subtask} onChange={(eo) => {
    detailInput(eo)
    }} type="text" placeholder='Details'/>
    <button onClick={(eo) => {
    addBtn(eo)
    }}>Add</button>
    </div>
    <ul>
      {array.map((item) => {
        return(
          <li key={item}>{item}</li>
        )
      })}
      
    </ul>
    <button onClick={async(eo) => {
    submitBtn(eo)
    }}>
    {showload? <ReactLoading type="spin" color="white" height={37} width={37} />:"Submit"}
      </button>
    </div>
    </Mymodal>
  );
}

export default HomeModal;
