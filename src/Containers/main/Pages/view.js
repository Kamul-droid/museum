
import React, { useEffect, useState } from 'react';
import {debounce} from 'lodash'; 
import gif from '../../../img/amalie-steiness.gif'

import Card from './card';
const Views = () => {

    const objects = [];
    const  requestOptions={
            method:'GET',
            headers: { 'Content-Type': 'application/json' },
            redirect:'follow',
            // mode:'no-cors',

            // referrerPolicy: 'origin-when-cross-origin,'
           
        };
    const [artObjects, setArtObjects] = useState([]);
    const [objectsId, setObjectsId] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [search, setSearch] = useState("");

    let alldata = [];
    // eslint-disable-next-line no-undef
    const getMuseumArtObject =  () => {
        // const searchValue = $(".search-box").val();
        
             fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`,requestOptions)
            .then(response => response.json())
            .then( (result) => {
                console.log(result,"result");
              
                // IDs = data['objectIDs'];
                setObjectsId(result["objectIDs"]);
                
                let extract = objectsId.slice(45734,45764);
               

                if (extract !== null) {
                    console.log('====================================');
                    console.log(extract,"extract");
                    console.log('====================================');
                    extract.map(id => 
                         
                        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
                       .then(response => response.json())
                       .then((result)=>{
                           // console.log(JSON.parse(result));
                          ;
                           objects.push(result);
                          
                       
              
                       }).catch((error)=>{
                           console.log('====================================');
                           console.log("cant get an object with his id");
                           console.log('====================================');
                       })
                    
                    )
                    }
                })

              

            .catch((error) => {
                console.log('error', error)
            }).finally(()=>{
                  ///////////////7
                  try {
                    
                    console.log(objects,'mes objets');
                    setArtObjects(objects)
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


    

    const debounceFetch = debounce( ()=>  getMuseumArtObject(),550);

    useEffect(()=>{
        if (!isLoaded) {
            
            debounceFetch();
        }
       
      
         
        }, [artObjects, debounceFetch, isLoaded, objectsId]);
      
       
    

    
    

    

   
        return (
            <section className="section-padding" id="section_3">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2>Popular</h2>
                    </div>
                  
                 
                 
                    
                    {
                       
                        isLoaded && 
                       artObjects.map(data => 

                            <Card  key= {data["objectID"]} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

                        )
                               
                            
                                 
                    
                    }
                    {
                    console.log(artObjects,"kkkkkkkkkkkkkkk")}
                    
                    {
                    !isLoaded &&
                    
                    <div className="text-center">
                        <div className="custom-block-wrap">

                            <img src={gif} alt="waiting" width="5px" height={50}  className="custom-block-image-waiting img-fluid" />
                    
                        </div>
                        <p className='h3'>We are getting for you the most beautiful arts object of our librairies</p>
                    </div>
                   
                   
                    }    
                     


                </div>
                
            </div>
        </section>


        );
    
};

export default Views;