/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import "./style.scss";







// eslint-disable-next-line react/prop-types
function Projets({ pictures }) {
    function cart(picture) {
        const modalContainer = document.querySelector(".modal-container")

        function imageModale() {
            const galModale = document.getElementById("gal-mod")
            galModale.innerHTML = ""
            const works = `
              <img src=${picture.pictures} alt=${picture.type} />
              <h3> ${picture.title}</h3>
              <p>${picture.description}</p> 
                <p>lien github:</p>
              <p>${picture.lienGit}</p>
        `
            galModale.innerHTML += works
        }
        function toggleModal() {
            modalContainer.classList.toggle("active")
            modalContainer.classList.remove("desactive")
            imageModale()
        }

        toggleModal()




    }

    const [selection, filterSelection] = useState(pictures);
    const filterProjet = (type) => {
        const result = pictures.filter(picture => picture.type.includes(type))
        filterSelection(result)
    }
    useEffect(() => {

    }, [selection])


    return (

        <div className="titre" id="mes-réalisations" >
            <h2>
                mes réalisations
            </h2>
            <div id="myBtnContainer" className="boxCart" >
                <button type="button" className="btn active" onClick={() => filterSelection((pictures))}> Tous</button>
                <button type="button" className="btn" onClick={() => filterProjet(("html"))}> HTML</button>
                <button type="button" className="btn" onClick={() => filterProjet(("css"))}> css</button>
                <button type="button" className="btn" onClick={() => filterProjet(("JavaScript"))}> Javascript</button>
                <button type="button" className="btn" onClick={() => filterProjet(("react"))}> react</button>
            </div>
            <div className="lmj-layout">
                {selection.map((picture) =>

                    <div className="lmj-cart" key={picture.id}>
                        <img src={picture.pictures} alt={picture.type} id={picture.id} />
                        <button type="button" onClick={() => cart(picture)
                        }> {picture.title}</button>
                    </div>


                )}


            </div>
        </div >
    )

}


export default Projets;
