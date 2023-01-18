import { data } from 'jquery';
import React from 'react';
import Card from './card';
const card1 = () => {

    const artObjects = [];
       let IDs=[];
       let hasId = false;
      let  requestOptions={
            method:'GET',
            redirect:'follow'
        };
    // eslint-disable-next-line no-undef
    let getMuseumArtObjectIDsApi = () => {
        // const searchValue = $(".search-box").val();
        
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`,requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(JSON.parse(result));
                let data = JSON.parse(result);
                IDs = data['objectIDs'];
                if (IDs) {
                    console.log('ifs true');
                    hasId = true;
                }
                if (hasId) {
                    hasId =false;
                    getMuseumArtObjectApi();
                    console.log(artObjects,'mes objets');
                    
                }
               
            })
            .catch((error) => {
                console.log('error', error)
            }).finally(()=>{

                return true;
            });
    }


    
   let  getMuseumArtObjectApi =()=>{

        console.log('ids',IDs);
                let extract = IDs.slice(45734,45764);
               

                if (extract !== null) {
                    extract.map(id => 
                        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,requestOptions)
                        .then(response => response.text())
                        .then((result)=>{
                            // console.log(JSON.parse(result));
                            let object = JSON.parse(result);
                            // console.log(object,'object');
                        let show =  document.getElementById('test');
                        show.innerHTML = <p>{ JSON.stringify( object)}</p>
                            artObjects.push(object);
                        // console.log(artObjects,"tab");
                        }).catch((error)=>{
                            console.log('error',error);
                        }).finally(()=>{
                            return true;
                        })
                    )
                    
                } else {
                    console.log('no id');
                }
                // console.log(artObjects);
                return true;
    }

    getMuseumArtObjectIDsApi();
    

    

   
        return (
            <section className="section-padding" id="section_3">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2>Popular</h2>
                    </div>
                  
                    
                    {
                        

                        hasId ?()=>
                       { artObjects.map(data => 

                            <Card img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

                        );
                        }
                    
                    : <p>No furniture to show</p>

                    
                    }
                     


                </div>
                <div id='test'>

                </div>
            </div>
        </section>


        );
    
};

export default card1;