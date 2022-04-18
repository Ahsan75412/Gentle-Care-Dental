import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div class="card card-style mt-5" id='blogs'>

                <div class="card-body">
                    <h5 class="card-title">
                        Difference between authentication and authorization:</h5>

                    <p class="card-text">lets think of an employee of an organization. The person should have an id and password to enter the       organization. If he have the right id and password then he can enter the organization. it is called authentication.
                        and to determine which employye have the access for which floor is called authorization.

                        Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                    </p>


                </div>
            </div>




            <div class="card mt-5 card-style" id='blogs'>

                <div class="card-body">
                    <h5 class="card-title">
                        Why are you using firebase? What other options do you have to implement authentication?</h5>

                    <p class="card-text"> It gives me real time sync and firebase is easy to setup. authentication using email and password, phone number, google, facebook, apple id and many more. it collects user information and store in the firebase database. it also have the cloud messaging service.
                        <br />
                        Usually, authentication using email and password is common, bt we can also use cards, retina scans, voice recognition, face recognition, fingerprint etc

                    </p>


                </div>
            </div>





            <div class="card mt-5 card-style" id='blogs'>

                <div class="card-body">
                    <h5 class="card-title">
                        What other services does firebase provide other than authentication?</h5>

                    <p class="card-text">There are many services that firebase provides us:
                        <br />

                        <li>1. cloud firestone</li>
                        <li>2. cloud functions</li>
                        <li>3. Hosting</li>
                        <li>4. cloud storage</li>
                        <li> 5. Google analytics</li>
                        <li>6. Predictions</li>
                        <li>7. cloud messaging</li>
                        <li> 8. Dynamic links</li>
                        <li>9. Remote config</li>


                    </p>


                </div>

            </div>

            <a href="/home" className="btn btn-lg btn-success mt-3">Go Home</a>

        </div>
    );
};

export default Blogs;