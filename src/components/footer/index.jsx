/**
 *  @version1 1.0.2
 *  @author Trejocode - Sergio
 *  @description Componente <Footer />
*/

import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => (

    <footer className="justify-center">
        <div className="container">
            <div className="row-responsive full align-center">
                <div className="full legend">
                    <p className="color-white font-small weight-medium">
                        2020® Boilerplate Brand
                    </p>
                </div>
                <div className="social full align-center">
                    <div className="align-center">
                        <a href = "https://www.facebook.com/trejocode">
                            <AiFillFacebook title = "Facebook de Trejocode" size = { 20 } className = "color-white" />
                        </a>
                    </div>
                    <div className="align-center">
                        <a href = "https://www.instragram.com/trejocode">
                            <AiFillInstagram title = "Instagram de trejocode" size = { 20 } className = "color-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;