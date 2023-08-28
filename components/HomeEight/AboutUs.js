import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about-area-seven">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-content">
              <h2>عيادة دكتور زيادة</h2>
              <p>
                لأن الليزر المستقبل في طب الأسنان . نحن عيادة دكتور زيادة نوفر جميع خدامتنا بأحدث أجهزة
                الليزر والديجيتال وأكثرها أمانا . لجعل ابتسامتك جذابة أكثر مع فريق متخصص من أمهر الأطباء
              </p>
              <div className="about-btn">
              <Link href="/about" className="default-btn">
                    من نحن
                  </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
              <div className="single-doctors-two">
                <div className="doctor-img">
                  <img src="/img/dr-ziadeh.png" alt="Image" />

  
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
