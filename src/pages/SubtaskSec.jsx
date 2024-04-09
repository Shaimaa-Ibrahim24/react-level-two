import React from 'react';
import { useDocument } from "react-firebase-hooks/firestore";
 import { doc } from "firebase/firestore";
import { db } from '../firebase/config';
import ReactLoading from 'react-loading';
import Moment from 'react-moment';
import { useState } from 'react';
import { arrayUnion, updateDoc } from "firebase/firestore";

const SubtaskSec = ({user,stringId,completeCheckbox,trashIcon}) => {
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));
  const [showTasko, setshowTasko] = useState(false);
  const [subtitle, setsubtitle] = useState("");
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
      <section className='sub-task mtt'>
      <div className='parent-time'>
        <p className='time'><Moment date={value.data().id}  fromNow /></p>
        <div>
          <input checked={value.data().completed} onChange={(eo) => {
            completeCheckbox(eo)
          }}  id="www" type="checkbox" />
          <label htmlFor="www">Completed</label>
        </div>
      </div>
      <ul>
        
  {value.data().Details.map((item) => {
    return(
      <li key={item} className='card-task '>
          <p>{item}</p>
          <i onClick={() => {
            trashIcon(item)
          }} className="fa-solid fa-trash"></i>
          </li>
    )
  })}
  
      </ul>
      {showTasko&&(
        <form style={{flexDirection:"row"}} className='add-newtask'>
        <input value={subtitle} onChange={(eo) => {
          setsubtitle(eo.target.value)
        }} type="text" className='add-task' />
        <button onClick={async(eo) => {
          eo.preventDefault()
          setsubtitle("")
          await updateDoc(doc(db, user.uid, stringId), {
            Details: arrayUnion(subtitle),
          });
          
        }} className='addo'>Add</button>
        <button onClick={(eo) => {
          eo.preventDefault()
        setshowTasko(false)
      }} className='cancel'>Cancel</button>
              </form>
      )}
      
      <div  className='center mtt'>
      <button onClick={() => {
        setshowTasko(true)
      }} className='add-more'>Add More
    <i className="fa-solid fa-plus"></i>
    </button>
    
      </div>
     </section>
    );
  }

}

export default SubtaskSec;
