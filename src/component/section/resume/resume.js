import React from "react";
import { useSelector } from "react-redux";

import { } from "react-icons/gi";

import "./resume.scss";
import { Container } from "reactstrap";

const ReSume = () => {
    const about = useSelector((state) => state.about.about[0]);
    const experience = useSelector((state) => state.about.about[2]);
    console.log(experience);

    return (
        <section className="section_about section_resume">
            {/* <div className="screen-shadow"></div> */}
            <Container>
                <div className="section_about__content">
                    <div className="title">
                        <div className="hi-img">
                            <img src="./resume.png" alt="" />
                        </div>
                        <h1>My Resume</h1>
                        <div className="strikethrough" style={{ width: "15%" }}></div>
                        <div className="strikethrough" style={{ width: "11%" }}></div>
                    </div>
                    <div className="row details">
                        <div className="col-lg-6 details">
                            <div className="title section_resume__title">
                                <h2>Education</h2>
                            </div>
                            <div className="section_resume__education">
                                <div className="section_resume__education__item box">
                                    <h4>
                                        {about.a}
                                    </h4>
                                    <div className="year">
                                        2007-2012
                                    </div>
                                </div>
                                <div className="section_resume__education__item box">
                                    <h4>
                                        {about.b}
                                    </h4>
                                    <div className="year">
                                        2012-2016
                                    </div>
                                </div>
                                <div className="section_resume__education__item box">
                                    <h4>
                                        {about.c}
                                    </h4>
                                    <div className="year">
                                        2016-2019
                                    </div>
                                </div>
                                <div className="section_resume__education__item box">
                                    <h4>
                                        {about.d}
                                    </h4>
                                    <div className="year">
                                        2020
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="title details section_resume__title">
                                <h2>Work Experience</h2>
                            </div>
                            <div className="section_resume__experience">
                                <div className="section_resume__experience__item box">
                                    <h4>
                                        {experience.a}
                                    </h4>
                                    <div className="year">
                                        {experience.a1}
                                    </div>
                                </div>
                                <div className="section_resume__experience__item box">
                                    <h4>
                                        {experience.b}
                                    </h4>
                                    <div className="year">
                                        {experience.c1}
                                    </div>
                                </div>
                                <div className="section_resume__experience__item box">
                                    <h4>
                                        {experience.c}
                                    </h4>
                                    <div className="year">
                                        {experience.c1}
                                    </div>
                                </div>
                                <div className="section_resume__experience__item box">
                                    <h4>
                                        {experience.d}
                                    </h4>
                                    <div className="year">
                                        {experience.c1}
                                    </div>
                                </div>
                                <div className="section_resume__experience__item box">
                                    <h4>
                                        {experience.e}
                                    </h4>
                                    <div className="year">
                                        <a href={experience.e1} target="blank">{experience.e1}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ReSume;
