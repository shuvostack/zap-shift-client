import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

const HowItWorks = () => {
    return (
        <div className='my-16'>
            <h3 className='text-secondary text-center text-2xl font-bold mb-8'>How it Works</h3>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* card */}
                <div className='bg-white w-65 flex flex-col gap-3 p-8 rounded-xl'>
                    <div className='text-secondary'>
                        <TbTruckDelivery size={40} />
                    </div>
                    <h3 className='text-secondary font-bold'>Booking Pick & Drop</h3>
                    <p className='text-gray-600'>
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                <div className='bg-white w-65 flex flex-col gap-3 p-8 rounded-xl'>
                    <div className='text-secondary'>
                        <TbTruckDelivery size={40} />
                    </div>
                    <h3 className='text-secondary font-bold'>Cash On Delivery</h3>
                    <p className='text-gray-600'>
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                <div className='bg-white w-65 flex flex-col gap-3 p-8 rounded-xl'>
                    <div className='text-secondary'>
                        <TbTruckDelivery size={40} />
                    </div>
                    <h3 className='text-secondary font-bold'>Delivery Hub</h3>
                    <p className='text-gray-600'>
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                <div className='bg-white w-65 flex flex-col gap-3 p-8 rounded-xl'>
                    <div className='text-secondary'>
                        <TbTruckDelivery size={40} />
                    </div>
                    <h3 className='text-secondary font-bold'>Booking SME & Corporate</h3>
                    <p className='text-gray-600'>
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;