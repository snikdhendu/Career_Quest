import { FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white w-full py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left side - Logo */}
        <div className="flex items-center">
          {/* <div className="bg-blue-500 p-2 rounded-tr-full">
            <FaTwitter className="text-white" size={24} />
          </div> */}
          <span className="ml-2 font-bold text-textmain font-royal4 text-3xl">
            Engineering Roadmap
          </span>
        </div>

        {/* Right side - Donate button and social links */}
        <div className="flex items-center space-x-4">


          <div className="flex items-center space-x-3 text-gray-500">
            <span className="text-sm">Share:</span>
            <FaTwitter className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
