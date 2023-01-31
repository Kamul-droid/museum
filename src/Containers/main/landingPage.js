import React from 'react';
import sideChair from '../../img/side-chair.jpg'
import diningRoom from '../../img/dining-room.jpg'
import fourteen from '../../img/fourteen.jpg'

const LandingPage = () => {
    return (
        <main data-testid ='landing-page'>

            <section className="hero-section hero-section-full-height">
                <div data-testid ='landing-page-container'className="container-fluid">
                    <div className="row">

                        <div className="col-lg-12 col-12 p-0">
                            <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img  data-testid ='chair-image' src={sideChair} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h5 data-testid ='chair-title'>Side chair</h5>
                                            
                                            <p data-testid ='chair-description'>Gift of The Museum of the City of New York, 2008</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img data-testid ='dining-room-image' src={diningRoom} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h5 data-testid ='dining-room-title'>Dining room from Lansdowne House</h5>
                                            
                                            <p data-testid ='dining-room-description'>European Sculpture and Decorative Arts</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img data-testid ='dancer-image' src={fourteen} className="carousel-image img-fluid" alt="..."/>
                                        
                                        <div className="carousel-caption d-flex flex-column justify-content-end">
                                            <h5 data-testid ='dancer-title'>The Little Fourteen-Year-Old Dancer</h5>
                                            
                                            <p data-testid ='dancer-description'>European Sculpture and Decorative Arts</p>
                                        </div>
                                    </div>
                                </div>

                                <button data-testid ='previous-btn' className="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button data-testid ='next-btn' className="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
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