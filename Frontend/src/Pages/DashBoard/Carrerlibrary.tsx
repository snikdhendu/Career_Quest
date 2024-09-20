// Carrerlibrary.js
// import React from 'react';
import { useNavigate } from 'react-router-dom';

const Carrerlibrary = () => {
  const navigate = useNavigate(); // Hook for navigation

  const subs = [
    {
      name: "Get started with Science",
      profileUrl: "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      about: "Science Enthusiast with a focus on research and innovation.",
      imageUrl: "https://via.placeholder.com/150",
      path: "/career-science",
    },
    {
      name: "Get started with Commerce",
      profileUrl: "https://ramjas.du.ac.in/college/web/dept/commerce.jpg",
      about: "Commerce Expert specializing in business and finance strategies.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Get started with Arts",
      profileUrl: "https://assets.change.org/photos/9/qv/lk/fMqvLKfMbUVNxcH-800x450-noPad.jpg?1488726722",
      about: "Arts Aficionado with experience in creative expression and design.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Others",
      profileUrl: "https://eduadvice.in/media/uploads/blog/physicaleducation-1200x675.jpg",
      about: "Versatile Professional with expertise in various fields.",
      imageUrl: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="container mx-auto justify-center items-center lg:ml-64 flex flex-col gap-5 overflow-y-auto p-6" style={{ height: '670px', width: "83%" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-full justify-center items-center w-full">
        {subs.map((sub, index) => (
          <div key={index} className="group before:hover:scale-95 before:hover:h-full before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-r from-textmain to-white before:absolute before:top-0 w-72 h-96 relative bg-slate-200 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 overflow-hidden">
              <img src={sub.profileUrl} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-xl font-semibold">{sub.name}</span>
              <p>{sub.about}</p>
            </div>
            <button className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
              onClick={() => navigate(sub.path || "#")}>Explore</button>
          </div>
        ))}
      </div>

      <div>
        <h1 className=' text-lg font-bold text-textmain'>Note: As of now, only <span className=' text-textsecond'> "Get Started with Science"</span> is available. Feel free to explore and dive into the wonders of science!</h1>
      </div>

    </div>
  );
};

export default Carrerlibrary;
