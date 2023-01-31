
import React, { useContext, useEffect, useState, useCallback } from 'react';
import {debounce} from 'lodash'; 
import gif from '../../../img/loading.gif'
import { searchContext } from '../../../App';
import Card from './card';



const Views = (props) => {

    const {searchValue, artQObjects, getArtObjectList, updateSearch,isInArray} = useContext(searchContext);

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
   
    

    const debounceFetch = debounce( (requestOptions)=>  getMuseumArtObjectId(),550);
    // const debouncePFetch = debounce( (requestOptions)=>  getMuseumArtPObjectId(),550);
    // const debounceFetchQuery = debounce( (requestOptions)=> getMuseumArtObjectIdWithQuery( requestOptions),550);
    // const debounceFetchArt = debounce( (objectsId,requestOptions)=>  getMuseumArtObject( objectsId,requestOptions),130);
    
    
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
            const data= objectsId.slice(600, 605);
        
        if (data !== null) {
           
            data.forEach(id => {
               
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
        if (artObjects.length ===3 ) {
            count = 0;
             setLoaded(true);
            //  setQLoaded(false);
            //  getArtObjectList([]);
             getArtObjectList(artObjects);
            //  setSearch('');
        }
        },
        

      [artObjects]
    )

    useEffect(() => {
        if ( objectsId.length === 0) {
             debounceFetch()
        }
    
    }, [debounceFetch, objectsId])
    
    // art object
    useEffect(() => {
           if (!isLoaded ) {
            getMuseumArtObject( objectsId,requestOptions)
           
        }
     
    }, [getMuseumArtObject, isLoaded, objectsId, requestOptions])
   
    var unique = [...new Set(artQObjects)];
    
    // // highLight
    // const getMuseumArtPObjectId = useCallback(
    //     async ( requestOptions) => {
        
    //         await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true`,requestOptions)
    //         .then(response => response.json())
    //         .then( (result) => {
             
    //             setObjectsPId(result["objectIDs"]);

                
    //         })

    //         .catch((error) => {
    //             console.log('error', error)
    //         })
    // },
    //   []
    // )
    
    
    // const getMuseumArtPObject = useCallback(
    //      (objectsPId , requestOptions) => {
    //         const data= objectsPId.slice(600, 605);
        
    //     if (data !== null) {
           
    //         data.forEach(id => {
               
    //              fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
    //              .then(response => response.json())
    //              .then((result)=>{
                  
    //                 let res = !isInArray(artPObjects, result)
    //                ;
    //                if (res) {
    //                    // let uniq = [...new Set([...artObjects, result])];
                       
    //                    setArtObjects([...artPObjects, result])
    //                    dataToDisplay.push(result);
    //                    console.log('============dsp========================');
    //                    console.log(dataToDisplay);
    //                    console.log('====================================');
                      
    //                 }
                  
                       
    //              }).catch((error)=>{
    //                  console.log('====================================');
    //                  console.log("cant get an object with his id");
    //                  console.log('====================================');
    //              }).finally(()=>{
 
    //               return true;
    //              })
    //        });
            
            
    //     }
    //     if (artPObjects.length ===3 ) {
    //         count = 0;
    //          setPLoaded(true);
    //         //  setQLoaded(false);
    //         //  getArtObjectList([]);
    //          getArtObjectList(artPObjects);
    //         //  setSearch('');
    //     }
    //     },
        

    //   [artPObjects]
    // )

    // useEffect(() => {
    //     if ( objectsPId.length === 0) {
    //          debouncePFetch()
    //     }
    
    // }, [debouncePFetch, objectsPId])
    
    // art object
    // useEffect(() => {
    //        if (!isPLoaded ) {
    //         getMuseumArtPObject( objectsPId,requestOptions)
           
    //     }
     
    // }, [getMuseumArtObject,isPLoaded, isLoaded, objectsPId, requestOptions])

    // search

    
       
     

    

   
        return (
            <section className="section-padding" id="section_3">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2>Popular</h2>
                    </div>
                                     
                    {
                      
                        searchData==='' && isLoaded && 
                       artObjects.map(data => 

                            <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

                        )
       
                    }
                    {
                        searchData==='' && isPLoaded && artPObjects.map(data => 

                            <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

                            )
                    }

                    {
                        
                        unique.length !== 0 && 
                        unique.map(data => 

                            <Card  key= {data["objectID"]} id={count++} img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

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

                   searchData !=='' && artQObjects.length === 0  &&
                    
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