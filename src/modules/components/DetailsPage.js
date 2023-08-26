import React from 'react';
import NavbarJS from "../layout/Navbar";

const DetailsPage = () => {

    return (
        <>
            <NavbarJS/>
            {localStorage.getItem('id')}
        </>
    );
};

export default DetailsPage;
