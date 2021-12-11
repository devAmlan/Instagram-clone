import React,{useContext, useState} from 'react'
import Modal from 'react-modal'
import './CreatePost.css'
import {BiImageAdd} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'
import { storage } from '../../cofig/firebase-config'
import { ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import {collection,addDoc} from 'firebase/firestore'

import { AuthContext } from '../../context/AuthProvider'
import {db} from '../../cofig/firebase-config'
function PostArea({setShowmodal,showmodal}) {
    const {authuser} = useContext(AuthContext)
    const [caption, setCaption] = useState("")
    const [photo,setPhoto] = useState("")
    const postCollectionRef = collection(db,"posts")
    const handlechange = (e)=>{
        if(e.target.files[0]){
            console.log(e.target.files[0])
          if(e.target.files[0].size < 3000000){
            setPhoto(e.target.files[0])
            var selectedImage = URL.createObjectURL(e.target.files[0]);
            var photopreview = document.getElementById('preview-photo')
            photopreview.src = selectedImage
            photopreview.style.display = 'flex'
          }
          else{
            alert('please add photo size less than 3 mb')
          }
           
        }
    }
    const uploadhandle = ()=>{
        var photopreview = document.getElementById('preview-photo')
        photopreview.style.display = 'none'
        setCaption("")
        
        if(photo){
        const storageRef = ref(storage,`/photoposts/${photo.name}`)
        const uploadPhoto = uploadBytesResumable(storageRef,photo)

        uploadPhoto.on("state_changed",(snapshot)=>{
            // console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100))
            // snapshot.bytesTransferred / snapshot.totalBytes
        },(err)=>{console.log(err)},
        ()=>{
          getDownloadURL(uploadPhoto.snapshot.ref).then((url)=>{
            addDoc(postCollectionRef,{
             photopost:url,
             postcaption:caption,
             profileimage:authuser.imageUrl,
             postowner:authuser.name,
             ownerid:authuser.googleId
            })
          //   Axios.post('http://localhost:3010/upload',
          //   {photourl:url,caption:caption,googleid:authuser.googleId,
          //   profileimage:authuser.imageUrl,postowner:authuser.name
          // })
          //   .then((resp)=>{console.log(resp.data)})   

        }) 
        setShowmodal(false)
        }
        )
       }
    }
    return (
        <div>
       
         <Modal
        onRequestClose={()=>{setShowmodal(false)}}
        isOpen={showmodal}
        >
            <div onClick={()=>{setShowmodal(false)}}
            style={{float:"right"}}
            ><CgClose
            style={{fontSize:"30px"}}
            /></div>
           <div className="postmodal">
       
            <div className="createpost">
            <h4>Create new post</h4>
           <div className="photopost">
           <label htmlFor="fileInput">
            <BiImageAdd style={{fontSize:"30px", cursor:"pointer"}}/>
            </label>
            <input type="file" 
            id="fileInput" 
            accept="image/*" 
            onChange={handlechange}/>
           </div>
            <div className="previewarea">
             <img src="" alt="" id="preview-photo"/>
            </div>
             <textarea
             placeholder="Write a Caption"
             onChange={(e)=>{setCaption(e.target.value)}}
             ></textarea>
             <div className="postbtn">
             <button
             onClick={uploadhandle}
             >POST</button>
             </div>
            </div>
           </div>
   
        </Modal>
        </div>
    )
}

export default PostArea
