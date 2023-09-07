import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "app/assets/ido-pass-logo.png";
import idoLogo from "app/assets/ido_logo.png";
import { HeaderMenu } from "mock/header";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  return (
    <header className="navigation_wrapper">
      <div className="primary-menu">
        <div id="header-container" className="container-fluid">
          <div className="d-flex justify-content-between align-items-center no-gutters">
            <div className="parent_wrap no-gutters">
              <div className="col-logo my-auto">
                <Link to="/" className="text-decoration-none">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className=" my-auto">
                <a
                  href="#"
                  id="dropdown_menu_ss"
                  className="menu-item has-dropdown trigger-link text-decoration-none"
                  onClick={() => setDropDown(!dropdown)}
                >
                  Products
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3 ">
              <div className="row no-gutters">
                <a href="#" className="text-decoration-none">
                  <span className="btn_nav white_nav walletBTN">Connect</span>
                </a>
              </div>
              <div className="three">
                <div
                  className={`hamburger ${menuActive ? "is-active" : ""}`}
                  id="hamburger-1"
                  onClick={() => {
                    setMenuActive(!menuActive);
                    setDropDown(!dropdown);
                  }}
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`dropdown-wrap products-dropdown  producs_ss ${
          dropdown ? "menu_active" : ""
        } `}
        id="products-dropdown"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-links">
              <div className="row">
                {HeaderMenu?.map((menu) => {
                  return (
                    <div className="col-lg-6 col_a_cs">
                      <Link
                        to={menu?.slug}
                        className="d-flex gap-2 no-gutters text-decoration-none"
                      >
                        <div className="col-menu-icon">{menu?.icon}</div>
                        <div className="col-menu-label">
                          <span className="label">{menu?.heading}</span>
                          <span
                            className="small"
                            style={{ color: menu?.color ? menu?.color : "" }}
                          >
                            {menu?.subHeading}
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-3">
              <div className="inner">
                <div className="blog-banner has-video">
                  <span className="link">
                    <img
                      offset="100"
                      loading="lazy"
                      width="20px"
                      height="20px"
                      className="img-fluid"
                      alt="Stake DAO Video Explanation"
                      src={idoLogo}
                    />
                  </span>
                </div>
                <div className="blog-info">
                  <h2>
                    <strong className="">IDO Launchpad</strong> Explained
                  </h2>
                  <div className="excerpt">
                    Everything you need to know about
                    <strong>IDP</strong> token
                    <strong>and our IDO Launchpad</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
