import React from "react";
import { useSelector } from "react-redux";

import { GiSkills } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";

import { FaChess, FaCode, FaCoffee, FaGamepad, FaHeadphones } from "react-icons/fa";

import "./skill.scss";
import { Container } from "reactstrap";

const Skill = () => {
    const about = useSelector((state) => state.about.about[1]);

    return (
        <section className="section_about" id="skill">
            {/* <div className="screen-shadow"></div> */}
            <Container>
                <div className="section_about__content">
                    <div className="title">
                        <div className="hi-img skill">
                            <GiSkills fill="#fdcb6e" />
                        </div>
                        <h1>Skill</h1>
                        <div className="strikethrough" style={{ width: "15%" }}></div>
                        <div className="strikethrough" style={{ width: "11%" }}></div>
                    </div>
                    <div className="row details">
                        <div className="col-lg-6 details">
                            <div className="title">
                                <h2>Technical Skills</h2>
                            </div>
                            <ul>
                                <li>
                                    <strong>Computer</strong>
                                    <span>Word, Excel, Powerpoint</span>
                                </li>
                                <li>
                                    <strong>Phone</strong>
                                    <span>{about.phone}</span>
                                </li>
                                <li>
                                    <strong>Email</strong>
                                    <span>{about.email}</span>
                                </li>
                                <li>
                                    <strong>Shopee</strong>
                                    <span>{about.shoppe}</span>
                                </li>
                                <li>
                                    <strong>Address</strong>
                                    <span>{about.address}</span>
                                </li>
                                <li>
                                    <strong>Job</strong>
                                    <span>{about.job}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="title details">
                                <h2>My Interest</h2>
                            </div>
                            <div className="interest">
                                <ul>
                                    <li className="interest_item">
                                        <p>
                                            <FaGamepad />
                                            <span>Game</span>
                                        </p>
                                    </li>
                                    <li className="interest_item">
                                        <p>
                                            <FaHeadphones />
                                            <span>Music</span>
                                        </p>
                                    </li>
                                    <li className="interest_item">
                                        <p>
                                            <ImAirplane />
                                            <span>Travel</span>
                                        </p>
                                    </li>
                                    <li className="interest_item">
                                        <p>
                                            <FaCoffee />
                                            <span>Coffee</span>
                                        </p>
                                    </li>
                                    <li className="interest_item">
                                        <p>
                                            <FaChess />
                                            <span>Chess</span>
                                        </p>
                                    </li>
                                    <li className="interest_item">
                                        <p>
                                            <FaCode />
                                            <span>Code</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skill;
