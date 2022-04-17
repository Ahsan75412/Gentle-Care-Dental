import React from 'react';
import { Link ,useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const {serviceId} = useParams();
    return (
        <div>
            <h2>You Have To Pay For Services {serviceId}</h2>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className="btn btn-primary">Check Out</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;