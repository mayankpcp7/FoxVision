import React from "react";

const ContactUsMap = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="w-full">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4763172761996!2d-79.45154412443188!3d43.63825745339803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35b8ab3c4b7f%3A0xa59da6769dd4ce13!2sGardiner%20Expy%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1718687738121!5m2!1sen!2sin"
          height="771"
          width={1920}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsMap;
