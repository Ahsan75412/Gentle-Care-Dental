import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found text-center">
            
            <h1 className="not-found-title fw-bold">404</h1>
            <h1 className="fw-bold">OPSS! PAGE NOT FOUND</h1>
            <h4>Sorry, the page you're looking for doesn't exist. If you think <br />
            something is broken, report a problem.</h4>
            <br />
            <Link to="/" className="mx-4"><button className="btn btn-regular px-3">RETURN HOME</button></Link>
            <Link to="/contact"><button className="btn btn-regular">Report Problem</button></Link>
        </div>
    );
};

export default NotFound;