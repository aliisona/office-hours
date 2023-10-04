import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Home/Home'
import Calendar from '../Calendar/Calendar.tsx'
import NavBar from '../Navbar/Navbar';
import Teachers from '../Teachers/Teachers'


export default function App() {
    return (
        <>
        <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/calendar" element={<Calendar />} />
       </Routes>
    </>
    )
}