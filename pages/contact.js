import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/ContactUs/ContactInfo";
import ContactForm from "../components/ContactUs/ContactForm";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="تواصل معنا"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="تواصل معنا"
        imgClass="bg-1"
      />
      <ContactInfo />

      <ContactForm />


      <Footer />
    </>
  );
};

export default Contact;
