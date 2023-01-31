import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {img, title, credit, id} = props;

    return (
        <div data-testid = 'popular-object' className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block-wrap">
                <img data-testid = 'image-object' src={img} className="custom-block-image img-fluid" alt="" width={150} height={150}  />

                <div className="custom-block">
                    <div data-testid = 'title-object' className="custom-block-body">
                        <h5 className="mb-3">{title}</h5>

                        <p data-testid = 'credit-object'>{credit}</p>

                                                
                    </div>

                    <Link data-testid = 'details-object' to={"/details/"+id+"/true/"} className="custom-btn btn">Details</Link>
                </div>
            </div>
            
        </div>
    );
}

export default Card;