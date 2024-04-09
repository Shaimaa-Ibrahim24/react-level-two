import React from 'react';
import { Link } from 'react-router-dom';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";
import { db } from '../firebase/config';
import ReactLoading from 'react-loading';
import Moment from 'react-moment';
import { useState } from 'react';

const Alltask = ({user}) => {
  const [allData, setallData] = useState( query(collection(db, user.uid), orderBy("id")));
  const [isfullopacity, setisfullopacity] = useState(false);
  const [selectvalue, setselectvalue] = useState("aaa");
  const [value, loading, error] = useCollection(allData);
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
      <div>
        <section style={{justifyContent:"center", alignItems:"center"}} className='parent-of-buttons flex mt'>
          {selectvalue === "aaa"&&<div>
          <button style={{opacity:isfullopacity?"1":"0.3"}} onClick={() => {
            setallData( query(collection(db, user.uid), orderBy("id", "desc")))
            setisfullopacity(true)
          }}>Newest first</button>
          <button style={{opacity:isfullopacity?"0.3":"1"}} onClick={() => {
            setallData( query(collection(db, user.uid), orderBy("id")))
            setisfullopacity(false)
          }}>Oldest first</button>
      </div>}
        
          <select value={selectvalue} onChange={(eo) => {
            if(eo.target.value === "aaa"){
            setselectvalue("aaa")
            setisfullopacity(false)
              setallData(query(collection(db, user.uid), orderBy("id")))
            }
            else if(eo.target.value === "bbb"){
              setselectvalue("bbb")
              setallData(query(collection(db, user.uid), where("completed", "==", true)))
            }
            else if(eo.target.value === "ccc"){
              setselectvalue("ccc")
              setallData(query(collection(db, user.uid), where("completed", "==", false)))
            }
          }} style={{alignSelf:"end"}}  id="browsers">
    <option value="aaa"> All Tasks </option>
    <option value="bbb"> Completed </option>
    <option value="ccc"> Not Completed </option>
  </select>
         </section>
      <section className='all-tasks mt'>
        {value.docs.length === 0&&(<h1>Congratulations You have completed all tasks</h1>)}
        {value.docs.map((item) => {
          return(
            <article key={item.data().id}  dir="auto" className='one-task'>
            <Link className='task-link' to={`/edittask/${item.data().id}`}>
            <h2>{item.data().title}</h2>
            <ul>
                {item.data().Details.map((it,index) => {
                  if(index < 2){
                    return(
                      <li key={it}>{it}</li>
                    )
                  }
                  else{
                    return false;
                  }
                })}  
            </ul>
            <p className='time'>
            <Moment date={item.data().id}  fromNow />
            </p>
            </Link>
          </article>
          )
        })}
   </section>
   </div>
    );
  }
  
}

export default Alltask;
