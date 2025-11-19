import React from 'react';
import merchant from '../../../../assets/merchant_bg.png';

const Merchant = () => {
    return (
        <section className='max-w-6xl mx-auto bg-cover bg-center h-[400px] flex items-center rounded-2xl' style={{ backgroundImage: `url(${merchant})` }}>
            <div className='flex flex-col gap-5 p-10'>
                <h1 className='text-white font-bold text-3xl'>
                    Merchant and Customer Satisfaction <br /> is Our First Priority
                </h1>
                <p className='text-gray-300 text-sm'>
                    We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.
                </p>
                <div className='flex gap-4'>
                    <button className='btn btn-primary text-secondary text-bold text-lg rounded-2xl p-5'>Become a Merchant</button>
                    <button className='btn bg-secondary text-primary rounded-2xl p-5'>Earn with ZapShift Courier</button>
                </div>
            </div>
        </section>
    );
};

export default Merchant;