
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Error,Mentors,Sessions, Workshops,Timelines} from './Pages';
import Dashboard from './Pages/DashBoard/Dashboard';
import CreateAccount from './Pages/CreateAccount';
import "./App.css";
import Signin from './sign-in/[[...index]]';
import Signup from './sign-up/[[...index]]';


const App = () => {

  return (
    <Router>
      <Routes>
          <Route path='' element={<Home/>}/>
          <Route path="/sign-in/*" element={<Signin />} />
          <Route path='/sign-up/*' element={<Signup/>}/>
          {/* <Route path='/dashboard/:id' element={<UserDashboard/>}/>
          <Route path='/dashboard/:id/edit' element={<EditUser/>}/> */}
          <Route path="*" element={<Error />} />
          <Route path='/createAccount' element={<CreateAccount/>}/>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path='/mentors' element={<Mentors/>}/>
          <Route path='/mentors' element={<Mentors/>}/>
          <Route path='/sessions' element={<Sessions/>}/>
          <Route path='/workshops' element={<Workshops/>}/>
          <Route path='/timelines/eng' element={<Timelines/>}/>
          <Route path='/courses/*' element={<Timelines/>}/>
      </Routes>
    </Router>
  );
}

export default App;

