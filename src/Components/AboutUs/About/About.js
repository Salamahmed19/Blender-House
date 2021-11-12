import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div>
            <Container>
                <div className="d-flex row my-4">
                    <h3 className="text-center">History of Blender</h3>
                    <div className="col-md-6 about">
                        <img className="img-fluid p-2" src="https://cdn.shopify.com/s/files/1/1216/2612/files/various_blenders_to_choose_from.jpg" alt="" />
                    </div>
                    <div className="col-md-6 about">
                        <p className="h5">The blender was first invented by Stephen Poplawski, owner of Stevens Electric Company, in Racine, Wisconsin in 1922. He wanted a way to mix up drinks like malts and milk shakes, which had become popular at soda fountain restaurants. He had the idea to put a spinning blade at the bottom of a container, connected to a motor. Poplawski went on to receive patents in 1932 for a machine that would reduce fruits and vegetables to a liquid.</p>
                        <li>The blender would not have come into being without the invention of the small electric motor in 1910. The new motor, which was known as the fractional horsepower motor, made possible the invention of many appliances, including the blender.</li>
                        <li>Starting in the 1950s the blender became widely used in hospitals and labs. It was a vital scientific research tool for Dr. Jonas Salk. Dr. Salk used the blender with a particular attachment during the development of the lifesaving polio vaccine.</li>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;