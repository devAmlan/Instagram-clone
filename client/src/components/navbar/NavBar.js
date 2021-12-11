import React, { useContext, useState } from 'react'
// import GoogleLogout from 'react-google-login';
import {Link} from 'react-router-dom'
import './NavBar.css'
import {BsPlusSquare,BsBookmark} from 'react-icons/bs'
import {AuthContext} from '../../context/AuthProvider'
import {CgProfile} from 'react-icons/cg'
function NavBar({setShowmodal}) {
//    const clientid = "1075025569924-b9ic6uktt3sli8a5tg23ac5aaki43j2p.apps.googleusercontent.com"

   const {authuser} = useContext(AuthContext)
   const [showprofile,setShowprofile] = useState(false)
    const showProfile = ()=>{ 
     setShowprofile(!showprofile) 
     let profilebox = document.getElementById('profilebox')
     profilebox.style.display= "block"
    }
    return (
        <>
        <div className="navbar">
         <div className="logo"><h3>Amlangram</h3></div>
         <div className="rightarea">
        <div className="icons">
        <BsPlusSquare onClick={()=>{setShowmodal(true)}}/>
        </div>
         <div className="profile" onClick={showProfile}>
         <img src={authuser.imageUrl} alt="profilephoto"/> 
         </div>
         </div>
        </div> 
        <div id="profilebox">
        <div className={showprofile?"showprofiledatas":"hideprofiledata"}>
        <Link to="/profile">
        <p><CgProfile/> profile</p>
        </Link>
        <p><BsBookmark/> saved</p>
        </div>
        </div>  
        </>
    )
}

export default NavBar
