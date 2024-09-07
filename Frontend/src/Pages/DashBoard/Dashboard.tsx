import { useEffect, useState } from 'react';

import { Navbar } from '../../Components/Navbar';
import { Route, Routes, useNavigate } from "react-router-dom";
import MainDashBoard from './MainDashBoard'
import Profile from './Profile'
import AIchatbot from './AIchatbot'
import { SideBox } from '../../Components';
import Carrerlibrary from './Carrerlibrary'
import Helpsupport from './Helpsupport';
import Mentors from './Mentors';
// import { useFirebase } from '../../Context/FirebaseContext';
import { useUser } from '@clerk/clerk-react';
const Dashboard = () => {

    const { user } = useUser();
    const navigate = useNavigate();

    const [authReady, setAuthReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAuthReady(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (authReady && !user) {
            navigate('/sign-in');
        }
    }, [authReady, user, navigate]);

    if (!authReady) {
        return (
            <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
                <div className="flex flex-row gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
                <h1 className='text-2xl font-bold text-textmain'>Loading just a moment....</h1>
            </div>

        );
    }

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