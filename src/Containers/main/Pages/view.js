
import React, { useContext, useEffect, useState, useCallback } from 'react';
import {debounce} from 'lodash'; 
import gif from '../../../img/loading.gif'
import { searchContext } from '../../../App';
import Card from './card';



const Views = (props) => {

    const {searchValue, artQObjects, getArtObjectList, updateSearch,isInArray,isQLoaded,setQLoaded} = useContext(searchContext);

    let {searchData,data} = props;
 
    const  requestOptions={
            method:'GET',
            redirect:'follow',
           
           
        };
    const [artObjects, setArtObjects] = useState([]);
    const [objectsId, setObjectsId] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [artPObjects, setArtPObjects] = useState([]);
    const [objectsPId, setObjectsPId] = useState([]);
    const [isPLoaded, setPLoaded] = useState(false);
    
    


    let count = 0;
   
    

    const debounceFetch = debounce( ()=>  getMuseumArtObjectId(),550);
    
    
    // art object
    const getMuseumArtObject = useCallback(
        async () => {
        
       
        if (objectsId !== null) {
            
                objectsId.slice(600, 605).forEach(id => {
                    
                        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
                        .then(response => response.json())
                        .then((result)=>{
                        
                        let res = !isInArray(artObjects, result)
                        ;

                        
                        if (res) {
                                                
                            setArtObjects(artObjects => [...artObjects, result])
                                                
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

       
       
       },[objectsId]
    )

 
    
    const getMuseumArtObjectId = 
        async ( ) => {
        
            await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`,requestOptions)
            .then(response => response.json())
            .then( (result) => {
             
                setObjectsId(result["objectIDs"]);
                if (!isLoaded) {
            
                    getMuseumArtObject();
                }
               
            })

            .catch((error) => {
                console.log('error', error)
            })


            getArtObjectList(artObjects)
            if (artObjects.length >= 10 && artObjects.length< 15 ) {
            
                setLoaded(true)
            
            }
    }
    
    const launchArtFetch = useCallback( () =>{
        getMuseumArtObjectId();
        
        
    },[objectsId])

    useEffect(() => {
        launchArtFetch()
        
        
    
    }, [isLoaded, launchArtFetch])
    
    
   
    var uniqueQu = [...new Set(artQObjects)];
    const uniqueArtObject = [...new Set(artObjects.map(obj =>
        
        obj))];
      
   
        return (
            <section className="section-padding" id="section_3">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2>Popular</h2>
                    </div>
                                     
                    {
                      
                        searchData==='' && isLoaded && 
                        uniqueArtObject.map(data => 

                            <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

                        )
       
                    }
                    {
                        searchData==='' && isPLoaded && artPObjects.map(data => 

                            <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}object = {data}></Card>

                            )
                    }

                    {
                        
                        isQLoaded && uniqueQu.length !== 0 && 
                        uniqueQu.map(data => 

                            <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]} object = {data}></Card>

                        )
                       
                    }
                   
                    
                    {
                    !isLoaded  &&
                    
                    <div className="text-center">
                        <div className="custom-block-wrap">

                            <img src={gif} alt="waiting" width="5px" height={50}  className="custom-block-image-waiting img-fluid" />
                    
                        </div>
                        <p className='h3'>We are getting for you the most beautiful arts object of our librairies</p>
                    </div>
                   
                   
                    }    
                     {

                        !isQLoaded && artQObjects.length === 0  &&
                    
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