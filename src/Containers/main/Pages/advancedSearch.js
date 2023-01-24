import React from 'react';
import Header from '../../header/header';
import Menu from '../../header/menu';
import Footer from '../../footer/footer';
import '../../../css/research.css'

const AdvancedSearch = () => {
    return (

  <>
    <Header></Header>
    <Menu></Menu> 
    <html>
    <head>
    <link href="../../../css/research.css" rel="stylesheet" />
    </head>
    <div class="s008">
      <form>
        <div class="inner-form">
          <div class="basic-search">
            <div class="input-field">
              <input id="search" type="text" placeholder="Type Keywords" name='q' /> 
            </div>
          </div>
          <div class="advance-search">
            <span>Advanced Search</span>
            <div class="row">
                <div class="input-select-departmentId">
                  <select data-trigger="" name="departmentId">
                    <option placeholder="" value="">Category</option>
                    <option>American Decorative Arts</option>
                    <option>Ancient Near Eastern Art</option>
                    <option>Arts of Africa/Oceania/Americas</option>
                    <option>Asian Art</option>
                    <option>The Cloisters</option>
                    <option>The Costume Institute</option>
                    <option>Drawings and Prints</option>
                    <option>Egyptian Art</option>
                    <option>European Sculpture/Decorative</option>
                    <option>Greek and Roman Art</option>
                    <option>Islamic Art</option>
                    <option>The Robert Lehman Collection</option>
                    <option>The Libraries</option>
                    <option>Medieval Art</option>
                    <option>Musical Instruments</option>
                    <option>Photographs</option>
                    <option>Modern Art</option>
                  </select>

              </div>  
              <div class="input-select-highlight">
                <select data-trigger="" name="highlight">
                    <option placeholder="" value="">highlight</option>
                    <option>True</option>
                    <option>False</option>
                  </select>
                </div>                 

                  <div class="input-field-hasImages">
                  <select data-trigger="" name="hasImages">
                    <option placeholder="" value="">Image</option>
                    <option>True</option>
                    <option>False</option>
                  </select>
              </div>
            </div>
            <div class="row second">
            <div class="input-select-geoLocation">                  
                    <input type="text" placeholder="géolocation(ex:Europe | Paris)" name='geoLocation'/>
            </div>
                <input type="text" className="input-tag" placeholder="tag" name='tags'/>
            <div class="input-select-medium">                  
                    <input type="text" placeholder="ex: Peintures | Céramique" name='medium'/>
                </div>
            
            </div>
            <div class="row third">
                  <button class="btn-delete" id="delete">Reset</button>
                  <button class="btn-advanceSearch">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </html>
    <Footer></Footer>
        </>
        
    );
};

export default AdvancedSearch;