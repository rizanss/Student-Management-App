import React from "react";
import logo from '../mylogo.JPG'

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>Student Management App</h1>
        </header>
    );
}

export default Header;
