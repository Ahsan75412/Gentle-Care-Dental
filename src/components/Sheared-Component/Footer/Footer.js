import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 px-5'>
            <p className='bg-light'><small>&copy;All rights reserved {year}</small></p>
        </footer>
    );
};

export default Footer;