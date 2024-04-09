import { Helmet } from 'react-helmet-async';
import Footer from '../comp/Footer'
import Header from '../comp/Header'
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Load from '../comp/Load';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Moment from 'react-moment';
import { getAuth, deleteUser } from "firebase/auth";
import Errorpage from '../Errorpage';


const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user&&!loading){
      navigate("/");
    }
  })
  const deleteUser = () => {
    deleteUser(user).then(() => {
      console.log("  User deleted.")
      }).catch((error) => {
        // An error ocurred
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
  if(user){
    return (
      <div>
        <Helmet>
          <title>csssssss page</title>
          <meta
        name="description"
        content="csssssssssssssssssss"
      />
        <style type='text/css'>{`
    main{
      display: flex;
      flex-direction: column;
      width: fit-content;
      align-items: flex-start;
      margin: auto;
    }
`}
    </style>
        </Helmet>
    <Header/>
    <main>
  
          
          <h6>UserName :{user.displayName}  </h6>
          <h6>Email :{user.email}  </h6>
          <h6>Created at : <Moment date={user.metadata.creationTime}  fromNow />  </h6>
          <h6>Lat Sign in :<Moment date={user.metadata.lastSignInTime}  fromNow /> </h6>
          <button onClick={() => {
            deleteUser()
          }} className='del'>delete account</button>
          
        </main>
    <Footer/>
  </div>
    );
  }
  
  }
  
    
  
  


export default Profile;
