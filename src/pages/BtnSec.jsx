import React from 'react';
import { useDocument } from "react-firebase-hooks/firestore";
 import { doc } from "firebase/firestore";
import { db } from '../firebase/config';
import ReactLoading from 'react-loading';

const BtnSec = ({user,stringId,deleteBtn}) => {
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));
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
      <section className='center mt'>
            
      <button onClick={() => {
        deleteBtn()
      }} className='del'>Delete Task</button>
   
    </section>
    );
  }
  
}

export default BtnSec;
