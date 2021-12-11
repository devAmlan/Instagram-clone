import React, { useContext,useState } from 'react'
import './Post.css'
import Reaction from '../reaction/Reaction'
import Comment from '../comment/Comment'
import {AuthContext} from '../../context/AuthProvider'
import {updateDoc,doc} from 'firebase/firestore'
import { db } from '../../cofig/firebase-config'
function Post({postcaption,postowner,photopost,profileimage,postid,comments}) {
  const {authuser} = useContext(AuthContext)
  const [comment,setComment] =  useState("")
  const [commentarray] =  useState(comments?comments:[])
  const [showcomment,setShowcomment] = useState(false)
  const postRef =  doc(db,"posts",postid)

  const addcomment = ()=>{
    const commentinput = document.getElementById('commentinput')
    if(comment !== ""){
      commentarray.push({
        commenttext:comment,
        commenter:authuser.name
      })
      updateDoc(postRef,{comments:commentarray})
      commentinput.value = ""
    }

  }
  return (
    <div>
      <div className="post">
      <div className="post_header">
        <img src={profileimage} alt=""/>
        <p>{postowner}</p>
      </div>
        <div className="postimage">
          <img src={photopost} alt=""/>
        </div>
        <h3>{postcaption}</h3>
        <div className="reactions">
        <Reaction 
        showcomment={showcomment}
        setShowcomment={setShowcomment}/>
        </div>

        {
           comments?(
             comments.map((eachcomment)=>(
               
               <Comment
               showcomment={showcomment}
               commenter={eachcomment.commenter}
               commenttext={eachcomment.commenttext}
               />
  
           ))
           ):(<></>)
         }
        <div className="commentsection">
        <input type="text" className="comment_input"
        id="commentinput"
         placeholder="Add a comment"
         onChange={(e)=>{setComment(e.target.value)}}
         />
         <button onClick={addcomment}>Post</button> 
        </div>
      </div>
    </div>
  )
}

export default Post
