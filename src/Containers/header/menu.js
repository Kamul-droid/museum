import React, {  useCallback, useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { searchContext } from '../../App';
const Menu = () => {
   const {searchValue, getArtObjectList, updateSearch} = useContext(searchContext);
   
    const search = <FontAwesomeIcon icon={faSearch}/>;
   
   
    const handleChange =  useCallback(  (e) => {
        updateSearch(e.target.value);
        console.log('================term====================');
        console.log(searchValue);
        console.log('====================================');
    },[searchValue, updateSearch]);
    
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        
        updateSearch(searchValue);
        
    },[searchValue, updateSearch]);
      
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
                        <form onSubmit={handleSubmit}>

                        
                            <button className="btn-search" type='submit' >
                                <i className=''>{search}</i>
                                
                            </button>
                            <input id='search' type="text" name='searchVal' className="input-search" placeholder="Type to Search..." value={searchValue} onChange={handleChange} />
                        </form>
                        
                    </li>

                  

                    

                    <li className="nav-item ms-3">
                        <Link className="nav-link custom-btn custom-border-btn btn" to="/advanced_research">Advanced search</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Menu;