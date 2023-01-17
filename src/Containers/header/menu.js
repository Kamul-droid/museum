import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    const search = <FontAwesomeIcon icon={faSearch}/>;
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-lg">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="logo img-fluid" alt="The Metropolitan Museum of Art"/>
                <span>
                Museum of Art
                    <small>Online Museum</small>
                </span>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link click-scroll" to="/">Home</Link>
                    </li>

                    <li className="search-box">
                    
                        <button className="btn-search">
                            <i className=''>{search}</i>
                            
                        </button>
                        <input type="text" className="input-search" placeholder="Type to Search..."/>
                    
                       
                    </li>

                  

                    

                    <li className="nav-item ms-3">
                        <Link className="nav-link custom-btn custom-border-btn btn" to="donate.html">Advanced search</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Menu;