import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";

const Layout = ({ children }) => {

  const handleWhatsAppClick = () => {
    // Implement WhatsApp button click logic
    // For example, you can open a WhatsApp chat link
    window.open('https://wa.me/1551029625', '_blank');
  };

  const handleCallClick = () => {
    // Implement call button click logic
    // For example, you can open a call link
    window.open('tel:00201551029625');
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '15px', // Increased padding for larger buttons
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '50%', // Rounded shape
    cursor: 'pointer',
    outline: 'none',
    fontSize: '28px', // Increased font size for larger buttons
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
  };
  return (
    <>
      <Head>
        <title>عيادة دكتور زيادة</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}
      <div>
      {/* Your page content */}
      
      {/* Floating WhatsApp button */}
      <button
        style={{ ...buttonStyle, backgroundColor: '#25d366' }}
        onClick={handleWhatsAppClick}
      >
        <i className="bx bxl-whatsapp" ></i>
      </button>
      
      {/* Floating Call button */}
      <button
        style={{ ...buttonStyle, backgroundColor: '#007bff',bottom:'90px' }}
        onClick={handleCallClick}
      >
        <i className="bx bx-phone" ></i>
      </button>    
    </div>
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;