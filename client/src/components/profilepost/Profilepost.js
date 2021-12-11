import React from 'react'
import '../post/Post.css'
function Profilepost({postid,postcaption,postowner, photopost, profileimage,comments}) {
    return (
        <>
        <div className="alluserposts">
        <div className="post">
        <div className="post_header">
        <img src={profileimage} alt=""/>
        <p>{postowner}</p>
        </div>
        <div className="postimage">
        <img src={photopost} alt=""/>
        </div>
        <h3>{postcaption}</h3>
        </div>  
        </div>
        </>
    )
}

export default Profilepost
