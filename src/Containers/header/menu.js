import React, {  useCallback, useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { searchContext } from '../../App';


const Menu = () => {
   const {searchValue,artQObjects,setArtQObjects, getArtObjectList, updateSearch,isInArray} = useContext(searchContext);
   
  
    const [objectsQId, setObjectsQId] = useState([]);
    const [isQLoaded, setQLoaded] = useState(false);
    const search = <FontAwesomeIcon icon={faSearch}/>;
    const  requestOptions={
        method:'GET',
        redirect:'follow',
       
       
    };

    
    const getMuseumArtObjectIdWithQuery = 
    async ( ) => {
    
        await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchValue}`,requestOptions)
        .then(response => response.json())
        .then( (result) => {
            setObjectsQId(result["objectIDs"]); 
             getMuseumArtQObject();
                                                  
        }).then(
            
            ()=>{
                getArtObjectList(artQObjects);
            }
        )
        .catch((error) => {
            console.log('error', error)
        })
    }

    const getMuseumArtQObject = 
    async () => {
             
        if (objectsQId.length !==0) {
            
            objectsQId.forEach(id => {
                
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
                    .then(response => response.json())
                    .then((result)=>{
                    
                    let res = !isInArray(artQObjects, result);
                    
                    if (res) {
                       
                        
                        setArtQObjects(artQObjects => [...artQObjects, result])
                    
                    }
                    
                    }).catch((error)=>{
                        console.log('====================================');
                        console.log("cant get an object with his id");
                        console.log('====================================');
                    })
            });
            
            
        }
   
          
            
           
    }
    
  





   
    const handleChange =  useCallback(  (e) => {
         updateSearch(e.target.value);

        
    },[]);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getArtObjectList([]);
        getMuseumArtObjectIdWithQuery().catch(console.log("error k"))
        
        
        
        //    const formData = document.getElementById('search');
        //     updateSearch(formData.value);
        
    };
    
    useEffect(() => {
        getMuseumArtObjectIdWithQuery().catch(console.log("error k"))
             
    }, []);


    
    
 
      
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