import React from 'react';
import  { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return (
        <div  id="experts" className='container'>
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}      
                ></Expert>)
            }
            
        </div>
    );
};

export default Experts;