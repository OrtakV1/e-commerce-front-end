import NavbarJS from "./modules/layout/navbar";
import CardJS from "./modules/layout/card";
import DashboardJS from "./modules/layout/dashboard";

function App() {
    return (
        <div className="App">
            <NavbarJS/>
            <DashboardJS/>
            <CardJS/>
        </div>
    );
}

export default App;
