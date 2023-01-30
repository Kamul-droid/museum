import React from 'react';

import '../../../css/notFound.css';
import '../../../css/js/noFoundGsap';


const NotFound = () => {


    
    return (
        <div className="containerCustom">
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
            <div className="cog1">
              <div className="top-1"></div>
              <div className="down-1"></div>
              <div className="left-top-1"></div>
              <div className="left-down-1"></div>
              <div className="right-top-1"></div>
              <div className="right-down-1"></div>
              <div className="left-1"></div>
              <div className="right-1"></div>
          </div>
        </div>
        
        <div className="cog-wheel2"> 
          <div className="cog2">
              <div className="top-1"></div>
              <div className="down-1"></div>
              <div className="left-top-1"></div>
              <div className="left-down-1"></div>
              <div className="right-top-1"></div>
              <div className="right-down-1"></div>
              <div className="left-1"></div>
              <div className="right-1"></div>
          </div>
        </div>
       <h1 className="second-four">4</h1>
        <p className="wrong-para">Uh Oh! Page not found!</p>
      </div>
    );
};

export default NotFound;