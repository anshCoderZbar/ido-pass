import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "styles/Home.css";
import banner from "app/assets/hero-min.png";

export const Home = () => {
  return (
    <div class="main homepage">
      <div class="position-relative ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div class="hero_wrapper">
              <div class="owl-carousel">
                <div class="container">
                  <img alt="Banner image" class="hero_image" src={banner} />
                  <div class="row">
                    <div class="hero_content col-xl-12  text-center">
                      <div class="inner position-relative">
                        <h1>Experience the future of Cardano IDOs</h1>
                        <p>
                          With IDO Pass DAO Pioneering Innovation in
                          Decentralized Fundraising
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="hero_wrapper">
              <div class="owl-carousel">
                <div class="container">
                  <img alt="Banner image" class="hero_image" src={banner} />
                  <div class="row">
                    <div class="hero_content col-xl-12  text-center">
                      <div class="inner position-relative">
                        <h1>Experience the future of Cardano IDOs</h1>
                        <p>
                          With IDO Pass DAO Pioneering Innovation in
                          Decentralized Fundraising
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div class="container rounded_card statistics_blocks">
            <div class="row">
              <div class="col-lg-12 col_flex">
                <div class="single_block">
                  <div class="d-flex justify-content-center gap-2">
                    <p class="count">17</p>
                    <p>Million</p>
                  </div>
                  <p class="tetxsm">Native Tokens Airdropped</p>
                </div>
                <div class="single_block">
                  <p class="count">370000</p>
                  <p class="tetxsm">ADA Distributed</p>
                </div>
                <div class="single_block">
                  <div class="d-flex justify-content-center gap-2">
                    <p class="count">1.2 </p>
                    <p>Million</p>
                  </div>
                  <p class="tetxsm">$1DP Locked</p>
                </div>
                <div class="single_block">
                  <div class="d-flex justify-content-center ">
                    <p class=" fw-semibold">$ </p>
                    <p class="count">100</p>
                    <p class=" fw-semibold">k+ </p>
                  </div>

                  <p class="tetxsm">USD Shared</p>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};
