import React, { useState } from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner4 from '../../../Images/Banner/banner4.jpg';
import banner2 from '../../../Images/Banner/banner2.jpg';
import banner3 from '../../../Images/Banner/banner3.jpg';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                    <img
                        height={500}
                        className="d-block w-100 "
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>What is the adjective of dentist?</h3>
                        <p>
                        Dentistlike, Resembling or characteristic of a dentist.
                        The dental clinic is a place where a dentist performs dental procedures and treatments on patients. Dental clinics can be found in hospitals, schools, government offices, and other health-related establishments
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                        className="d-block w-100 "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>What is a mouth specialist called?</h3>
                        <p>
                        An oral and maxillofacial surgeon is the oral health care provider who performs many types of surgical procedures in and about the entire face, mouth, and jaw area. 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                        className="d-block w-100 "
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Can a dentist refer you to a specialist?</h3>
                        <p>
                        Although, generally it would be a general dentist that would 'refer' a patient to a specialist, it is not uncommon that patients will sometimes locate a specialist themselves and approach him or her directly.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;