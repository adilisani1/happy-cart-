import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hero.css'
import heroImgOne from '/assets/images/hero-section-img-one.png'
import heroImgTwo from '/assets/images/hero-section-img-four.webp';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        // slidesToScroll: 1
    };
    return (
        //     
        <Slider {...settings}>
            <section className=" text-black px-2.5 ">
                <div className="hero-card grid max-w-screen-2xl md:mt-[90px] mt-[20px] rounded-xl  px-10 pb-12 pt-5  sm:px-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-8 lg:order-none order-1 md:text-left text-center ">
                        <h1 className="md:max-w-2xl   mb-4 md:mb-2 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Payments tool for software companies
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                        </p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-3 py-3 sm:px-5 sm:py-3 text-[15x] sm:text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div className="lg:mt-0 lg:col-span-4 lg:flex md:mb-0 mb-5 mx-auto">
                        <img className='sm:max-w-[365px] md:max-w-[300px] max-w-[230px] w-full  md:h-[500px]  object-cover' src={heroImgOne} alt="mockup" />
                    </div>
                </div>
            </section>
            <section className=" text-black px-2.5">
                <div className="hero-card grid  max-w-screen-2xl  md:mt-[90px] mt-[20px]  rounded-xl bg-slate-200   px-10 pb-12 pt-5 md:px-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-8 lg:order-none order-1 md:text-left text-center ">
                        <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Payments tool for software companies
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                        </p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-[15px] sm:text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-3 py-3 sm:px-5 sm:py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div className="lg:mt-0  lg:col-span-4 lg:flex md:mb-0 mb-10 mx-auto ">
                        <img className=' sm:max-w-[365px] md:max-w-[300px] max-w-[230px] w-full md:h-[450px] object-cover' src={heroImgTwo} alt="mockup" />
                    </div>
                </div>
            </section>

        </Slider>
    )
}
export default Hero;