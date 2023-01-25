/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useState, useCallback } from 'react';
import {debounce} from 'lodash'; 
import gif from '../../../img/amalie-steiness.gif'
import { searchContext } from '../../../App';
import Card from './card';
const Views = () => {
    const {searchValue, onChange, onSubmit,getArtObjectList} = useContext(searchContext);
    
  
    const  requestOptions={
            method:'GET',
            redirect:'follow',
           
           
        };
    const [artObjects, setArtObjects] = useState([]);
    const [objectsId, setObjectsId] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
   



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
    
    const getMuseumArtObjectId = useCallback(
        async ( requestOptions) => {
        
            await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`,requestOptions)
            .then(response => response.json())
            .then( (result) => {
             
                setObjectsId(result["objectIDs"]);
                
            })

            .catch((error) => {
                console.log('error', error)
            })
    },
      []
    )
    
   

    const getMuseumArtObject = useCallback(
         (objectsId , requestOptions) => {
          
            const data = objectsId.slice(600, 605);
           
        if (data !== null) {
           
            data.forEach(id => {
               
                 fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
                 .then(response => response.json())
                 .then((result)=>{
                   
                    let res = !isInArray(artObjects, result)
                   ;
                    if (res) {
                        // let uniq = [...new Set([...artObjects, result])];
                        setArtObjects([...artObjects, result])
                        
                    }
                   
                   
                    
                       
                 }).catch((error)=>{
                     console.log('====================================');
                     console.log("cant get an object with his id");
                     console.log('====================================');
                 }).finally(()=>{
 
                  return true;
                 })
           });
            
            
        }
        if (artObjects.length ===3) {
             setLoaded(true);
             getArtObjectList(artObjects);
           
        }
        },
        

      [artObjects]
    )
    
    const debounceFetch = debounce( (requestOptions)=>  getMuseumArtObjectId( requestOptions),550);
    const debounceFetchArt = debounce( (objectsId,requestOptions)=>  getMuseumArtObject( objectsId,requestOptions),130);
    
    useEffect(() => {
        // getMuseumArtObjectId()
        if (objectsId.length === 0) {
            
            debounceFetch(requestOptions)
        }
       
      
      return () => {
      }
    }, [debounceFetch, objectsId, requestOptions])
    

    useEffect(() => {
        
        if (!isLoaded ) {
            getMuseumArtObject( objectsId,requestOptions)
            
        }
        // debounceFetchArt(objectsId,requestOptions);
       
    
      
    }, [getMuseumArtObject, isLoaded, objectsId, requestOptions])
    

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

                            <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

                        )
                             
                    
                    }
                   
                    
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