import React from 'react';
import img from '../../Images/personal/ahsan.jpg'
import './About.css';

const About = () => {
    return (
        <div>
            <h3 className='mt-5'>About Me</h3>

            <div class="card card-display">
                <div class="card-header card-design ">
                    <img src={img} alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title"> Md.Ahsan Habib</h5>
                    <p class="card-text sp-text">
                        Hey there, i am Ahsan Habib. Right now i am a junior developer. My goal is to be a senior web developer working for a multinational company. Or i might open my own company some day. Wish me luck. Thanks.

                        To achive my goal i am learning new things everyday. Practice 8 to 10 hours everyday sometimes more. And push myself farther everyday. Also developing my social skills as its an essential part for my  goal. Thanks to Jhankar Mahbub for motivate me in this journey.
                        
                        Programming Goals are statements of long-range intended outcomes of the program and the curriculum. They describe the knowledge, skills, and values expected of graduates and should be consistent with the mission of the program and the mission of the institution.</p>
                    <a href="/home" class="btn btn-success">Go Home</a>
                </div>
            </div>
        </div>
    );
};

export default About;