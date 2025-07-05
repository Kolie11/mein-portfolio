import React from 'react';

function FormEl() {
  return (
    <>
      <div className="form-container">
        <form>
          <div className="form-el">
            <h1>Kontakt aufnehmen</h1>

            <fieldset>
              <label htmlFor="name">Geben Sie Ihren Namen ein*</label>
              <input type="text" id="name" required />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Geben Sie Ihre E-Mail-Adresse ein*</label>
              <input type="text" id="email" required />
            </fieldset>

            <fieldset>
              <label htmlFor="subject">Geben Sie den Betreff ein*</label>
              <input type="text" id="subject" required />
            </fieldset>

            <fieldset>
              <label htmlFor="message">Geben Sie Ihre Nachricht ein*</label>
              <textarea id="message" required></textarea>
            </fieldset>

            <button type="submit">E-Mail senden</button>
          </div>
        </form>

        <div className="contact-img">
          <img
            src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRldnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Code-Entwicklung"
          />
        </div>
      </div>
    </>
  );
}

export default FormEl;
