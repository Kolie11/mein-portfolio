import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Pages/Footer";
import myPic from "/src/assets/mathProofil.jpg"

export default function NavBar() {
  return (
      <aside>
      <nav>
      <div className="img-container">
          <img src={myPic} alt="Mein Bild" />
        <hr className="hr-bar"/>
      </div>
      
        <Link to="/">Startseite</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/resume">Lebenslauf</Link>
        <Link to="/portfolios">Portfolios</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Kontakt</Link>
      <Footer/>
      </nav>
    </aside>
  );
}
