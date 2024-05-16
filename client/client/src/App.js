import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from '../src/Pages/Login.tsx'
import SignIn from '../src/Pages/Register.tsx'

function App() {
  return (
   <> 
 <Routes>
    <Route path="/login" element={<SignInSide/>}/>
    <Route path="/signup" element={<SignIn/>}/>

 </Routes>
   </>
  );
}

export default App;
