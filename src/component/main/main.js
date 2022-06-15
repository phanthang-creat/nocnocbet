import React from "react";

import db from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { setAbout } from "../../redux/reducer/about";

import "./main.scss";
import Home from "../section/home/home";
import About from "../section/about/about";
import Skill from "../section/skill/skill";
import ReSume from "../section/resume/resume";
import Footer from "../footer/footer";

const Main = () => {
    const dispatch = useDispatch();

    const about = useSelector(state => state.about);

    const [render, setRender] = React.useState(true);
    console.log("about", about);

    // console.log(db)
    const dataCollection = collection(db, "about");

    React.useEffect(() => {
        const getData = async () => {
            const data = await getDocs(dataCollection);
            const action = setAbout(data.docs.map((doc) => doc.data()));
            dispatch(action);
        };
        if (render) {
            getData();
            setRender(false);
        }
    }, [dataCollection, render, dispatch]);

    return (
        <main className="main">
            {/* <div className="screen-shadow"></div> */}
            <Home />
            <About />
            <Skill />
            <ReSume />
            <Footer />
        </main>
    );
};

export default Main;
