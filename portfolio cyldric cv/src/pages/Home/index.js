
import React from "react";
import Accueil from "../../containers/accueil";
import "./style.scss";
import Projets from "../../containers/projet";
import ListProjet from "../../image/listProjet.json";
import Footer from "../../containers/footer";
import Header from "../../containers/header";
import Contact from "../../containers/contact";




function Page() {
  function closeModal() {
    const modalContainer = document.querySelector(".modal-container")
    modalContainer.classList.toggle("desactive")
    modalContainer.classList.remove("active")
  }
  return (

    <div>
      <div className="modal-container">
        <div className="overlay" />
        <div className="modal">
          <button type="button" className="close-modal " onClick={() => closeModal()}>x</button>
          <div id="gal-mod" />
        </div>
      </div>


      <Header />
      <main>
        <Accueil />
        <Projets pictures={ListProjet} />
        <Contact />
      </main>
      <Footer />
    </div >

  );
};

export default Page;
