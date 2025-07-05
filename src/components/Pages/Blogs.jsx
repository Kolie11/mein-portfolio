export default function Blogs() {
  return (
    <section id="blog" class="blog-sec">
      <h1>Mein Blog</h1>
      {/* <p class="shadow">Blog</p> */}

      <div class="blog-container">
        <article class="blog-post">
          <h2>Warum ich Webentwicklung lerne</h2>
          <p class="blog-date">15. Juni 2025</p>
          <p>
            Ich war schon immer begeistert von Technologie und Kreativität.
            Das Erlernen der Webentwicklung ermöglicht es mir, beides zu
            kombinieren, um konkrete Projekte zu realisieren. Jeden Tag mache
            ich Fortschritte – dank meiner eigenen Bemühungen und der Hilfe von KI.
          </p>
        </article>

        <article class="blog-post">
          <h2>Mein aktuelles Projekt: Ein interaktives Gästebuch</h2>
          <p class="blog-date">12. Juni 2025</p>
          <p>
            Ich arbeite an einem React-Projekt, bei dem Nutzer Nachrichten
            hinterlassen, Beiträge liken und kommentieren können. Es ist eine
            großartige Übung, um CRUD-Operationen und React-Logik mit useState zu üben.
          </p>
        </article>

        <article class="blog-post">
          <h2>Was ich diese Woche über React gelernt habe</h2>
          <p class="blog-date">9. Juni 2025</p>
          <p>
            Diese Woche habe ich gelernt, wie man die Context API verwendet,
            um globale Daten wie einen Warenkorb in einem Online-Shop zu verwalten.
            Sie ist sehr hilfreich, um "Props Drilling" in verschachtelten Komponenten zu vermeiden.
          </p>
        </article>
      </div>
    </section>
  );
}
