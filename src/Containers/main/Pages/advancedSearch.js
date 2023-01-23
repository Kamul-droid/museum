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
              <input id="search" type="text" placeholder="Type Keywords" /> 
            </div>
          </div>
          <div class="advance-search">
            <span class="desc">Advanced Search</span>
            <div class="row">

                <div class="input-select-departmentId">
                  <select data-trigger="" name="choices-single-defaul">
                    <option placeholder="" value="">CATEGORY</option>
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
                    <input type="text" className="input-tag" placeholder="tag"/>

                    
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger="" name="choices-single-defaul">
                    <option placeholder="" value="">Images</option>
                    <option>True</option>
                    <option>False</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row second">
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger="" name="choices-single-defaul">
                    <option placeholder="" value="">SALE</option>
                    <option>SALE</option>
                    <option>SUBJECT B</option>
                    <option>SUBJECT C</option>
                  </select>
                </div>
              </div>
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger="" name="choices-single-defaul">
                    <option placeholder="" value="">TIME</option>
                    <option>THIS WEEK</option>
                    <option>SUBJECT B</option>
                    <option>SUBJECT C</option>
                  </select>
                </div>
              </div>
              <div class="input-field">
                <div class="input-select">
                  <select data-trigger="" name="choices-single-defaul">
                    <option placeholder="" value="">TYPE</option>
                    <option>TYPE</option>
                    <option>SUBJECT B</option>
                    <option>SUBJECT C</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row third">
              <div class="input-field">
                <div class="result-count">
                  <span>108 </span>results</div>
                <div class="group-btn">
                  <button class="btn-delete" id="delete">Reset</button>
                  <button class="btn-search">Search</button>
                </div>
              </div>
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