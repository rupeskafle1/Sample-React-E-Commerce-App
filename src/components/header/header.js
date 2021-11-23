import React from 'react';
import '../header/header.css';
import { Link } from "react-router-dom";

/* This component renders the top header */
const header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">E-kart</Link>
            <div className="welcome-text">Welcome Guest</div>
        </header>
    );
}
export default header;