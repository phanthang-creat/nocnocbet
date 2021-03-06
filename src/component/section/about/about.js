import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GiCat } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";

import {
    FaCat,
    FaChess,
    FaCode,
    FaCoffee,
    FaGamepad,
    FaHeadphones,
} from "react-icons/fa";

import "./about.scss";
import { Container } from "reactstrap";
import { setModal } from "../../../redux/reducer/modal";

const About = () => {
    const about = useSelector((state) => state.about.about[1]);

    const dispatch = useDispatch();

    const setShow = (status, type) => {
        const payload = {
            status: status,
            type: type,
        };
        dispatch(setModal(payload));
    };

    return (
        <section className="section_about" id="about">
            {/* <div className="screen-shadow"></div> */}
            <Container>
                <div className="section_about__content">
                    <div className="title">
                        <div className="hi-img">
                            <img src="./hi.png" alt="" />
                        </div>
                        <h1>About Me</h1>
                        <div className="strikethrough" style={{ width: "15%" }}></div>
                        <div className="strikethrough" style={{ width: "11%" }}></div>
                    </div>
                    <div className="quote">
                        <p>Tình yêu có gì?</p>
                        <p>Có hai con mèo ngồi bên cửa sổ</p>
                        <p>Một con ngồi yên một con đổi chỗ...</p>
                        <div className="cat list-icon">
                            <ul>
                                <li>
                                    <FaCat fill="#fdcb6e" />
                                </li>
                                <li>
                                    <GiCat fill="#fdcb6e" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row details">
                        <div className="col-lg-6 details">
                            <div className="title">
                                <h2>Personal Details</h2>
                            </div>
                            <ul>
                                <li>
                                    <strong>BirthDay</strong>
                                    <span>{about.bd}</span>
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
                                    <span>
                                        <a href="https://shopee.vn/tntnocnocshop" target="blank">
                                            My Shopee
                                        </a>
                                    </span>
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
                                    <li
                                        className="interest_item"
                                        onClick={() => setShow(true, "game")}
                                    >
                                        <p>
                                            <FaGamepad />
                                            <span>Game</span>
                                        </p>
                                    </li>
                                    <li
                                        className="interest_item"
                                        onClick={() => setShow(true, "music")}
                                    >
                                        <p>
                                            <FaHeadphones />
                                            <span>Music</span>
                                        </p>
                                    </li>
                                    <li
                                        className="interest_item"
                                        onClick={() => setShow(true, "travel")}
                                    >
                                        <p>
                                            <ImAirplane />
                                            <span>Travel</span>
                                        </p>
                                    </li>
                                    <li
                                        className="interest_item"
                                        onClick={() => setShow(true, "coffee")}
                                    >
                                        <p>
                                            <FaCoffee />
                                            <span>Coffee</span>
                                        </p>
                                    </li>
                                    <li
                                        className="interest_item"
                                        onClick={() => setShow(true, "chess")}
                                    >
                                        <p>
                                            <FaChess />
                                            <span>Chess</span>
                                        </p>
                                    </li>
                                    <li
                                        className="interest_item"
                                        onClick={() => setShow(true, "code")}
                                    >
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

export default About;
