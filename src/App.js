import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/register' element={<RegisterPage/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </>
    )
}

export default App
