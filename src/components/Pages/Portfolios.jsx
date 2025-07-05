import countriesPic from "/src/assets/countries.png";
import onlineCalculator from "/src/assets/onlineCalculator.png";
import portfolioPic from "/src/assets/portfolioPic.png";
import reactBloag from "/src/assets/my_blog_react.png";
import myHBDBook from "/src/assets/my-hbd-book.png";
import DayKnower from "/src/assets/day-kknower.png";

import { DiGithub } from "react-icons/di";

function Portfolios() {
  return (
    <section className="portfolios-sec">
      <h1>PORTFOLIOS</h1>
      <h1 className="shadow">PORTFOLIOS</h1>
      <div className="main-bar">
        <div className="bar"></div>
      </div>

      <div className="parallax-banner">
        <h2 className="parallax-title">Meine Projekte</h2>
      </div>

      <div className="project-sec">
        <div className="project-content">
          <div className="projects">
            <img src={countriesPic} alt="Rest Countries API Projekt" />
            <hr />
            <h2>Rest Countries API</h2>
            <p>
              Dieses Projekt verwendet Vanilla JavaScript, um Daten von einer REST API
              abzurufen und anzuzeigen. Es hat mir geholfen, asynchrone Abläufe zu verstehen
              und zu lernen, wie Frontend-Anwendungen mit externen Diensten kommunizieren,
              um Daten benutzerfreundlich darzustellen.
            </p>
            <div className="link-part">
              <a
                href="https://countries-web-app11.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ansehen
              </a>
              <a
                href="https://github.com/Kolie11/countries-app"
                target="_blank"
              >
                GitHub : {<DiGithub />}
              </a>
            </div>
          </div>

          <div className="projects">
            <img src={onlineCalculator} alt="Online Rechner Projekt" />
            <hr />
            <h2>Online Rechner</h2>
            <p>
              Ich habe diesen Online-Rechner mit HTML, CSS und JavaScript erstellt.
              Er hat ein einfaches, responsives Design und ermöglicht die Sprachauswahl,
              sodass Nutzer die Benutzeroberfläche wechseln können. Dieses Projekt hat meine
              Frontend-Fähigkeiten und mein Verständnis für UI-Logik verbessert.
            </p>
            <div className="link-part">
              <a
                href="https://online-calculator11.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ansehen
              </a>
              <a
                href="https://github.com/Kolie11/online-calculator"
                target="_blank"
              >
           GitHub : {<DiGithub />}
              </a>
            </div>
          </div>

         <div className="projects">
            <img src={reactBloag} alt="My React blog Projekt" />
            <hr />
            <h2>Personal Blog mit React, React Router & React Icons</h2>
            <p>
      
Ein selbst entwickeltes Blog-Projekt, das moderne Webtechnologien nutzt, um Artikel anzuzeigen und zu verwalten. Die App ist als Single-Page Application (SPA) aufgebaut und bietet eine dynamische Benutzeroberfläche mit clientseitigem Routing.
            </p>
            <div className="link-part">
              <a
                href="https://my-personal-blog11.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ansehen
              </a>
              <a
                href="https://github.com/Kolie11/personal-blog.com"
                target="_blank"
              >
              GitHub : {<DiGithub />}
              </a>
            </div>
          </div>

  <div className="projects">
            <img src={portfolioPic} alt="My portfolio website" />
            <hr />
            <h2>Portfolio Website (Pure Frontend)</h2>
            <p>
      
Statische Single-Page Portfolio mit cleanem, modernem Design und Responsive Layout (Mobile First),Vollständig mit vanilla HTML5, CSS3 und JavaScript entwickelt
            </p>
            <div className="link-part">
              <a
                href="https://mein-portfolio-math.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ansehen
              </a>
              <a
                href="https://github.com/Kolie11/mathias-portofolio"
                target="_blank"
              >
              GitHub : {<DiGithub />}
              </a>
            </div>
          </div>

            <div className="projects">
            <img src={myHBDBook} alt="My birthday book" />
            <hr />
            <h2>Mein Digitales Gästebuch für meinen Geburtstag ("Happy Birthday!")</h2>
            <p>
Eine interaktive React-App, mit der Nutzer Geburtstagsgrüße hinterlassen können.
Frontend: React.js mit Hooks (useState, useEffect)

Datenmanagement: Lokaler State oder Firebase (je nach Implementierung)

UI: Responsive Design + benutzerfreundliches Formular

Feature: Echtzeit-Anzeige der Nachrichtenanzahl
            </p>
            <div className="link-part">
              <a
                href="https://mathias-birthday-book.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ansehen
              </a>
              <a
                href="https://github.com/Kolie11/my-birthday-book"
                target="_blank"
              >
               GitHub : {<DiGithub />}
              </a>
            </div>
          </div>
            <div className="projects">
            <img src={DayKnower} alt="an app to know your day of birth" />
            <hr />
            <h2>Geburtstags-Wochentag-Rechner</h2>
            <p>
Eine intuitive Web-App, die Nutzern anzeigt, an welchem Wochentag sie geboren wurden – entwickelt mit Vanilla JavaScript für maximale Performance.

UI: Cleanes Design mit responsivem Formular
Features:

Eingabe von Geburtsdatum (Tag/Monat/Jahr)

Sofortige Anzeige des Wochentags (z.B. "Sie wurden an einem Mittwoch geboren!")
            </p>
            <div className="link-part">
              <a
                href="https://day-knower1121.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ansehen
              </a>
              <a
                href="https://github.com/Kolie11/DayKnower1121"
                target="_blank"
              >
           GitHub : {<DiGithub />}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolios;
