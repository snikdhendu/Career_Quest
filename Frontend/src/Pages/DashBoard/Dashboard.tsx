// import React, { useEffect, useState } from 'react';

import { Navbar } from '../../Components/Navbar';
import { Route, Routes } from "react-router-dom";
import MainDashBoard from './MainDashBoard'
import Profile from './Profile'
import AIchatbot from './AIchatbot'
import Stats from './AIchatbot'
import { SideBox } from '../../Components';
// import { useFirebase } from '../../Context/FirebaseContext';

const Dashboard = () => {
   


    return (
        <div className=' max-h-screen overflow-y-hidden'>
            <Navbar />
            <SideBox />

            <Routes>
                <Route path='/' element={<MainDashBoard />} />
                <Route path='profile' element={<Profile />} />
                <Route path='aichatbot' element={<AIchatbot />} />
                <Route path='stats' element={<Stats />} />
            </Routes>

        </div>
    );
}

export default Dashboard;