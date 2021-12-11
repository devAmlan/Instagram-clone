import React,{useContext} from 'react'
import './Login.css'
import { GoogleLogin } from 'react-google-login';
import {AuthContext} from '../../context/AuthProvider';
import {doc,setDoc} from 'firebase/firestore'
import {db} from '../../cofig/firebase-config'
// import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const {setAuthuser} =  useContext(AuthContext)
  const clientid = "1075025569924-b9ic6uktt3sli8a5tg23ac5aaki43j2p.apps.googleusercontent.com"
  const signupsuccess = (resp)=>{
    const userdata =  resp.profileObj
    setAuthuser(userdata)
    const UserRef = doc(db,"users",userdata.googleId)
    setDoc(UserRef,
    {
    useremail:userdata.email,
    username:userdata.name,
    userprofilephoto:userdata.imageUrl
    },{ capital: true }, { merge: true })
    
  }

  const signupfailure = ()=>{
    console.log('google sign up failed')
  }
  return (
        <div>
      
         <div className="loginbox">
          <GoogleLogin
          clientId={clientid}
          className="googleauthbtn"
          isSignedIn={false}
          cookiePolicy={'single_host_origin'}
          onSuccess={signupsuccess}
          onFailure={signupfailure}
          />
         </div>
        </div>
    )
}

export default Login
