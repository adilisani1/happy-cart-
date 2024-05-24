import React, { useContext } from 'react';
import './About.css';
import TopImage from '/assets/images/girl-with-vr.png';
import SectionTwoImage from '/assets/images/girl-wear-vr.png';

const About = () => {

    return (
        <div>
            {/* Section 1 */}

            <div className="top">
                <div className="left">
                    <h1>About Us</h1>
                    <p className='left-text'>Home {">"} <span>About-us</span></p>
                </div>
                <div className="right">
                    <img className="top-image" src={TopImage} />
                </div>
            </div>


            {/* Section 2 */}
            <div className="two container mx-auto">
                <div className="left">
                    <img src={SectionTwoImage} />
                </div>
                <div className="right">
                    <h1>Who We Are</h1>
                    <p>Our company is a leading provider of virtual reality technology. We are dedicated to providing the best virtual reality experience to our customers. Our team of experts is constantly working to improve our products and services. We are committed to providing the best virtual reality experience to our customers. Our team of experts is constantly working to improve our products and services.</p>
                </div>
            </div>


            {/* Section 3 */}
        </div >

    )
}

export default About