import DashboardJS from "./modules/layout/Dashboard";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {PrimeReactProvider} from 'primereact/api';
import DetailsPage from "./modules/components/DetailsPage";
import CarpetTypesJS from "./modules/components/CarpetTypes";
import SignInJS from "./modules/users/SignIn";
import SignUpJS from "./modules/users/SignUp";


function App() {

  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardJS/>}/>
          <Route path="/signin" element={<SignInJS/>}/>
          <Route path="/signup" element={<SignUpJS/>}/>
          <Route path="/details" element={<DetailsPage/>}/>
          <Route path="/carpettypes" element={<CarpetTypesJS/>}/>
        </Routes>
      </Router>

    </PrimeReactProvider>
  );
}

export default App;
