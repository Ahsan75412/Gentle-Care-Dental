import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img, description,rate } = expert;
    return (
        
            <div className='g-5 col-sm-12 col-md-6 col-lg-4 mt-3'>
                <div className="card">
                    <img src={img} className="card-img-top special" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"> 

                            Rating:{rate}
                        
                            <i class="fa-solid fa-star style"></i>
                            <i class="fa-solid fa-star style"></i>
                            <i class="fa-solid fa-star style"></i>
                            <i class="fa-solid fa-star style"></i>
                            <i class="fa-solid fa-star-half-stroke style"></i>

                            </p>
                        
                    </div>
                </div>
            </div>
        
    );
};

export default Expert;