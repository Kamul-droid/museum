import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../header/header';
import Menu from '../../header/menu';
import Footer from '../../footer/footer';
import '../../../css/research.css'
import {debounce} from 'lodash'; 

const AdvancedSearch = () => {
  const departments = [];
  const idOfDepartements = [];
  const objects = [];
  let alldata = [];

  const  requestOptions={
    method:'GET',
    headers: { 'Content-Type': 'application/json' },
    redirect:'follow',}

  const [departmentsId, setdepartmentId] = useState([]);
  const [searchId, setSearchId] = useState([]);
  const [artObjects, setArtObjects] = useState([]);
  const [objectsId, setObjectsId] = useState([]);
  const [isLoaded, setLoaded] = useState(false);


  const getdepartmentsId = useCallback(
    async ( requestOptions) => {
    
        await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/departments`,requestOptions)
        .then(response => response.json())
        .then( (result) => {
         
          setdepartmentId(result["departments"]);

            
        })

        .catch((error) => {
            console.log('error', error)
        })
},
  []
)                // eslint-disable-next-line no-undef
const getData = async()=>{
  departmentsId.map(data => departments.push(data["displayName"]))
  departmentsId.map(data=>idOfDepartements.push(data["departmentId"]))
}
    getdepartmentsId()
    getData()

   
 const getSearchArtObject =  () => {
  // const searchValue = $(".search-box").val();
  
       fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=table`,requestOptions)
      .then(response => response.json())
      .then( (result) => {
          //console.log(result,"result");
        
          // IDs = data['objectIDs'];
          setObjectsId(result["objectIDs"]);
          
          let extract = objectsId;
         

          if (extract !== null) {
              //console.log('====================================');
              //console.log(extract,"extract");
              //console.log('====================================');
                extract.map(id => 
                         
                  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
                 .then(response => response.json())
                 .then((result)=>{
                    console.log(JSON.parse(result,"test"));
                    ;
                     objects.push(result);
                    
                 
        
                 })

              )
              }
          }).finally(()=>{
              try {
                //console.log(objects,'mes objets');
                setArtObjects(objects)
                console.log(artObjects,'mes objets');

                if (artObjects.length !== 0) {
                    alldata[0] = artObjects;
                    setLoaded(true);
                }
                console.log('====================================');
                console.log(artObjects,"art object");
                console.log('====================================');
                        
            } catch (error) {
                console.log('====================================');
                console.log('cant set state for artObjetcs');
                console.log('====================================');
            }
            /////////////////
            return true;
        });



      }

const debounceFetch = debounce( ()=>  getSearchArtObject(),550);

useEffect(()=>{
    if (!isLoaded) {
        
        debounceFetch();
    }
   
  
     
    }, [artObjects, debounceFetch, isLoaded, objectsId]);


getSearchArtObject()






    return (

  <>
  
    <Header></Header>
    <Menu></Menu> 
    <div className="s008">
      <form>
        <div className="inner-form">
          <div className="basic-search">
            <div className="input-field">
              <input id="search" required type="text" placeholder="Type Keywords" name='q' />
            </div>
          </div>
          <div className="advance-search">
            <span>Advanced Search</span>
            
            <div className="row">

                <div className="input-select-departmentId">
                <select data-trigger="" name="departmentId">
               
                <option placeholder="" value="" disabled selected>Category</option>
                <option>{idOfDepartements[0]} - {departments[0]}</option>
                <option>{idOfDepartements[1]} - {departments[1]}</option>
                <option>{idOfDepartements[2]} - {departments[2]}</option>
                <option>{idOfDepartements[3]} - {departments[3]}</option>
                <option>{idOfDepartements[4]} - {departments[4]}</option>
                <option>{idOfDepartements[5]} - {departments[5]}</option>
                <option>{idOfDepartements[6]} - {departments[6]}</option>
                <option>{idOfDepartements[7]} - {departments[7]}</option>
                <option>{idOfDepartements[8]} - {departments[8]}</option>
                <option>{idOfDepartements[9]} - {departments[9]}</option>
                <option>{idOfDepartements[10]} - {departments[10]}</option>
                <option>{idOfDepartements[11]} - {departments[11]}</option>
                <option>{idOfDepartements[12]} - {departments[12]}</option>
                <option>{idOfDepartements[13]} - {departments[13]}</option>
                <option>{idOfDepartements[14]} - {departments[14]}</option>
                <option>{idOfDepartements[15]} - {departments[15]}</option>
                <option>{idOfDepartements[16]} - {departments[16]}</option>
                <option>{idOfDepartements[17]} - {departments[17]}</option>
                <option>{idOfDepartements[18]} - {departments[18]}</option>
              </select>
              </div>  
              <div className="input-select-highlight">
                <select data-trigger="" name="highlight">
                    <option placeholder="" value="" disabled selected>highlight</option>
                    <option>True</option>
                    <option>False</option>
                  </select>
                </div>                 

                  <div className="input-field-hasImages">
                  <select data-trigger="" name="hasImages">
                    <option placeholder="" value="" disabled selected>Image</option>
                    <option>True</option>
                    <option>False</option>
                  </select>
              </div>
            </div>
            <div className="row second">
            <div className="input-select-geoLocation">                  
                    <input type="text" placeholder="géolocation(ex:Europe | Paris)" name='geoLocation'/>
            </div>
                <input type="text" className="input-tag" placeholder="tag" name='tags'/>
            <div className="input-select-medium">                  
                    <input type="text" placeholder="ex: Peintures | Céramique" name='medium'/>
                </div>
            
            </div>
            <div className="row third">
                  <button className="btn-delete" id="delete" >Reset</button>
                  <button className="btn-advanceSearch">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <Footer></Footer>
 
        </>
        
    );
  

};
export default AdvancedSearch;