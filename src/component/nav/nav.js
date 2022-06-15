import React from "react";
import { Container } from "reactstrap";

import "./nav.scss";

const MyNav = () => {
  return (
    <div className="header-nav">
    <Container>
      <nav className="nav row">
        <div className="logo col-2">
          <div>
            <img src="/logo.jpg" alt="" />
          </div>
        </div>
        <div className="col-10">
          <div className="my-menu">
            <ul style={{display: "block"}}>
                <li className="my-menu__item">
                    <a href="#topHome">Home</a>
                </li>
                <li className="my-menu__item">
                    <a href="#topAbout">About</a>
                </li>
                <li className="my-menu__item">
                    <a href="#topWork">Work</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
    </div>
  );
};

export default MyNav;
