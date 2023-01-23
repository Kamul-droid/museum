
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Card from './card';
class Home extends Component {
    constructor(props){
        super(props)
        this.artObjects = [];
        this.IDs =[];
        this.hasId = false;
        this.requestOptions={
            method:'GET',
            redirect:'follow'
        };
        this.state ={
            data:[]
        }
        
    
    }

     // eslint-disable-next-line no-undef
    getMuseumArtObjectIDsApi = async () => {
        // const searchValue = $(".search-box").val();
        
           await  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`, this.requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(JSON.parse(result));
                let data = JSON.parse(result);
                this.IDs = data['objectIDs'];
                if (this.IDs) {
                    console.log('ifs true');
                    this.hasId = true;
                }
                if (this.hasId) {
                    this.hasId =false;
                   this.getMuseumArtObjectApi();
                    console.log(this.artObjects);
                    this.setState({
                        data: this.artObjects
                    })
                }
               
            })
            .catch((error) => {
                console.log('error', error)
            }).finally(()=>{

                return true;
            });
    }


    
     getMuseumArtObjectApi = async ()=>{

        console.log('ids',this.IDs);
                let extract = this.IDs.slice(45734,45764);
               

                if (extract !== null) {
                    extract.map(id => 
                        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,this.requestOptions)
                        .then(response => response.text())
                        .then((result)=>{
                            // console.log(JSON.parse(result));
                            let object = JSON.parse(result);
                            // console.log(object,'object');
                            this.artObjects.push(object);
                        // console.log(this.artObjects,"tab");
                        
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
   
    getData =()=>{
        this.getMuseumArtObjectIDsApi();
    }
    
   
   

    render(){

   
        return (
            <section className="section-padding" id="section_3">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2>Popular</h2>
                    </div>
                  
                    { console.log('====================================')}
                    {console.log(this.state.data)}
                    { console.log('====================================')
}
                    {
                       
                        this.hasId ?
                        this.state.data.map(data => 
                            <Card img={data["primaryImage"]} title ={data["title"]} credit={data["creditLine"]}></Card>

                        ) 
                    
                    : <p>No furniture to show</p>
                    } 


                </div>
            </div>
        </section>


        );
    }
};

export default Home;