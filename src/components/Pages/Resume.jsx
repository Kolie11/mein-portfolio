function Resume() {
  return (
    <section className="resume-sec">
      <h1>MEINE FÄHIGKEITEN</h1>
      <h1 className="shadow">MEINE FÄHIGKEITEN</h1>
      <div className="main-bar">
        <div className="bar"></div>
      </div>

      <div className="skills-container">
        <div className="html-content">
          <h2>HTML5</h2>
          <div className="percent-bar">
            <span>90%</span>
            <div className="html-shadow"></div>
          </div>
        </div>

        <div className="html-content">
          <h2>CSS</h2>
          <div className="percent-bar">
            <span>70%</span>
            <div className="css-shadow"></div>
          </div>
        </div>

        <div className="html-content">
          <h2>JavaScript</h2>
          <div className="percent-bar">
            <span>60%</span>
            <div className="js-shadow"></div>
          </div>
        </div>

        <div className="html-content">
          <h2>ReactJS</h2>
          <div className="percent-bar">
            <span>65%</span>
            <div className="react-shadow"></div>
          </div>
        </div>

        <div className="html-content">
          <h2>Photoshop</h2>
          <div className="percent-bar">
            <span>75%</span>
            <div className="ps-shadow"></div>
          </div>
        </div>

        <div className="html-content">
          <h2>NextJS</h2>
          <div className="percent-bar">
            <span>30%</span>
            <div className="next-shadow"></div>
          </div>
        </div>
      </div>

      <p className="resume-conclusion">
        Ich entwickle meine Fähigkeiten ständig weiter und bin motiviert, neue
        Technologien zu erlernen, um hochwertige und effiziente Lösungen zu
        liefern.
      </p>

      <div className="stack-carousel">
        <div className="carousel-track">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            alt="ChatGPT"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
          />

          {/* Wiederholung für flüssige Animation */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            alt="ChatGPT"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
          />
        </div>
      </div>

      <div className="softskills">
        <div className="softskills-content">
          <h3>Teamfähigkeit & Kommunikation</h3>
          <p>
            Durch meine Erfahrungen im Studium und in selbstständigen Projekten
            habe ich gelernt, effektiv im Team zu arbeiten. Ich kann technische
            Konzepte klar erklären und höre aktiv zu, um gemeinsame Lösungen zu
            finden.{" "}
          </p>
        </div>
        <div className="softskills-content">
          <h3>Problemlösungsorientiertes Denken</h3>
          <p>
            Als Autodidakt in der Webentwicklung analysiere ich
            Herausforderungen strukturiert und finde kreative Wege, um
            Code-Probleme zu lösen. Mein technisches Grundwissen
            (Telekommunikation) hilft mir, logische Zusammenhänge schnell zu
            erfassen – sei es bei Debugging oder der Planung kleinerer Projekte.{" "}
          </p>
        </div>
        <div className="softskills-content">
          <h3>Lernbereitschaft & Anpassungsfähigkeit</h3>
          <p>
            Ich bin motiviert, mich ständig weiterzuentwickeln, auch unter
            schwierigen Bedingungen. Durch mein Selbststudium (HTML, CSS,
            JavaScript, React) beweise ich Eigeninitiative. Neue Frameworks oder
            Tools erlerne ich gezielt durch Praxis und Dokumentation.{" "}
          </p>
        </div>
        <div className="softskills-content">
          <h3>Organisation & Zeitmanagement</h3>
          <p>
            Als Student mit begrenzten finanziellen Mitteln balanciere ich
            effizient zwischen Lernzeiten, Jobsuche und persönlichen Projekten.
            Ich setze Prioritäten, um Deadlines einzuhalten – etwa beim
            parallelen Lernen von React und der Suche nach Werkstudentenstellen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
