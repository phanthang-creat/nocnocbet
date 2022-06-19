import React from "react";

import { GiSkills } from "react-icons/gi";
// import { ImAirplane } from "react-icons/im";

// import { FaChess, FaCode, FaCoffee, FaGamepad, FaHeadphones } from "react-icons/fa";

import "./skill.scss";
import { Container } from "reactstrap";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebase/firebase-config";

const Skill = () => {

    const [technical, setTechnical] = React.useState([]);

    const [professional, setProfessional] = React.useState([]);

    const [render, setRender] = React.useState(true);

    // console.log(db)
    const dataCollection = collection(db, "skill");


    React.useEffect(() => {
        const getData = async () => {
            const data = await getDocs(dataCollection);
            // data.docs.map((doc) => {
            //     console.log(doc.data());
            // });
            let tmp = data.docs.map((doc) => doc.data());
            let technicalSkill = tmp[0].technical.split(",");
            let professionalSkill = tmp[1].professional.split(",");
            setTechnical(technicalSkill);
            setProfessional(professionalSkill);
        };
        if (render) {
            getData();
            setRender(false);
        }
    }, [dataCollection, render]);

    return (
        <section className="section_about section_skill" id="skill">
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
                        <div className="col-lg-6 skill__details">
                            <div className="title">
                                <h2>Technical Skills</h2>
                            </div>
                            <ul>
                                {
                                    technical.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <p>{item}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-lg-6 skill__details">
                            <div className="title">
                                <h2>Professional Skills</h2>
                            </div>
                            <div className="interest">
                                <ul>
                                    {
                                        professional.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <p>{item}</p>
                                                </li>
                                            )
                                        })
                                    }
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
