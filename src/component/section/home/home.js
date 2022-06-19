import React from "react";
import { useSelector } from "react-redux";

import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
// import { GiCat } from "react-icons/gi"
// import { FaCat } from "react-icons/fa"


import "./home.scss";

const Home = () => {

    const about = useSelector(state => state.about.about[1]);

    return (
        <section className="section_home show-on-scroll" id="home" >
            <div className="section_home__content">

                <div className="contain banner">
                    <div className="contain_avatar">
                        <img src="/background.jpg" alt="avatar" />
                    </div>
                    <div className="banner__text">
                        <h1>{about.firstName} {about.lastName}</h1>
                        <h2>@noccnocc</h2>
                        <div className="strikethrough"></div>
                        <div className="social list-icon">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/nocnocneeee" target="blank">
                                        <FaFacebookF fill="#fdcb6e" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/_noccnoccbet_/" target="blank">
                                        <AiFillInstagram fill="#fdcb6e" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;