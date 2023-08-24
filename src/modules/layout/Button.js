import React from 'react';
import {Button} from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="justify-content-center text-center mt-5"
             style={{display: "flex", justifyContent: "center", gap: '20px', marginTop: "5rem"}}>
            <Button label="Vintage Halılar" style={{background: '#3b5d50', color: "white"}} text raised/>
            <Button label="İskandinav" style={{background: '#3b5d50', color: "white"}} text raised/>
            <Button label="Bohem Halılar" style={{background: '#3b5d50', color: "white"}} text raised/>
            <Button label="Lazer Kesim Halılar" style={{background: '#3b5d50', color: "white"}} text raised/>
        </div>
    )
}
