import Services from "./Services";
import myImage from "/src/assets/mathi11.jpg";
import { PiPencilCircleThin } from "react-icons/pi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { RiSeoFill } from "react-icons/ri";
import { TfiRulerPencil } from "react-icons/tfi";
import { CiVideoOn } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-sec">
      <h1>ÜBER MICH</h1>
      <h1 className="shadow">ÜBER MICH</h1>
      <div className="main-bar">
        <div className="bar"></div>
      </div>
      <main>
        <div className="left-sec">
          <img className="my-image" src={myImage} alt="Mein Foto" />
        </div>
        <div className="right-sec">
          <h2>
            Ich bin <span id="name">Fassou Mathias Kolie</span>
          </h2>
          <p className="about-text">
            Ich bin ein Frontend-Webentwickler. Ich schreibe sauberen Code und
            gestalte pixelgenaue Designs. Außerdem mache ich Webseiten durch
            Web-Animationen interaktiver und ansprechender.
          </p>
          <strong>
            <b>
              Vollständiger Name : <span className="info">Fassou Mathias Kolie</span>
            </b>
            <br />
            <b>
              Nationalität : <span className="info">Guineer</span>
            </b>
            <br />
            <b>
              Sprachen : <span className="info">Französisch, Englisch, Deutsch</span>
            </b>
            <br />
            <b>
              Adresse : <span className="info">Deutschland, Bochum</span>
            </b>
          </strong>
          <br />
          <a href="">Lebenslauf herunterladen</a>
        </div>
      </main>

      <div className="service-text">
        <h1>DIENSTLEISTUNGEN</h1>
        <h1 className="shadow">DIENSTLEISTUNGEN</h1>
        <div className="main-bar">
          <div className="bar"></div>
        </div>
      </div>

      <div className="services-of-dev">
        <Services
          logo={<PiPencilCircleThin />}
          title="UI/UX Design"
          text="Ich gestalte intuitive und ästhetisch ansprechende Benutzeroberflächen, die das Nutzererlebnis verbessern und die Markenidentität widerspiegeln."
        />
        <Services
          logo={<IoCodeSlashSharp />}
          title="Webentwicklung"
          text="Ich entwickle responsive und leistungsstarke Webseiten mit modernen Webtechnologien für Skalierbarkeit und optimale Funktionalität."
        />
        <Services
          logo={<RiSeoFill />}
          title="SEO-Optimierung"
          text="Ich optimiere Webseiten für Suchmaschinen, um die Sichtbarkeit zu erhöhen, organischen Traffic zu steigern und die Gesamtleistung zu verbessern."
        />
        <Services
          logo={<TfiRulerPencil />}
          title="Markenidentität"
          text="Ich entwickle einheitliche Markenauftritte – von Logos bis hin zu Farbpaletten –, die Unternehmen einzigartig machen und ihre Zielgruppe ansprechen."
        />
        <Services
          logo={<CiVideoOn />}
          title="Video-Bearbeitung"
          text="Ich produziere und bearbeite fesselnde Videos, die Geschichten erzählen, Aufmerksamkeit wecken und die digitale Präsenz stärken."
        />
        <Services
          logo={<FaBookReader />}
          title="E-Learning Design"
          text="Ich gestalte interaktive und didaktisch klare Online-Inhalte, die das Lernen durch strukturierte und visuelle Ansätze fördern."
        />
      </div>
    </section>
  );
}
