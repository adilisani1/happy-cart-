import React from 'react'
import './home.css';
import Hero from '../../components/hero/Hero';

const Home = () => {
    return (
        <div className='shade-parent'>
            <div className='shade'>
                <Hero />
            </div>
        </div>
    )
}

export default Home;