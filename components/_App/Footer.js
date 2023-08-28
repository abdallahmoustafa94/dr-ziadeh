import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area  pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div 
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  <img src="/img/logo.png" alt="Image" style={{width:'80px'}}/>
                </Link>

                <p className="text-black">
                لأن الليزر المستقبل في طب الأسنان . نحن عيادة دكتور زيادة نوفر جميع خدامتنا بأحدث أجهزة
                الليزر والديجيتال وأكثرها أمانا . لجعل ابتسامتك جذابة أكثر مع فريق متخصص من أمهر الأطباء
                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                 
                   
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div 
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3 >خدماتنا</h3>
                <ul >
                  <li>
                    <Link className="text-black" href="#">التقويم</Link>
                  </li>
                  <li>
                    <Link className="text-black" href="#">الفينير</Link>
                  </li>
                  <li>
                    <Link className="text-black" href="#">زراعة الأسنان</Link>
                  </li>
                  <li>
                    <Link className="text-black" href="#">عيادة الأطفال</Link>
                  </li>
            
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3 >مواعيد العمل</h3>
                <ul>
                  <li>
                    <p className="text-black">السبت-الخميس:</p>
                    <p className="right text-black" >10:00 AM - 8:00 PM</p>
                  </li>
            
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div 
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3 >تواصل معنا</h3>
                <ul>
                  <li>
                    <a href="tel:+822456974 " className="text-black" >
                    <span className="text-black">التليفون:</span>
                      <i className="bx bx-phone-call text-black"></i>
                     01551029625
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@corf.com" className="text-black">
                      <i className="bx bx-envelope text-black"></i>
                      <span className="text-black">الايميل:</span>
                      info@drziadehclinics.com
                    </a>
                  </li>
                  <li className="text-black">
                    <i className="bx bx-location-plus text-black"></i>
                    <span className="text-black">العنوان:</span>
                    ٤٥٢ طريق الحرية رشدى، الاسكندرية
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              جميع الحقوق محفوظة &copy; {currentYear} {" "}
           
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
