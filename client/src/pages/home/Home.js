import React, { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import CreatePost from '../../components/createpost/CreatePost'
import PostArea from '../../components/postarea/PostArea'
function Home() {
    const [showmodal,setShowmodal] = useState(false)
    return (
        <>
        <NavBar setShowmodal={setShowmodal}/>
        <CreatePost setShowmodal={setShowmodal} showmodal={showmodal}/>
        <PostArea/>
        </>
    )
}

export default Home
