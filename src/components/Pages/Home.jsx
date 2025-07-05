import { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Cartoon from "../../assets/cartoon.JPG";
import Logo from "../../assets/gigi_logo.JPG";
import Menu from "../../assets/design1.jpg";
import Meli from "../../assets/mecca-Mely-2.jpg";
import SocialMedia from "./SocialMedia";

function Home() {
  const [toggle, setToggle] = useState(false);
  const [showBtn, setShowBtn] = useState(false)
  
  function handleToggle() {
    setToggle((prevToggle) => !prevToggle);
  }

  function handleShow() {
    setShowBtn(prevBtn => !prevBtn);
  }

  return (
    <section>
      <header>
        <h1 style={{ textAlign: "center" }}>
          Hallo, ich bin{" "}
          <span style={{ color: "#4F518C", fontSize: "2rem" }}>
            Fassou Mathias Kolie
          </span>
        </h1>
        <p style={{ textAlign: "center" }}>
          Ich bin Frontend-Webentwickler. Ich kann sauberen Code und pixelgenaues
          Design liefern. <br />Ich kann Webseiten auch mit Animationen
          interaktiver gestalten.
        </p>
<hr style={{border:"1px solid #888", width:"10%"}}/>
        <p style={{ textAlign: "center", marginTop: "1rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", marginBottom: "2rem" }}>
  Ich habe einen Bachelorabschluss in <strong>Elektrotechnik (Telekommunikation)</strong>, was mir ein solides technisches Fundament sowie ein gutes Verständnis für komplexe Systeme und Netzwerke vermittelt hat. <br />
  Mit Leidenschaft für Webtechnologien baue ich gerne schöne und
  funktionale Benutzeroberflächen sowohl mit kreativem Design als auch mit sauberem Code. <br />
  Zurzeit konzentriere ich mich auf moderne Frontend-Technologien wie <strong>React, JavaScript und Tailwind CSS</strong> und entwickle reale Projekte, um mich täglich zu verbessern. <br />
  Ich habe außerdem Erfahrung mit <strong>Git, Figma, Responsive Design und arbeite an der Anbindung von APIs.</strong> <br />
  Neugierig, autodidaktisch und immer bereit zu lernen und zu wachsen als Entwickler und mein Ziel ist es, digitale Lösungen zu schaffen, die intuitiv, schnell und zugänglich sind.
</p>


        <div className="toggle-btn">
          <button onClick={handleToggle}>Lass uns vernetzen</button>
        </div>

        {toggle && (
          <div className="social-medias">
            <div className="btns">
              <SocialMedia/>
            </div>

            <div className="text">
              <p>Lass uns in Kontakt treten</p>
              <div className="pictures" style={{ marginTop: "2rem", textAlign: "center" }}>
                <button
                  onClick={handleShow}
                
                >
                  Meine Designs ansehen
                </button>

                {showBtn && (
                  <>
                    <h2 style={{ marginTop: "1rem", color: "#4F518C" }}>
                      Willkommen in meinem Designbereich
                    </h2>

                    <p style={{ maxWidth: "600px", margin: "0 auto", marginTop: "0.5rem" }}>
                      In diesem Bereich findest du eine Auswahl meiner visuellen Kreationen für verschiedene Kunden und Anwendungsfälle.
                      Ob Branding, UI-Design oder Werbematerial – ich strebe immer nach Klarheit und Kreativität.
                    </p>

                    <div
                      className="design-logo"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "2rem",
                        marginTop: "2rem"
                      }}
                    >
                      {/* Cartoon Portrait */}
                      <div
                        className="design-descr"
                        style={{
                          maxWidth: "300px",
                          textAlign: "center",
                          boxShadow: "0px 0px 2px 2px #ccc",
                          padding: "5px 10px"
                        }}
                      >
                        <img
                          src={Cartoon}
                          alt="Cartoon einer Frau"
                          style={{ width: "100%", borderRadius: "10px" }}
                        />
                        <h3 style={{ marginTop: "0.5rem" }}>Individuelles Portrait</h3>
                        <p>
                          Cartoon-Stil-Portrait für eine Kundin in Guinea erstellt. Handgezeichnet und digital bearbeitet für eine persönliche Markenpräsenz.
                        </p>
                      </div>

                      {/* Logo Design */}
                      <div
                        className="design-descr"
                        style={{
                          maxWidth: "300px",
                          textAlign: "center",
                          boxShadow: "0px 0px 2px 2px #ccc",
                          padding: "5px 10px"
                        }}
                      >
                        <img
                          src={Logo}
                          alt="Logo eines Online-Shops"
                          style={{ width: "100%", borderRadius: "10px" }}
                        />
                        <h3 style={{ marginTop: "0.5rem" }}>Logo-Design – Gigi Shop</h3>
                        <p>
                          Modernes und klares Logo für einen Online-Shop in Guinea. Entworfen mit Fokus auf Vertrauen, Einfachheit und Zugänglichkeit.
                        </p>
                      </div>

                      {/* Menu Design */}
                      <div
                        className="design-descr"
                        style={{
                          maxWidth: "300px",
                          textAlign: "center",
                          boxShadow: "0px 0px 2px 2px #ccc",
                          padding: "5px 10px"
                        }}
                      >
                        <img
                          src={Menu}
                          alt="Restaurantmenü"
                          style={{ width: "100%", borderRadius: "10px" }}
                        />
                        <h3 style={{ marginTop: "0.5rem" }}>Speisekarte</h3>
                        <p>
                          Vollständige Speisekarte für ein lokales Restaurant in Guinea. Schwerpunkt auf Lesbarkeit, Markenidentität und attraktivem Layout.
                        </p>
                      </div>

                      {/* Flyer */}
                      <div
                        className="design-descr"
                        style={{
                          maxWidth: "300px",
                          textAlign: "center",
                          boxShadow: "0px 0px 2px 2px #ccc",
                          padding: "5px 10px"
                        }}
                      >
                        <img
                          src={Meli}
                          alt="Flyer"
                          style={{ width: "100%", borderRadius: "10px" }}
                        />
                        <h3 style={{ marginTop: "0.5rem" }}>Werbeflyer</h3>
                        <p>
                          Flyer für ein Musikprojekt. Eine Mischung aus auffälligen visuellen Elementen und prägnanter Botschaft zur Aufmerksamkeitserregung.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </section>
  );
}

export default Home;
