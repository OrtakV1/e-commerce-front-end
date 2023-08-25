import React, {useState} from 'react';
import {Button} from 'primereact/button';

export default function ButtonJS({setButton}) {

    const [selectedButton, setSelectedButton] = useState("Vintage");
    setButton(selectedButton)

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="justify-content-center text-center mt-5"
             style={{display: "flex", justifyContent: "center", gap: '20px', marginTop: "5rem"}}>
            <Button label="Vintage"
                    style={{background: selectedButton === "Vintage" ? "gray" : '#3b5d50', color: "white"}}
                    text raised onClick={() => handleButtonClick("Vintage")}/>
            <Button label="İskandinav"
                    style={{background: selectedButton === "İskandinav" ? "gray" : '#3b5d50', color: "white"}}
                    text raised onClick={() => handleButtonClick("İskandinav")}/>
            <Button label="Bohem"
                    style={{background: selectedButton === "Bohem" ? "gray" : '#3b5d50', color: "white"}}
                    text raised onClick={() => handleButtonClick("Bohem")}/>
            <Button label="Lazer Kesim"
                    style={{background: selectedButton === "Lazer Kesim" ? "gray" : '#3b5d50', color: "white"}}
                    text raised onClick={() => handleButtonClick("Lazer Kesim")}/>
        </div>
    )
}
