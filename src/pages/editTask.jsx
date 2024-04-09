import { Helmet } from 'react-helmet-async';
import './editTask.css';
import Load from "../comp/Load"
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import TitleSec from './TitleSec';
import SubtaskSec from './SubtaskSec';
import BtnSec from './BtnSec';
import { useParams } from 'react-router-dom';
import { doc, updateDoc, arrayRemove,deleteDoc} from "firebase/firestore";
import { db } from '../firebase/config';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ReactLoading from 'react-loading';


const EditTask = () => {
  const [user, loading, error] = useAuthState(auth);
  let { stringId } = useParams();
  const navigate = useNavigate();
  const titleInput = async(eo) => {
    await updateDoc(doc(db, user.uid, stringId), {
      title: eo.target.value,
    });
  }
  const completeCheckbox = async(eo) => {
    if(eo.target.checked){
      await updateDoc(doc(db, user.uid, stringId), {
        completed: true,
      });
    }
    else{
      await updateDoc(doc(db, user.uid, stringId), {
        completed: false,
      });  
    }
  }
  const trashIcon = async(item) => {
    await updateDoc(doc(db, user.uid, stringId), {
      Details: arrayRemove(item),
   });
  }
  const [showData, setshowData] = useState(false);
  const deleteBtn = async() => {
    setshowData(true)
    await deleteDoc(doc(db, user.uid, stringId));
    navigate("/", { replace: true });
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
<h1>errorrrrrrrrrrr</h1>
    )
  }
if(user){
  return (
    <div>
        <Helmet>
            <title>Edit Page</title>
          </Helmet>
          <Header/>
      
        
        <main>
{showData?(
  <main><ReactLoading type="spin" color="red" height={150} width={100} /> </main>
):(
  <div className='edit-task'>
  <TitleSec user={user} stringId={stringId} titleInput={titleInput} />
              <SubtaskSec user={user}stringId={stringId} completeCheckbox={completeCheckbox} trashIcon={trashIcon} />
               <BtnSec user={user} stringId={stringId} deleteBtn={deleteBtn}/>
  </div> 
)}
</main>
         
          <Footer/>
    </div>
  );
}
    
  }
  


export default EditTask;
