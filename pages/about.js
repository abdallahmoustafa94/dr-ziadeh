import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";

const About = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="من نحن"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="من نحن"
        imgClass="bg-1"
      />

      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
            <div className="col-lg-12">
              <div className="single-doctors-two">
                <div className="doctor-img">
                  <img src="/img/dr-ziadeh.png" alt="Image" />
                </div>
              </div>
          </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">عيادة دكتور زيادة</span>
                <h2>من نحن؟</h2>
                <p>
                لان الليزر المستقبل في طب الأسنان . نحن عيادة دكتورة زيادة نوفر جميع خدامتنا بأحدث أجهزة الليزر والديجيتال وأكثرها أمانا . لجعل ابتسامتك جذابة أكثر مع فريق متخصص من أمهر الأطباء
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    الكشف الروتيني
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>التقويم
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    الفينير
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    زراعة الأسنان
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    عيادة الأطفال
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
التركيبات                  </li>
<li>
                    <i className="flaticon-tick"></i>
	
                    الحشوات التجميلية                  </li>
                    <li>
                    <i className="flaticon-tick"></i>
	
                    علاج وحشو العصب
                </li>
                    <li>
                    <i className="flaticon-tick"></i>
	
                    علاج اللثة
                 </li>
                    <li>
                    <i className="flaticon-tick"></i>
	
                    جراحة الوجة والفكين
            </li>
            <li>
                    <i className="flaticon-tick"></i>
	
                    الخلع
            </li>
            <li>
                    <i className="flaticon-tick"></i>
	
                    تبييض الأسنان

            </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
