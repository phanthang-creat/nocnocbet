import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";


import "./footer.scss";
import { Container } from "reactstrap";

const Footer = () => {

    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <footer className="footer">
            <a href="#0" className="to-top" onClick={topFunction}>
                <BsFillArrowUpCircleFill />
            </a>
            <Container>
                <div className="footer__content row">
                    <div className="footer__content__social">
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
                    <div className="footer__content__text">
                        <p>
                            © 2022 Copyright by Loops.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;