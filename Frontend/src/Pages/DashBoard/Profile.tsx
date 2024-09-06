import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "./componentsForprofile/TextInput";
import SelectInput from "./componentsForprofile/SelectInput";
import Button from "./componentsForprofile/Button";
interface ProfileData {
  name: string;
  dob: string;
  gender: string;
  fatherName: string;
  motherName: string;
  location: string;
  mobileNumber: string;
  school: string;
  study: string;
  previousClassPercentage: string;
  favouriteSubject: string;
  nonFavouriteSubject: string;
  achievements: string;
  aspiration: string;
  seeYourself: string;
  hobbies: string;
  favouriteColor: string;
  favouriteFood: string;
  strength: string;
  weekness: string;
  socialMedia: string;
  movie: string;
  book: string;
  higherEducation: string;
  others: string;
  referrenceCounsellor: string;
}

const Profile = () => {
  const [formStep, setFormStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    dob: "",
    gender: "",
    fatherName: "",
    motherName: "",
    location: "",
    mobileNumber: "",
    school: "",
    study: "",
    previousClassPercentage: "",
    favouriteSubject: "",
    nonFavouriteSubject: "",
    achievements: "",
    aspiration: "",
    seeYourself: "",
    hobbies: "",
    favouriteColor: "",
    favouriteFood: "",
    strength: "",
    weekness: "",
    socialMedia: "",
    movie: "",
    book: "",
    higherEducation: "",
    others: "",
    referrenceCounsellor: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof ProfileData, boolean>>>({});
  const navigate = useNavigate();

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setProfileData({
      ...profileData,
      [name]: value, // Update the corresponding field in the form state
    });
    setTouched({
      ...touched,
      [name]: true,
    });

    setErrors({
      ...errors, 
      [name]:''
    })
    // console.log(profileData)
  };
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (formStep === 1) {
      if (!profileData.name) newErrors.name = 'Full name is required';
      if (!profileData.dob) newErrors.dob = 'Date of birth is required';
      if (!profileData.gender) newErrors.gender = 'Gender is required';
      if (!profileData.fatherName) newErrors.fatherName = 'FatherName is requirezd';
      if (!profileData.location) newErrors.location = 'Location is required';
      if (!profileData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    }else if(formStep === 2){
      if (!profileData.school) newErrors.school = 'School name is required';
      if (!profileData.study) newErrors.study = 'Study Details is required';
      if (!profileData.previousClassPercentage) newErrors.previousClassPercentage = 'Percentage is required';
      if (!profileData.favouriteSubject) newErrors.favouriteSubject = 'Favouritte Subject Name is required';
      if (!profileData.nonFavouriteSubject) newErrors.nonFavouriteSubject = 'Non Favourite Subject Name is required';
      if (!profileData.achievements) newErrors.achievements = 'Achievements is required';
      if (!profileData.aspiration) newErrors.aspiration = 'Aspiration is required';
    }else if(formStep === 3){
      if (!profileData.hobbies) newErrors.hobbies = 'Hobbies/Interest name is required';
      if (!profileData.strength) newErrors.strength = 'Strengths are required';
      if (!profileData.weekness) newErrors.weekness = 'Weekness is required';
    }else if(formStep === 4){
      if(!profileData.higherEducation) newErrors.higherEducation = 'Higher Education Data is Required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNext = () => {
    if (validateForm()) {
      setFormStep((prevStep) => prevStep + 1);
    }
    console.log(profileData)
  };
  const handlePrev = () => {
    // const newErrors: { [key: string]: string } = {};
    // setErrors(newErrors);
    setFormStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/");
    }
  };
  
  useEffect(() => {
      const newErrors: Record<string, string> = {};
      if(formStep===1){
        if (touched.name && !profileData.name.trim()) newErrors.name = 'Full name is required';
        if (touched.dob && !profileData.dob.trim()) newErrors.dob = 'Date of birth is required';
        if (touched.gender && !profileData.gender.trim()) newErrors.gender = 'Gender is required';
        if (touched.fatherName && !profileData.fatherName.trim()) newErrors.fatherName = 'Father\'s Name is required';
        if (touched.location && !profileData.location) newErrors.location = 'Location is required';
        if (touched.mobileNumber && !profileData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
      }else if(formStep===2){
        if (touched.school && !profileData.school) newErrors.school = 'School name is required';
        if (touched.study && !profileData.study) newErrors.study = 'Study Details is required';
        if (touched.previousClassPercentage && !profileData.previousClassPercentage) newErrors.previousClassPercentage = 'Percentage is required';
        if (touched.favouriteSubject &&  !profileData.favouriteSubject) newErrors.favouriteSubject = 'Favouritte Subject Name is required';
        if (touched.nonFavouriteSubject && !profileData.nonFavouriteSubject) newErrors.nonFavouriteSubject = 'Non Favourite Subject Name is required';
        if (touched.achievements && !profileData.achievements) newErrors.achievements = 'Achievements is required';
        if (touched.aspiration && !profileData.aspiration) newErrors.aspiration = 'Aspiration is required';
      }else if(formStep ===3){
        if (touched.hobbies && !profileData.hobbies) newErrors.hobbies = 'Hobbies/Interest name is required';
        if (touched.strength  && !profileData.strength) newErrors.strength = 'Strengths are required';
        if (touched.weekness && !profileData.weekness) newErrors.weekness = 'Weekness is required';
      }else if(formStep===4){
        if(touched.higherEducation && !profileData.higherEducation) newErrors.higherEducation = 'Higher Education Data is Required';
      }
      // setErrors(newErrors);
      setErrors({
        ...errors, 
        ...newErrors
      })
    }, [profileData, touched]);
    return (
       <div className="w-full h-screen overflow-y-auto relative text-black lg:pr-[12rem] lg:pl-[24rem] pt-8  lg:block font-royal4">

        {/* Trying to do resonsive */}
       {/* <div className="w-screen h-screen text-black flex justify-center pt-8 font-royal1"> */}
      <div className=" rounded-[10px] flex flex-col items-center gap-1">
        <div className="text-2xl font-serif text-center pl-3 pr-3 pt-1 pb-1 mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-lg">
          Complete Your Profile
        </div>
        <div className="w-full flex flex-col items-center mb-3">
          <div className="w-[80%] relative -left-2 m-5 font-mono hidden lg:block">
            <div className="w-full rounded-full bg-SmallHeading h-1 bg-gray-400 "></div>
            <div
              className={`absolute rounded-full bg-BluePrimary h-1 top-0 transition-all bg-blue-600`}
              style={{ width: `${(formStep - 1) * 33 + 1}%` }}
            ></div>
            <div
              className={`rounded-full absolute h-8 w-8 -top-2.5 left-[-1%] flex justify-center items-center font-semibold transition-all bg-SmallHeading  ${
                formStep >= 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-[#636363]"
              }`}
            >
              1
            </div>
            <div
              className={`rounded-full absolute h-8 w-8 b -top-2.5 left-[33%] flex justify-center items-center font-semibold transition-all bg-SmallHeading ${
                formStep >= 2
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-[#636363]"
              }`}
            >
              2
            </div>
            <div
              className={`rounded-full absolute h-8 w-8   -top-2.5 left-[66%] flex justify-center items-center font-semibold transition-all bg-SmallHeading ${
                formStep >= 3
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-[#636363]"
              }`}
            >
              3
            </div>
            <div
              className={`rounded-full absolute h-8 w-8  -top-2.5 left-[99%] flex justify-center items-center font-semibold transition-all bg-SmallHeading ${
                formStep === 4
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-[#636363]"
              }`}
            >
              4
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between pl-4 pr-4">
              <h1>Personal Details</h1>
              <h1>Academic Details</h1>
              <h1>Case History I</h1>
              <h1>Case History II</h1>
          </div>
        </div>
        {formStep === 1 && (
          <div className="  justify-center items-center p-1 flex flex-col gap-3 w-11/12">
            <TextInput
              id="fullName"
              name="name"
              value={profileData.name}
              label="Enter your Full name*"
              placeholder="Enter your Full name"
              onChange={handleProfileChange}
              error={errors.name}
              />
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <TextInput
                  id="dob"
                  name="dob"
                  value={profileData.dob}
                  label="Date of Birth*"
                  placeholder="Date of Birth"
                  onChange={handleProfileChange}
                  error={errors.dob}
                  type="date"
                  />
              </div>
              <div className="w-1/2">
                <SelectInput
                  id="gender"
                  name="gender"
                  label="Gender*"
                  error={errors.gender}
                  value={profileData.gender}
                  onChange={handleProfileChange}
                  options={[
                    { value: "", label: "Select Gender" },
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </div>
            </div>
            <TextInput
              id="fatherName"
              name="fatherName"
              label="Father's name*"
              value={profileData.fatherName}
              placeholder="Father's name"
              error={errors.fatherName}
              onChange={handleProfileChange}
              />
            <TextInput
              id="motherName"
              name="motherName"
              label="Mother's name"
              value={profileData.motherName}
              error={errors.motherName}
              placeholder="Mother's name"
              onChange={handleProfileChange}
              />
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <TextInput
                  id="location"
                  name="location"
                  label="Enter your city*"
                  placeholder="Enter your city"
                  value={profileData.location}
                  error={errors.location}
                  onChange={handleProfileChange}
                  />
              </div>
              <div className="w-1/2">
                <TextInput
                  id="mobileNumber"
                  name="mobileNumber"
                  label="Enter 10-digit mobile number*"
                  value={profileData.mobileNumber}
                  error={errors.mobileNumber}
                  placeholder="Enter 10-digit mobile number"
                  onChange={handleProfileChange}
                  type="tel"
                />
              </div>
            </div>
            
            <div className="w-full flex justify-end items-end">
              <Button onClick={handleNext} label="Next" />
            </div>
          </div>
        )}
        {formStep === 2 && (
          <>
            <TextInput
              id="school"
              name="school"
              label="School/College/Institute*"
              placeholder="School/College/Institute"
              value={profileData.school}
              onChange={handleProfileChange}
              type="text"
              error={errors.school}
            />

            <div className="w-full flex gap-4">
              <SelectInput
                id="currentStudy"
                name="study"
                label="Current Study*"
                value={profileData.study}
                onChange={handleProfileChange}
                error={errors.study}
                options={[
                  { value: "", label: "Select" },
                  { value: "<8", label: "8th or Below" },
                  { value: "9-10", label: "9th or 10th" },
                  { value: "11-12", label: "11th or 12th" },
                  { value: "ug", label: "Undergraduate" },
                  { value: "g", label: "Graduate" },
                  { value: "p", label: "Professional" },
                  { value: "other", label: "Other" },
                ]}
              />

              <TextInput
                id="previousClassPercentage"
                name="previousClassPercentage"
                label="Previous Class Percentage*"
                placeholder="Previous Class Percentage"
                value={profileData.previousClassPercentage}
                onChange={handleProfileChange}
                type="text"
                error={errors.previousClassPercentage}
              />
            </div>

            <div className="w-full flex gap-4">
              <TextInput
                id="favouriteSubject"
                name="favouriteSubject"
                label="Favourite Subject*"
                placeholder="Favourite Subject"
                value={profileData.favouriteSubject}
                onChange={handleProfileChange}
                type="text"
                error={errors.favouriteSubject}
                />

              <TextInput
                id="nonFavouriteSubject"
                name="nonFavouriteSubject"
                label="Non-Favourite Subject*"
                placeholder="Non-Favourite Subject"
                value={profileData.nonFavouriteSubject}
                onChange={handleProfileChange}
                type="text"
                error={errors.nonFavouriteSubject}
                />
            </div>

            <TextInput
              id="achievements"
              name="achievements"
              label="Academic and Non-Academic Achievements*"
              placeholder="Academic and Non-Academic Achievements"
              value={profileData.achievements}
              onChange={handleProfileChange}
              type="text"
              error={errors.achievements}
              />

            <TextInput
              id="aspiration"
              name="aspiration"
              label="Aspiration - Dream Career*"
              placeholder="Aspiration - Dream Career"
              value={profileData.aspiration}
              onChange={handleProfileChange}
              type="text"
              error={errors.aspiration}
            />
            
            <div className="w-full flex flex-row justify-between items-end">
              <Button onClick={handlePrev} label="Previous" />
              <Button onClick={handleNext} label="Next" />
            </div>
          </>
        )}
        {formStep === 3 && (
          <>
            <TextInput
              id="seeYourself"
              name="seeYourself"
              label="Where do you want to see yourself in next 5-10 years?"
              value={profileData.seeYourself}
              placeholder="Where do you want to see yourself in next 5-10 years?"
              onChange={handleProfileChange}
            />

            <TextInput
              id="hobbies"
              name="hobbies"
              label="Hobbies and Interest*"
              placeholder="Write your Hobbies and Interest"
              value={profileData.hobbies}
              onChange={handleProfileChange}
              error={errors.hobbies}
            />

            <div className="w-full flex gap-4">
              <TextInput
                id="favouriteColor"
                name="favouriteColor"
                label="Favourite Color"
                placeholder="Favourite Color"
                value={profileData.favouriteColor}
                onChange={handleProfileChange}
              />

              <TextInput
                id="favouriteFood"
                name="favouriteFood"
                label="Favourite Food"
                placeholder="Favourite Food"
                value={profileData.favouriteFood}
                onChange={handleProfileChange}
              />
            </div>

            <TextInput
              id="strength"
              name="strength"
              label="Strengths*"
              placeholder="Strengths"
              value={profileData.strength}
              onChange={handleProfileChange}
              error={errors.strength}
              />

            <TextInput
              id="weekness"
              name="weekness"
              value={profileData.weekness}
              label="Weaknesses*"
              placeholder="Weaknesses"
              onChange={handleProfileChange}
              error={errors.weekness}
            />

            <SelectInput
              id="socialMedia"
              name="socialMedia"
              label="How much time you devotes to social media/mobile phone?"
              value={profileData.socialMedia}
              onChange={handleProfileChange}
              options={[
                { value: "", label: "Select" },
                { value: "1-3", label: "1 to 3 Hrs" },
                { value: "3-5", label: "3 to 5 Hrs" },
                { value: "5-8", label: "5 to 8 Hrs" },
                { value: ">8", label: "More than 8 Hrs" },
              ]}
            />
            
            <div className="w-full flex flex-row justify-between items-end">
              <Button onClick={handlePrev} label="Previous" />
              <Button onClick={handleNext} label="Next" />
            </div>
          </>
        )}
        {formStep === 4 && (
          <>
            <SelectInput
              id="movie"
              name="movie"
              label="What kind of movies & videos do you prefer to watch?"
              value={profileData.movie}
              onChange={handleProfileChange}
              options={[
                { value: "", label: "Select" },
                { value: "action", label: "Action" },
                { value: "comedy", label: "Comedy" },
                { value: "horror", label: "Horror" },
                { value: "mystry", label: "Mystery" },
                { value: "thriller", label: "Thriller" },
                { value: "romance", label: "Romance" },
                { value: "realStoryBased", label: "Real Story Based" },
                { value: "cooking", label: "Cooking" },
                { value: "familyOriented", label: "Family oriented" },
                { value: "others", label: "Others" },
              ]}
            />
            <SelectInput
              id="book"
              name="book"
              label="Which type of books and magazines do you prefer to watch?"
              value={profileData.book}
              onChange={handleProfileChange}
              options={[
                { value: "", label: "Select" },
                { value: "fictional", label: "Fictional" },
                { value: "non-fictional", label: "Non-Fictional" },
                { value: "mystery", label: "Mystery" },
                { value: "adventurous", label: "Adventurous" },
                { value: "thriller", label: "Thriller" },
                { value: "horror", label: "Horror" },
                {
                  value: "literary-historical",
                  label: "Literary / Historical",
                },
                { value: "fairy-tales", label: "Fairy Tales" },
                { value: "contemporary", label: "Contemporary" },
                { value: "others", label: "Others" },
              ]}
            />
            <SelectInput
              id="higherEducation"
              name="higherEducation"
              label="From where you want to complete your Higher Education?*"
              value={profileData.higherEducation}
              onChange={handleProfileChange}
              error={errors.higherEducation}
              options={[
                { value: "", label: "Select" },
                { value: "india", label: "India" },
                { value: "abroad", label: "Abroad" },
                { value: "others", label: "Others" },
              ]}
            />
            <TextInput
              id="others"
              name="others"
              label="Other things you want to share"
              placeholder="Other things you want to share"
              value={profileData.others}
              onChange={handleProfileChange}
            />
            <TextInput
              id="referrenceCounsellor"
              name="referrenceCounsellor"
              label="Reference counsellor name"
              placeholder="Reference counsellor name"
              value={profileData.referrenceCounsellor}
              onChange={handleProfileChange}
            />
            
            <div className="w-full flex flex-row justify-between items-end">
              <Button onClick={handlePrev} label="Previous" />
              <Button onClick={handleSubmit} label="Submit" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
