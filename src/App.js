import NavbarJS from "./modules/layout/navbar";
import CardJS from "./modules/layout/card";
import DashboardJS from "./modules/layout/dashboard";
import RaisedTextDemo from "./modules/layout/Button";

import {PrimeReactProvider, PrimeReactContext} from 'primereact/api';

function App() {
    return (
        <PrimeReactProvider>
            <NavbarJS/>
            <DashboardJS/>
            <RaisedTextDemo/>
            <CardJS/>
        </PrimeReactProvider>
    );
}

export default App;
