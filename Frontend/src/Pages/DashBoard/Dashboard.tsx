// import React, { useEffect, useState } from 'react';

import { Navbar } from '../../Components/Navbar';
import { Route, Routes } from "react-router-dom";
import MainDashBoard from './MainDashBoard'
import Profile from './Profile'
import AIchatbot from './AIchatbot'
import { SideBox } from '../../Components';
import Carrerlibrary from './Carrerlibrary'
import Helpsupport from './Helpsupport';
import Mentors from './Mentors';
// import { useFirebase } from '../../Context/FirebaseContext';

const Dashboard = () => {
   


    return (
        <div className=' max-h-screen overflow-hidden'>
            <Navbar />
            <SideBox />

            <Routes>
                <Route path='/' element={<MainDashBoard />} />
                <Route path='profile' element={<Profile />} />
                <Route path='aichatbot' element={<AIchatbot />} />
                <Route path='library' element={<Carrerlibrary />} />
                <Route path='mentors' element={<Mentors />} />
                <Route path='help' element={<Helpsupport />} />
            </Routes>

        </div>
    );
}

export default Dashboard;