import React from "react";

import twitter from "app/assets/twitter-grey.svg";
import telegram from "app/assets/telegram-grey.svg";
import youtube from "app/assets/youtube-grey.svg";
import tiktok from "app/assets/tiktok-grey.svg";
import discord from "app/assets/social-discord-grey.svg";
import instagram from "app/assets/social-instagram-grey.svg";

export const Footer = () => {
  return (
    <footer className="primary-footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className=" bottom_row">
            <div className="col_left">
              <div className="d-flex align-items-center footer_btm">
                <button
                  className="text-white footer-txt"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Terms of Service
                </button>
                <button
                  className="text-white footer-txt"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Privacy Policy
                </button>
                <div className="copy_txt">
                  <p className="text-white">
                    © 2023 IDO Pass. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="col_right row_csx">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <img
                      loading="lazy"
                      alt="follow IDO Pass on twitter"
                      src={twitter}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img
                      loading="lazy"
                      alt="follow IDO Pass on telegram"
                      src={telegram}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="nofollow">
                    <img
                      loading="lazy"
                      alt="follow IDO Pass on youtube"
                      src={youtube}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img
                      loading="lazy"
                      alt="follow IDO Pass on tiktok"
                      src={tiktok}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img
                      loading="lazy"
                      alt="follow IDO Pass on discord"
                      src={discord}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img
                      loading="lazy"
                      alt="follow IDO Pass on instagram"
                      src={instagram}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum labore fugit tempore aliquid aperiam! Consequuntur
                temporibus quas facilis amet, laudantium impedit veritatis
                debitis voluptatem similique adipisci consectetur, aliquam ipsam
                minus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
