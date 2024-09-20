import React, { useEffect, useState, ReactNode } from 'react';

interface DeviceCheckWrapperProps {
  children: ReactNode;
}

const DeviceCheckWrapper: React.FC<DeviceCheckWrapperProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width for mobile devices
    };

    checkDevice(); // Initial check on component mount
    window.addEventListener('resize', checkDevice); // Handle window resizing

    return () => window.removeEventListener('resize', checkDevice); // Cleanup on unmount
  }, []);

  if (isMobile) {
    return (
      <div className=' min-h-screen flex justify-center items-center font-bold text-xl text-black bg-white w-full text-center p-12'>
        <h2>Please switch to a laptop or desktop as this website is not mobile responsive yet.</h2>
      </div>
    );
  }

  return <>{children}</>; // Render children if not on mobile
};

export default DeviceCheckWrapper;
