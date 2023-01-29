import React from 'react';
import sideChair from '../../img/side-chair.jpg'
import diningRoom from '../../img/dining-room.jpg'
import fourteen from '../../img/fourteen.jpg'

const LandingPage = () => {
    return (
        <main>

            <section className="hero-section hero-section-full-height">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-12 col-12 p-0">
                            <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={sideChair} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h5>Side chair</h5>
                                            
                                            <p>Gift of The Museum of the City of New York, 2008</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={diningRoom} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h5>Dining room from Lansdowne House</h5>
                                            
                                            <p>European Sculpture and Decorative Arts</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={fourteen} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h5>The Little Fourteen-Year-Old Dancer</h5>
                                            
                                            <p> European Sculpture and Decorative Arts</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
         </main>

    );
};

export default LandingPage;