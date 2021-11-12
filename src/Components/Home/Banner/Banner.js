import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="banner"
                    src="https://www.mysmartchoice.org/wp-content/uploads/2019/06/Best-Blender-for-Ice-and-Frozen-Fruit-image.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner"
                    src="https://www.eatthis.com/wp-content/uploads/sites/4/2018/11/big-fruit-belnder.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner"
                    src="https://www.yummytoddlerfood.com/wp-content/uploads/2021/04/toddler-smoothies-in-mason-jars.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner"
                    src="https://c1.wallpaperflare.com/preview/396/558/410/vegetable-juices-vegetables-secluded-white.jpg"
                    alt="Four slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="banner"
                    src="https://assets.epicurious.com/photos/5d8513512774000008620f54/16:9/w_2560%2Cc_limit/Nutribullet_HERO_IG_v1_091819_1112.jpg"
                    alt="Five slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;