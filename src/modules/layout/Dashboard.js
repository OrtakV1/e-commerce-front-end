import NavbarJS from "./Navbar";
import CardJS from "../components/Card";
import {useState} from "react";
import DashBoardScreenJS from "./DashBoardScreen";
import FooterJS from "./Footer";
import ButtonJS from "../components/Button";

const DashboardJS = () => {
    const [button, setButton] = useState();
    return (
        <>
            <NavbarJS/>
            <DashBoardScreenJS/>
            <ButtonJS setButton={setButton}/>
            <CardJS button={button}/>
            <FooterJS/>
        </>


    )
}

export default DashboardJS
