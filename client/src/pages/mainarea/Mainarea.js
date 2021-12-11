import React, { useContext} from 'react'
import Login from '../../components/login/Login'
import Home from '../home/Home'
import './Mainarea.css'
import {AuthContext} from '../../context/AuthProvider'


function Mainarea() {
  const {authuser} = useContext(AuthContext)

    return (
        <>

          {authuser?<Home/>:
          <div className="loginarea">
          <Login/>
          </div>
          }
         
        </>
    )
}

export default Mainarea
