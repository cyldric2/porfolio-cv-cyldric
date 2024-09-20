
import React from "react";

import ImagCyl from "../../image/image cyldric (3).jpg";
import CvCyl from "../../image/cv programmeur pdf.pdf";
import "./style.scss";


const Accueil = () => (

    <section className="accueil">

        <figure>
            <img src={ImagCyl} alt="Imag-cyldric" />

        </figure>
        <article>
            <h2>Intégrateur web</h2>
            <p> Ancien du bâtiment ,je me suis reconverti dans l informatique</p>
            <p> J ai suivi une formation intégrateur web chez open classroom</p>
            <p> Grace à cela j ai acquis les bases de la programmation ( html ,css,javascript ,react)</p>
            <p> </p>
            <a href={CvCyl}>ci-joint mon cv</a>
        </article>

    </section>

);


export default Accueil;
