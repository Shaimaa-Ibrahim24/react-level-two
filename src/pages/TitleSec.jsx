import React, { useRef }  from 'react';
import { useDocument } from "react-firebase-hooks/firestore";
 import { doc } from "firebase/firestore";
import { db } from '../firebase/config';
import ReactLoading from 'react-loading';

const TitleSec = ({user,stringId,titleInput}) => {
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));
  const inputElement = useRef(null);
  if(loading){
    return (
      <div>
      <ReactLoading type="spin" color="red" height={150} width={100} />
  </div>
    );
  }
  if(error){
    return(
<h1>Error........</h1>
    )
  }

  if(value){
    return (
      <section className='center'>
                <h1>
                  <input style={{textDecoration:value.data().completed?"line-through wavy":null}} ref={inputElement} onChange={(eo) => {
                    titleInput(eo)
                  }} className='title-input center'  type="text" defaultValue={value.data().title} />
                  <i onClick={() => {
                    inputElement.current.focus()
                  }} className="fa-solid fa-pen-to-square"></i>
                </h1>
               </section>
    );
  }
}

export default TitleSec;
