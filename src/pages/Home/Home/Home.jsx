import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from './OurServices/OurServices';
import Brands from './Brands/Brands';
import Info from './Info/Info';
import Merchant from './Merchant/Merchant';
import Reviews from '../Reviews/Reviews';
import FAQ from './FAQ/FAQ';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <section className='my-8'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <HowItWorks></HowItWorks>
            </div>
            <div>
                <OurServices></OurServices>
            </div>
            <div>
                <Brands></Brands>
            </div>
            <div className='max-w-6xl mx-auto text-secondary border border-dotted my-16'></div>
            <div>
                <Info></Info>
            </div>
            <div className='max-w-6xl mx-auto text-secondary border border-dotted my-16'></div>
            <div>
                <Merchant></Merchant>
            </div>
            <div>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </div>
            <div>
                <FAQ></FAQ>
            </div>
        </section>
    );
};

export default Home;