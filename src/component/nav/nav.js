import React from "react";
import { Container } from "reactstrap";

import "./nav.scss";
// import { getStorage, ref, getDownloadURL } from "firebase/storage"

const MyNav = () => {
  const [navAbsolute, setNavAbsolute] = React.useState(true);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const menuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  let y = window.scrollY;
  window.onscroll = function () {
    if (y < window.scrollY) {
      setNavAbsolute(false);
      y = window.scrollY;
    } else {
      setNavAbsolute(true);
      y = window.scrollY;
    }
  };

  return (
    <div
      className={`header-nav`}
      style={{
        transform: navAbsolute ? "translateY(0)" : "translateY(-100%)",
        visibility: `${navAbsolute ? "visible" : "hidden"}`,
        opacity: `${navAbsolute ? "1" : "0"}`,
      }}
    >
      <Container>
        <nav className="nav row">
          <button className="menu-btn" onClick={menuClick}>
            <div className={`menu${menuIsOpen ? " close" : " open"}`}></div>
          </button>
          <div className="logo col-2">
            <div>
              <a href="https://shopee.vn/tntnocnocshop" target="blank">
                <img src="/logo.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className={`col-10${menuIsOpen ? " dropdown" : ""} my-nav-link`}>
            <div className="my-menu">
              <ul>
                <li className="my-menu__item">
                  <a href="#home">Home</a>
                </li>
                <li className="my-menu__item">
                  <a href="#about">About</a>
                </li>
                <li className="my-menu__item">
                  <a href="#skill">Skill</a>
                </li>
                <li className="my-menu__item">
                  <a href="#resume">Resume</a>
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
