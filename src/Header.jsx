import React from "react";
import logo from "./img/logo.png";

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="" />
                <h1 className="name">Keep Note</h1>
            </div>
        </>
    );
}

export default Header;