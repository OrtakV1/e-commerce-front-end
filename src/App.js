import NavbarJS from "./modules/layout/navbar";
import CardJS from "./modules/layout/card";
import DashboardJS from "./modules/layout/dashboard";
import RaisedTextDemo from "./modules/layout/Button";

import {PrimeReactProvider} from 'primereact/api';
import {useState} from "react";

function App() {
    const [button, setButton] = useState();

    return (
        <PrimeReactProvider>
            <NavbarJS/>
            <DashboardJS/>
            <RaisedTextDemo setButton={setButton}/>
            <CardJS button={button}/>
        </PrimeReactProvider>
    );
}

export default App;
