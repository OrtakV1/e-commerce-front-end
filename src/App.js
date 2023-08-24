import DashboardJS from "./modules/layout/Dashboard";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {PrimeReactProvider} from 'primereact/api';
import DetailsPage from "./modules/layout/DetailsPage";

function App() {


    return (
        <PrimeReactProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<DashboardJS/>}/>
                    <Route path="/details" element={<DetailsPage/>}/>
                </Routes>
            </Router>

        </PrimeReactProvider>
    );
}

export default App;
