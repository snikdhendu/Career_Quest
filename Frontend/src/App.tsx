
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Error} from './Pages';
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
      </Routes>
    </Router>
  );
}

export default App;

