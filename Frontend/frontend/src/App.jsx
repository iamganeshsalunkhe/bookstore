import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Coursepage from './Pages/Coursepage';
import Signup from './Components/Signup';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/course" element={<Coursepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
