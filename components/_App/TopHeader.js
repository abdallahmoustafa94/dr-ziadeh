import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6">
              <ul className="header-content-left">
                <li>
                  <i className="bx bx-time"></i>
                  السبت-الخميس 10am-8pm
                </li>
                <li>
                  <a href="tel:01551029625">
                    <i className="bx bx-phone-call"></i>
                    01551029625
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@info.com">
                    <i className="bx bxs-envelope"></i>
                   info@drziadehclinics.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <ul className="header-content-right">
                <li>
                  <a href="https://www.facebook.com/Dr.Ziadeh.Clinics" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
              
              
                <li>
                  <a href="https://www.instagram.com/dr.ziadeh.clinics/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
