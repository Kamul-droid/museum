
import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header data-testid ='header'className="site-header">
            <div data-testid ='container-header'className="container">
                <div className="row">
                    
                    <div data-testid ='contact-container'className="col-lg-8 col-12 d-flex flex-wrap">
                        <p data-testid ='address-text'className="d-flex me-4 mb-0">
                            <i className="bi-geo-alt me-2"></i>
                            The Metropolitan Museum of Art 20, 0150 Paris, France
                        </p>

                        <p data-testid ='mail-text'className="d-flex mb-0">
                            <i className="bi-envelope me-2"></i>

                            <Link to="mailto:kamulnassoma@gmail.com">
                                metro-museum-of-art@free.com
                            </Link>
                        </p>
                    </div>

                    <div data-testid ='follow-container'className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                        <ul data-testid ='list-display'className="social-icon">
                            <li data-testid ='twitter-item' className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-twitter"></Link>
                            </li>

                            <li data-testid ='facebook-item' className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-facebook"></Link>
                            </li>

                            <li data-testid ='instagram-item' className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-instagram"></Link>
                            </li>

                            <li data-testid ='youtube-item' className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-youtube"></Link>
                            </li>

                            <li data-testid ='whatsapp-item' className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-whatsapp"></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>

    );
};

export default header;