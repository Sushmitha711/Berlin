import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMotorcycle} from '@fortawesome/free-solid-svg-icons';
import Search from '@material-ui/icons/Search';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'><FontAwesomeIcon icon={faMotorcycle}/>Police Department of Berlin</span>
                <div className='navItems'>
                    <span>Stolen Bikes</span>
                    <button className='navButton'>Login</button>
                    <button className='navButton'>Register</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;
