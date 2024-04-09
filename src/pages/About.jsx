import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../comp/Header'
import Main from '../comp/Main'
import Footer from '../comp/Footer'
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Load from "../comp/Load"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Errorpage from '../Errorpage';

const About = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user&&!loading){
      navigate("/");
    }
  })
  
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
          <title>About page</title>
          <meta
        name="description"
        content="dddddddddddddddddddd"
      />
        </Helmet>
    <Header/>
    <Main aaa="About"/>
    <Footer/>
  </div>
    );
  }

  
}

export default About;
