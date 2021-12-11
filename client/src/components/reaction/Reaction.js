import React,{useState} from 'react'
import '../post/Post.css'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {VscComment} from 'react-icons/vsc'
function Reaction({showcomment,setShowcomment}) {
    const [like, setLike] = useState(false)
   
    return (
        <>
         <div className="like">
        {like?<AiFillHeart onClick={()=>{setLike(!like)}}
         style={{color:"#CD113B"}}/>
        :<AiOutlineHeart onClick={()=>{setLike(!like)}}/>}
         </div> 
         <div className="comment">
        <VscComment onClick={()=>{setShowcomment(!showcomment)}}/>  
        </div>  
        </>
    )
}

export default Reaction
