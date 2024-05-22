import { Routes, Route } from "react-router-dom";
import SignInSide from '../src/Pages/Login.tsx'
import SignIn from '../src/Pages/Register.tsx'
import Home from './Pages/Home.tsx'
import About from './Pages/About.jsx'
import Donate from './Pages/Donate.tsx'
import Emergency from './Pages/Emergency.jsx'
import Find from './Pages/Find.jsx'

function App() {
  return (
   <> 
 <Routes>
    <Route path="/login" element={<SignInSide/>}/>
    <Route path="/signup" element={<SignIn/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/find " element={<Find/>}/>
    <Route path="/donate " element={<Donate/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/emergency" element={<Emergency/>}/>
 </Routes>
   </>
  );
}

export default App;
