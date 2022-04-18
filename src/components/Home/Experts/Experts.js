import React from 'react';
import { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return (
        <div id="review" className='container'>
            
                <h1 className='services-title mt-5'>Reviews</h1>
                <div className="row">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }

                </div>


            </div>
        
    );
};

export default Experts;