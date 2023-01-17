import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const artObjects = [];
    let IDs =[];
    let hasId = false;
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

     // eslint-disable-next-line no-undef
     let getMuseumArtObjectIDsApi = () => {
        // const searchValue = $(".search-box").val();
        
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`, requestOptions)
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
                    console.log(artObjects);
                    
                }
               
            })
            .catch((error) => {
                console.log('error', error)
            }).finally(()=>{

                return true;
            });
    }


    
    let getMuseumArtObjectApi =()=>{

        console.log('ids',IDs);
                let extract = IDs.slice(45734,45764);
               

                if (extract !== null) {
                    extract.map(id => 
                        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}?isHighlight=true`,requestOptions)
                        .then(response => response.text())
                        .then((result)=>{
                            // console.log(JSON.parse(result));
                            let object = JSON.parse(result);
                            console.log(object,'object');
                            artObjects.push(object);
                            // console.log(artObjects);
                        }).catch((error)=>{
                            console.log('error',error);
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
                    artObjects.map(data => 
                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="custom-block-wrap">
                                <img src={data["primaryImage"]} className="custom-block-image img-fluid" alt=""/>

                                <div className="custom-block">
                                    <div className="custom-block-body">
                                        <h5 className="mb-3">data["title"]</h5>

                                        <p>data["creditLine"]</p>

                                        

                            
                                    </div>

                                    <Link to="donate.html" className="custom-btn btn">Details</Link>
                                </div>
                            </div>
                        </div>

                    )
                }

                <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block-wrap">
                        <img src="images/causes/poor-child-landfill-looks-forward-with-hope.jpg" className="custom-block-image img-fluid" alt=""/>

                        <div className="custom-block">
                            <div className="custom-block-body">
                                <h5 className="mb-3">Poverty Development</h5>

                                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor</p>

                                <div className="progress mt-4">
                                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="d-flex align-items-center my-2">
                                    <p className="mb-0">
                                        <strong>Raised:</strong>
                                        $27,600
                                    </p>

                                    <p className="ms-auto mb-0">
                                        <strong>Goal:</strong>
                                        $60,000
                                    </p>
                                </div>
                            </div>

                            <Link to="donate.html" className="custom-btn btn">Donate now</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block-wrap">
                        <img src="images/causes/african-woman-pouring-water-recipient-outdoors.jpg" className="custom-block-image img-fluid" alt=""/>

                        <div className="custom-block">
                            <div className="custom-block-body">
                                <h5 className="mb-3">Supply drinking water</h5>

                                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>

                                <div className="progress mt-4">
                                    <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="d-flex align-items-center my-2">
                                    <p className="mb-0">
                                        <strong>Raised:</strong>
                                        $84,600
                                    </p>

                                    <p className="ms-auto mb-0">
                                        <strong>Goal:</strong>
                                        $100,000
                                    </p>
                                </div>
                            </div>

                            <Link to="donate.html" className="custom-btn btn">Donate now</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    );
};

export default Home;