import Header from '../comp/Header'
import Footer from '../comp/Footer';
import './home.css'
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { sendEmailVerification } from "firebase/auth";
import Load from '../comp/Load';
import Errorpage from '../Errorpage';
import { useState } from 'react';
import Mymodal from '../Shared/Mymodal';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase/config';
import HomeModal from './homeModal';
import Alltask from './Alltask';

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showform, setshowform] = useState(false);
  const [array, setarray] = useState([]);
  const [subtask, setsubtask] = useState("");
  const [title, settitle] = useState("");
  const [showload, setshowload] = useState(false);
  const [message, setmessage] = useState(false);
  const closeModal = () => {
    setshowform(false)
    settitle("")
    setarray([])

  }
  const titleInput = (eo) => {
    settitle(eo.target.value)
  }
  const detailInput = (eo) => {
    setsubtask(eo.target.value)
  }
  const addBtn = (eo) => {
    eo.preventDefault()
    if(!array.includes(subtask)){
      array.push(subtask)
    }
    setsubtask("")
  }
  const submitBtn = async(eo) => {
    eo.preventDefault()
    console.log("waiting.......")
    setshowload(true)
    const taskId = new Date().getTime()
    await setDoc(doc(db, user.uid, `${taskId}`), {
      title:title,
      Details:array,
      id:taskId,
      completed:false,
    });  
    console.log("doneeeeeeeeee")
    setshowload(false)
    settitle("")
    setarray([])
    setshowform(false)
    setmessage(true)
    setTimeout(() => {
      setmessage(false)
    }, 2000);
  }
  const sendEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email verification sent!")
        // ...
      });
  }
  if(loading){
    return (
      <div>
      
    <Header/>
    
    <main >
      
    
  <Load/>
  </main>
    <Footer/>
  </div>
    );
  }
  if(error){
    return(
<Errorpage/>
    )
  }
  if(!user){
    return (
      <div>
      
    <Header/>
    
    <main className='home'>
      
    
    <p className='pls'>Please <Link style={{fontSize:"27px"}} to="signin"> Sign-in</Link> to continue</p>
  </main>
    <Footer/>
  </div>
    );
  }
if(user){
  if(!user.emailVerified){
    return (
      <div>
      
    <Header/>
    
    <main className='home'>
      
    
    <h1>Welcome: {user.displayName} <span>🧡</span></h1>
    <p>please verify your email to continue</p>
    <button onClick={() => {
      sendEmail()
    }} className='del'>Send Email</button>
  </main>
    <Footer/>
  </div>
    );
  }
  if(user.emailVerified){
    return (
      <div>
      
    <Header/>
    
    <main className='home'>
    
         <Alltask user={user}/>
    <section>
      <button onClick={() => {
        setshowform(true)
      }} className='add-task'>Add new-task</button>
    </section>
    {showform&&<HomeModal titleInput={titleInput} detailInput={detailInput}
    addBtn={addBtn} submitBtn={submitBtn} closeModal={closeModal}
    title={title} subtask={subtask} array={array} showload={showload} />}
    {<p style={{right:message?"20px":"-100vw"}} className='show-msg'>Task Added Successfully <i className='fa-solid fa-check'></i></p>}
  </main>
    <Footer/>
  </div>
    );
  }
  
}
    
    }
  
  
  


    
  


export default Home;
