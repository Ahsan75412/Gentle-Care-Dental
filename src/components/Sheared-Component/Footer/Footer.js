import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer >

            <div className='text-center mt-5 px-5'>
                <p><small>Copyright  &copy; {year} Gentle Care All rights reserved</small></p>
            </div>

        </footer>
    );
};

export default Footer;