import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../header/header';
import Menu from '../../header/menu';
import Footer from '../../footer/footer';
import '../../../css/research.css'


import Card from './card';

const AdvancedSearch = () => {
  const departments = [];
  

  const  requestOptions={
    method:'GET',
    headers: { 'Content-Type': 'application/json' },
    redirect:'follow',}

  const [departmentsId, setdepartmentId] = useState([]);
  const  [idOfRequestObject, setIdOfRequestObject] = useState([]);
  const  [searchObject, setSearchObject] = useState([]);
  const  [query, setMQuery] = useState('');
  const [formData, setFormData] = useState({
    departmentId: '',
    q: '',
    highlight:'',
    hasImages:'',
    geoLocation:'',
    tags:'',
    medium:'',
    isSubmit:'false',
  });
console.log(searchObject,'hhhdebut');
  let count = 0;
  const isInArray = ( array, data)=>{
    let isInside =false;
    array.forEach(element => {
        
        if (element.objectID === data.objectID) {
            isInside = true;
        } 
    });
    return isInside;
  }
  
  const launchSearch = (formData)=>{
    if (formData.isSubmit) {
      let value = {q:formData.q,departmentId:formData.departmentId,geoLocation:formData.geoLocation,hasImages:formData.hasImages,isHighlight:formData.highlight,tags:formData.tags,medium:formData.medium};
      let queryString = '';
     for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        const element = value[key];
        
        if (element !=='') {
          
          queryString+=`${key}=${element}&`;
        }
      }
     }
    
     return queryString.substring(0,queryString.length-1);
  
     
    }
  }
  const getMuseumObject = useCallback(
    async ()=>{
       idOfRequestObject.forEach(id => {
               
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
        .then(response => response.json())
        .then((result)=>{
         
           let res = !isInArray(searchObject, result)
          ;
          if (res) {
           
            setSearchObject(searchObject => [...searchObject,result])
             
             
           }
         
              
        }).catch(()=>{
            console.log('====================================');
            console.log("cant get an object with his id");
            console.log('====================================');
        }).finally(()=>{
  
         return true;
        })
      });
    },
    [idOfRequestObject]
  )

  const getMuseumArtObjectId = 
    async ( query) => {
      
    
      await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?${query}`,requestOptions)
      .then(response => response.json())
      .then( (result) => {
       
        setIdOfRequestObject(result["objectIDs"]);
        getMuseumObject()
        
          
      })

      .catch((error) => {
          console.log('error', error)
      })
  }

  
  
  

   

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const name = "isSubmit";
    const value = true;
    setFormData({ ...formData, [name]: value });
    let res =launchSearch(formData);
    setMQuery(res);
    console.log(query, 'quer');
    console.log(res, 'query');
    getMuseumArtObjectId(res);
  }

  useEffect(() => {
    getMuseumArtObjectId(query);
  
   
  }, [])
  
  
  
  
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
  departmentsId.map(data => departments.push({dep :data["displayName"] , id:data["departmentId"]}))
  
  // console.log(departments)
}





    getdepartmentsId()
    getData()

    


    return (

  <>
  
    <Header></Header>
    <Menu></Menu> 
    <div className="s008">
      <form onSubmit={handleSubmit}>
        <div className="inner-form">
          <div className="basic-search">
            <div className="input-field">
              <input id="search" required type="text" placeholder="Type Keywords" name='q' value={formData.q} onChange={handleInputChange} />
            </div>
          </div>
          <div className="advance-search">
            <span>Advanced Search</span>
            
            <div className="row">

                <div className="input-select-departmentId">
                <select id='dep' data-trigger="" name="departmentId" value={formData.departmentId} onChange={handleInputChange} >
               
                <option placeholder="" value="" id='dep'>Category</option>
                {departments.map(data =>
                
                <option key={data["id"]} id ={data["id"]} value ={data["id"]}> {data["id"]} - {data["dep"]}</option>
                )}


              </select>
              </div>  
              <div className="input-select-highlight">
                <select data-trigger="" name="highlight" id='high' value={formData.highlight} onChange={handleInputChange} >
                    <option placeholder="" value="" >highlight</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </select>
                </div>                 

                  <div className="input-field-hasImages">
                  <select data-trigger="" name="hasImages" id='img' onChange={handleInputChange} value={formData.hasImages} >
                    <option placeholder="" value="">Image</option>
                    <option>True</option>
                    <option>False</option>
                  </select>
              </div>
            </div>
            <div className="row second">
            <div className="input-select-geoLocation">                  
                    <input  id='geo' type="text" placeholder="géolocation(ex:Europe | Paris)"  value={formData.geoLocation} onChange={handleInputChange} name='geoLocation' />
            </div>
                <input id='tag' type="text" className="input-tag" placeholder="tag"  value={formData.tags} name='tags' onChange={handleInputChange}/>
            <div className="input-select-medium">                  
                    <input id='med' type="text" placeholder="ex: Peintures | Céramique"  value={formData.medium} onChange={handleInputChange} name='medium' />
                </div>
            
            </div>
            <div className="row third">
                  <button className="btn-delete" id="delete">Reset</button>
                  <button type="submit" className="btn-advanceSearch" >Search</button>
            </div>
          </div>
        </div>
      </form>
      
    </div>
    <div className='row'>
    {searchObject && 
        searchObject.map(data => 

        <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

        )
      
      }
      {searchObject.length===0 &&  idOfRequestObject.length !==0 &&
       
       <p className='text-center h2'> Not found </p>
      
      }

    </div>
    <Footer></Footer>
 
        </>
        
    );
  

};
export default AdvancedSearch;