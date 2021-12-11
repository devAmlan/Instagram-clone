import React,{useContext,useState,useEffect} from 'react'
import './Profile.css'
import {AuthContext} from '../../context/AuthProvider'
import {collection,where,query,onSnapshot} from 'firebase/firestore'
import { db } from '../../cofig/firebase-config'
import Profilepost from '../profilepost/Profilepost'
function Profile() {
  const {authuser} = useContext(AuthContext)
  const postRef = collection(db,"posts")
  const [userposts, setUserposts] = useState([])
  
 useEffect(() => {
  const getuserpost = async ()=>{
    const q = await query(postRef,where("ownerid","==",authuser.googleId))
    onSnapshot(q,(snapshot)=>{
      setUserposts(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
    })
  }
  getuserpost()
 }, [userposts])
  return (
        <>
        <div className="userprofile">
        <img src={authuser.imageUrl} alt="" />
        <h3>{authuser.name}</h3>
        </div>
         {
           userposts.map((eachuserpost)=>{
            return(
              <>
               <Profilepost
               postid={eachuserpost.id}
               postcaption={eachuserpost.postcaption}
               postowner={eachuserpost.postowner}
               photopost={eachuserpost.photopost}
               profileimage={eachuserpost.profileimage}
               comments={eachuserpost.comments}
               />
              </>
            )
           })
         }
        </>
    )
}

export default Profile
