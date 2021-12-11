import React,{useState,useEffect} from 'react'
import Post from '../post/Post'
import './PostArea.css'
import { collection, getDocs } from '@firebase/firestore'
import {db} from '../../cofig/firebase-config'
function PostArea() {
  const [post,setPost] = useState([])
  useEffect(() => {
   const getPostdata  = async()=>{
   const respdata = await getDocs(collection(db,"posts"))
   if(respdata){
    setPost(respdata.docs.map((doc)=>({...doc.data(),id:doc.id})))
   }
   }
   getPostdata()
  },[post])

    return (
        <div>
          <div className="postarea">
            {
              post.map((eachpost)=>{
                return(
                  <>
                  <Post
                  postid={eachpost.id}
                  postcaption={eachpost.postcaption}
                  postowner={eachpost.postowner}
                  photopost={eachpost.photopost}
                  profileimage={eachpost.profileimage}
                  comments={eachpost.comments}
                  />
                  </>
                )
              })
            }
          </div>
        </div>
    )
}

export default PostArea
