import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Coursepage from './Pages/Coursepage';
import Signup from './Components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [authuser, setAuthuser] = useAuth()
    console.log(authuser)
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/course" element={authuser ?<Coursepage/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Homepage/>}/>
      </Routes>
      <Toaster/>
      </BrowserRouter>
    
  )
}

export default App
