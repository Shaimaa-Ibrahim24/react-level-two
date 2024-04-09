import {Link} from "react-router-dom";
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { Helmet} from 'react-helmet-async';
import './signin.css'
import {signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from "react-router-dom";
import Mymodal from "../Shared/Mymodal";


const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [emailo, setemailo] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [checky, setchecky] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [showform, setshowform] = useState(false);
  const closeModal = () => {
    setshowform(false)
  }
const signinBtn = (eo) => {
  eo.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
navigate("/");
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
sethasError(true)
switch (errorCode) {
case "auth/user-not-found":
setfirebaseError("wrong Email")
break;
case "auth/invalid-login-credentials":
setfirebaseError("wrong Password")
break;

default:
setfirebaseError(errorCode)
break;
}

});
}
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <meta
    name="description"
    content="htmlllllllllllllll"
  />
      </Helmet>
    <Header/>
    <main style={{flexDirection:"column"}}>
     
     {showform&& <Mymodal closeModal={closeModal} >
     <input onChange={(eo) => {
        setemailo(eo.target.value)
      }} required placeholder="E-mail" type="email" />
      <button onClick={(eo) => {
        eo.preventDefault()
        
        sendPasswordResetEmail(auth, emailo)
  .then(() => {
    setchecky(true)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
      }}>reset password</button>
    {checky&&<p className="check">please check your email to reset password</p>} 
      </Mymodal>}
      
      <form action="">
          <input onChange={(eo) => {
            setemail(eo.target.value)
          }}  required type="email" placeholder="E-mail:"/>
          <input onChange={(eo) => {
            setpassword(eo.target.value)
          }}   required type="password" placeholder="Password:"/>
          <button onClick={(eo) => {
          signinBtn(eo)

          }}>Sign In</button>

          <p className="account">Dont Have Account <Link to="/signup">Sign-up</Link></p>
        <p onClick={() => {
          setshowform(true)
        }} className="passy mt">Forgot Password?</p>
        {hasError&&<p>{firebaseError}</p>}
        </form>
      </main>
      <Footer/>  
    </>
  );
}

export default Signin;
