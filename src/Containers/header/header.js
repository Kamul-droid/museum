
import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 col-12 d-flex flex-wrap">
                        <p className="d-flex me-4 mb-0">
                            <i className="bi-geo-alt me-2"></i>
                            The Metropolitan Museum of Art 20, 0150 Paris, France
                        </p>

                        <p className="d-flex mb-0">
                            <i className="bi-envelope me-2"></i>

                            <Link to="mailto:kamulnassoma@gmail.com">
                                metro-museum-of-art@free.com
                            </Link>
                        </p>
                    </div>

                    <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                        <ul className="social-icon">
                            <li className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-twitter"></Link>
                            </li>

                            <li className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-facebook"></Link>
                            </li>

                            <li className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-instagram"></Link>
                            </li>

                            <li className="social-icon-item">
                                <Link to='/' className="social-icon-link bi-youtube"></Link>
                            </li>

                            <li className="social-icon-item">
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