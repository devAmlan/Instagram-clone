import React from 'react'

function Comment({commenter,commenttext,showcomment}) {
    return (
        <div>
        {
          showcomment?
          <div className="allcomments">
          <h4>{commenter}</h4>
          <p>{commenttext}</p> 
          </div> 
          :<></>
        }
        </div>
    )
}

export default Comment

