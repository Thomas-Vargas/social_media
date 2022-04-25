import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import React from "react";
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </>
  )
}

export default App;
