import { Routes, Route } from "react-router-dom";
import SignInSide from '../src/Pages/Login.tsx'
import SignIn from '../src/Pages/Register.tsx'
import Home from './Pages/Home.tsx'

function App() {
  return (
   <> 
 <Routes>
    <Route path="/login" element={<SignInSide/>}/>
    <Route path="/signup" element={<SignIn/>}/>
    <Route path="/" element={<Home/>}/>
 </Routes>
   </>
  );
}

export default App;
