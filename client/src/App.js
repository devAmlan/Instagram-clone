import './App.css';
import React from 'react'
import Mainarea from './pages/mainarea/Mainarea';
import Profile from './components/profile/Profile'
import AuthProvider from './context/AuthProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
  <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainarea/>}/>       
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile/>}/>       
          </Routes>
        </BrowserRouter>
    </AuthProvider>  
    </div>
  );
}

export default App;
