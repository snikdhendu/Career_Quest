import { Link } from 'react-router-dom';

const Workshops = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center text-black font-bold  text-4xl bg-gradient-to-r from-textmain to-white h-screen flex-col gap-4">
          <img src="/Animation.gif" alt="" className=" min-h-52 min-w-52"/>
          <h1>This Page is under Development</h1>
          <Link to='/'className="border-2 border-teal-600 text-teal-600 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base">Back to Home</Link>
        </div>
      );
}

export default Workshops