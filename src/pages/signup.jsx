import {Link} from "react-router-dom";
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { Helmet} from 'react-helmet-async';
import './signin.css'
import Load from "../comp/Load"
import {auth} from "../firebase/config"
import {  createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Errorpage from "../Errorpage";


const Signup = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(user){
    if(user.emailVerified){
      navigate("/");
    }
    }
  })
  const signupBtn = (eo) => {
    eo.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed up 
const user = userCredential.user;
console.log(user)
sendEmailVerification(auth.currentUser)
.then(() => {
console.log("Email verification sent!")
// ...
});
updateProfile(auth.currentUser, {
displayName: username, 
}).then(() => {
navigate("/");
// ...
}).catch((error) => {
console.log(error.code)
// ...
});



})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log("error")
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
        <Helmet>
          <title>Signup Page</title>
          <meta
        name="description"
        content="ssssssssssssss"
      />
        </Helmet>
        <Header/>
         <main>
         <form action="">
          <p style={{fontSize: "23px", marginBottom:"22px"}}>Create a new account <span>🧡</span></p>
            <input onChange={(eo) => {
              setusername(eo.target.value)
            }} required type="text" placeholder="Username:"/>
            <input onChange={(eo) => {
              setemail(eo.target.value)
            }} required  type="email" placeholder="E-mail:"/>
            <input onChange={(eo) => {
              setpassword(eo.target.value)
            }}  type="password" placeholder="Password:"/>
            <button onClick={(eo) => {
              signupBtn(eo)
              }}
            >  Sign Up</button>
            <p className="account">Already Have an Account <Link to="/signin">Sign-in</Link></p>
            
          </form>
          
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
      
      <main >
        
      <p>We send you an email to verify your account</p>
      <button className="del">Send Again</button>
    </main>
      <Footer/>
    </div>
      );
    }
  }

        }
        

  
  
        



    
  


  

   
  


export default Signup;
