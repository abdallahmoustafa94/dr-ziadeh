import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const MainBanner = () => {
  return (
    <>
      <div className="hero-slider-area hero-slider-area-eight">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="hero-slide-eight"
        >
          <SwiperSlide>
            <div 
              className="slider-item"
              style={{ backgroundImage: `url(/img/slide-1.jpeg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text one">
                      <span className="top-title">عيادات</span>
                      <h1>دكتور زيادة</h1>
                      <p>
                      الاختيار الافضل لاسنان صحية واسنان مشرقة
                      </p>

                      <div className="slider-btn">
                        <Link href="/contact" className="default-btn">
                          احجز موعدآ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div 
              className="slider-item"
              style={{ backgroundImage: `url(/img/slide-2.jpeg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text two">
                      <span className="top-title">اسنانك</span>
                      <h1>استثمار لحياتك</h1>
                      <p>
                     أحدث أجهزة على مستوى مصر
                      </p>

                      <div className="slider-btn">
                        <Link href="/contact" className="default-btn">
                         احجز موعدآ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
