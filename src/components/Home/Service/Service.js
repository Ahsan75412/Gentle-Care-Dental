import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service g-5 col-sm-12 col-md-6 col-lg-4 mt-3' >
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <button className='btn btn-primary'>Visit</button>
                </div>
            </div>
        </div>

    );
};

export default Service;