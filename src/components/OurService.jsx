import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const OurService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-center mb-12  text-pink-500'>Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCart key={service.id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default OurService;