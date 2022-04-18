import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const {id, name, img, description, price } = service;
    const navigate = useNavigate();
    const nevigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
}
    return (
        <div className='service g-5 col-sm-12 col-md-6 col-lg-4 mt-3' >
            <div className="card " >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h5 className="card-text">Price: ${price}</h5>
                    <button onClick={() => nevigateToServiceDetail(id)}  className='btn  btn-success'>Buy Service {id}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;