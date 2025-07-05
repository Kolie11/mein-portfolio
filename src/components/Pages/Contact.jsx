import { IoMdMailUnread } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneCallback } from "react-icons/md";
import FormEl from "./FormEl";
import { useState } from "react";



function Contact() {
  const [isFormShown, setIsFormShown] = useState(false);

  function handleClick() {
    setIsFormShown(prev => !prev);
  }

  

  return (
    <section className="contact-sec">
      <div className="contact-infos">
        <h1>KONTAKTIERE MICH</h1>
        <h1 className="shadow">KONTAKT</h1>

        <div className="main-bar">
          <div className="bar"></div>
        </div>

        <div className="form-sec">
          <h2>Wähle deine bevorzugte Kontaktmethode</h2>

          <div className="choice-sec">
            <a onClick={handleClick}>
              <IoMdMailUnread />E-Mail
            </a>

            <a
              href="https://wa.me/491771694756"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />WhatsApp
            </a>

            <a href="tel:+491771694756">
              <MdPhoneCallback />Anruf
            </a>
          </div>
        </div>
      </div>

      <div className="form-content">
        {isFormShown && <FormEl />}
      </div>
    </section>
  );
}

export default Contact;
