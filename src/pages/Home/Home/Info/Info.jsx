import React from 'react';
import tracking from '../../../../assets/live-tracking.png'
import safe_delivery from '../../../../assets/safe-delivery.png';

const Info = () => {
    return (
        <section className='max-w-6xl mx-auto flex flex-col gap-5'>
            {/* card 1 */}
            <div className='flex items-center gap-10 bg-white p-8 rounded-xl'>
                <div className='border-r-2 border-dotted pr-8'>
                    <img src={tracking} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-secondary text-xl font-bold'>Live Parcel Tracking</h3>
                    <p>
                        Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                    </p>
                </div>
            </div>
            {/* card 2 */}
            <div className='flex items-center gap-10 bg-white p-8 rounded-xl'>
                <div className='border-r-2 border-dotted pr-8'>
                    <img src={safe_delivery} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-secondary text-xl font-bold'>100% Safe Delivery</h3>
                    <p>
                        We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                    </p>
                </div>
            </div>
            {/* card 3 */}
            <div className='flex items-center gap-10 bg-white p-8 rounded-xl'>
                <div className='border-r-2 border-dotted pr-8'>
                    <img src={safe_delivery} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-secondary text-xl font-bold'>24/7 Call Center Support</h3>
                    <p>
                       Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Info;