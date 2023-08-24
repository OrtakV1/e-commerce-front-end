import NavbarJS from "./Navbar";
import RaisedTextDemo from "./Button";
import CardJS from "./Card";
import {useState} from "react";
import DashBoardScreenJS from "./DashBoardScreen";
import FooterJS from "./Footer";

const DashboardJS = () => {
    const [button, setButton] = useState();
    return (
        <>
            <NavbarJS/>
            <DashBoardScreenJS/>
            <RaisedTextDemo setButton={setButton}/>
            <CardJS button={button}/>
            <FooterJS/>
        </>


    )
}

export default DashboardJS
