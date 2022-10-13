import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMotorcycle} from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'><FontAwesomeIcon icon={faMotorcycle}/>Police Department of Berlin</span>
                <div className='navItems'>
                    <span>Stolen Bikes</span>
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;
