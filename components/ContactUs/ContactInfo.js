import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>الاسكندرية</h3>
                <p>٤٥٢ طريق الحرية رشدى</p>
                <span>info@drziadehclinics.com</span>
                <span>01551029625</span>
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="single-contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.7157008191257!2d29.952593!3d31.228604999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c585a0c4a0e1%3A0xe4f210b7e7920127!2sDr.%20Ziadeh%20Digital%20%26%20Laser%20Dentistry!5e0!3m2!1sen!2seg!4v1693250963103!5m2!1sen!2seg"   loading="lazy" />
              </div>
            </div>

           

          
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
