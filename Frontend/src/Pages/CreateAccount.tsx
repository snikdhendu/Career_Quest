import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import  student  from "../assets/student.png";
import school from "../assets/school.png";
import mentor from "../assets/mentor.png";


const CreateAccount: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate(); // Hook to navigate to different pages

  // // If no user is logged in, return null
  // if (!user) {
  //   return null;
  // }

  // Function to handle redirection
  const handleUserTypeClick = () => {
    navigate(`/dashboard`); // Redirect based on user type
  };

  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-5">Select Your Account Type</h2>

      {/* Rectangle Box */}
      <div className="border-2 border-gray-300 p-8 bg-white rounded-lg shadow-lg w-2/3 max-w-4xl">
        <div className="flex justify-around items-center">
          {/* Student */}
          <div
            onClick={() => handleUserTypeClick()}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={student} // Replace with actual image path
                alt="Student"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-lg font-semibold">Student</p>
          </div>

          {/* Schools */}
          <div
            onClick={() => handleUserTypeClick()}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={ school} // Replace with actual image path
                alt="Schools"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-lg font-semibold">Schools</p>
          </div>

          {/* Mentors */}
          <div
            onClick={() => handleUserTypeClick()}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={mentor} // Replace with actual image path
                alt="Mentors"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-lg font-semibold">Mentors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
