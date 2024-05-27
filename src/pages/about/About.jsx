import React, { useContext } from 'react';
import './About.css';
import TopImage from '/assets/images/girl-with-vr.png';
import SectionTwoImage from '/assets/images/mobile.png';
import SectionThreeImage from '/assets/images/smart-fashion-img.png';

const About = () => {

    return (
        <div>
            {/* Section 1 */}
            <div className="top mb-20 ">
                <div className="left">
                    <h1>About Us</h1>
                    <p className='left-text'>Home {">"} <span>About-us</span></p>
                </div>
                <div className="right">
                    <img className="top-image" src={TopImage} />
                </div>
            </div>

            {/* Section 2 */}
            <div className="two container mb-20">
                <div className="left">
                    <img src={SectionTwoImage} />
                </div>
                <div className="right">
                    <h1 className='text-2xl mb-9 md:text-5xl w-8/12 leading-14'>We Craft Awesome With Great Expereince</h1>
                    <div className=' w-8/12'>
                        <p className='text-[17px] leading-8 mb-9 '>Our company is a leading provider of virtual reality technology. We are dedicated to providing the best virtual reality experience to our customers. Our team of experts is constantly working to improve our products and services. We are committed to providing the best virtual reality experience to our customers. Our team of experts is constantly working to improve our products and services.</p>
                    </div>
                    <button className=' bg-orange-500 px-12 py-3  border-none rounded-md '>View</button>
                </div>
            </div>


            {/* Section 3 */}
            <div className="three mb-20">
                <h1>Smart Fashion<br /><span className="orange">With Smart Devices</span></h1>
                <img src={SectionThreeImage} />
            </div>

            {/* Section 4 */}
            <div className="four mb-20">
                <h1>Our Team</h1>
                <div className="carddd">
                    {/* card1 */}
                    <div className="max-w-sm colorcard mt-10  rounded-lg shadow ">
                        <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1716575230~exp=1716578830~hmac=e3191286263e7e5c555660b9cde739ffff5af630573c4f07085092229659268d&w=1380" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Summer Ray</h5>
                            <p className="mb-3 font-normal text-white dark:text-gray-400">CEO </p>

                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="max-w-sm colorcard mt-10  rounded-lg shadow ">
                        <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1716575230~exp=1716578830~hmac=e3191286263e7e5c555660b9cde739ffff5af630573c4f07085092229659268d&w=1380" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Summer Ray</h5>
                            <p className="mb-3 font-normal text-white dark:text-gray-400">CEO </p>

                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="max-w-sm colorcard mt-10  rounded-lg shadow ">
                        <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1716575230~exp=1716578830~hmac=e3191286263e7e5c555660b9cde739ffff5af630573c4f07085092229659268d&w=1380" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Summer Ray</h5>
                            <p className="mb-3 font-normal text-white dark:text-gray-400">CEO </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default About