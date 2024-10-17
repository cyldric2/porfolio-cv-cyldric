/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import "./style.scss";






// eslint-disable-next-line react/prop-types
function Projets({ pictures }) {
    function cart(picture) {
        const modalContainer = document.querySelector(".modal-container")
        const carts = document.querySelectorAll(".btn-image")
        function imageModale() {
            const galModale = document.getElementById("gal-mod")
            galModale.innerHTML = ""
            const works = `
              <img src=${picture.pictures} alt=${picture.title} />
              <h3> ${picture.title}</h3>
              <p>${picture.description}</p> 
                <p>lien github:</p>
              <p>${picture.lienGit}</p>
        `
            galModale.innerHTML += works
            carts.forEach(item => {
                item.classList.add("remove-index")
            })
        }
        function toggleModal() {
            modalContainer.classList.toggle("active")
            modalContainer.classList.remove("desactive")
            imageModale()
        }
        toggleModal()
    }
    // eslint-disable-next-line camelcase
    function dot_selected(categories, index) {
        for (const i of categories) {
            i.classList.remove("dot_selection")
        }
        index.classList.add("dot_selection")

    }

    const [selection, filterSelection] = useState(pictures);
    const filterProjet = (type) => {
        const result = pictures.filter(picture => picture.type.includes(type))
        filterSelection(result)



    }
    useEffect(() => {
        const categories = document.querySelectorAll(".dots")
        categories.forEach(item => {
            item.addEventListener("click", () => {
                dot_selected(categories, item)
            })
        })
    }, [selection])
    return (

        <div className="titre" id="mes-réalisations" >
            <h2>
                mes réalisations
            </h2>
            <div id="myBtnContainer" className="boxCart" >
                <button type="button" className="dots dot_selection" onClick={() => filterSelection((pictures))}> Tous</button>
                <button type="button" className="dots" onClick={() => filterProjet(("html"))}> HTML</button>
                <button type="button" className="dots" onClick={() => filterProjet(("css"))}> css</button>
                <button type="button" className="dots" onClick={() => filterProjet(("JavaScript"))}> Javascript</button>
                <button type="button" className="dots" onClick={() => filterProjet(("react"))}> react</button>
            </div>
            <div className="lmj-layout">
                {selection.map((picture) =>

                    <div className="lmj-cart" key={picture.id}>
                        <img src={picture.pictures} alt={picture.type} id={picture.id} />
                        <button className="btn-image" type="button" onClick={() => cart(picture)
                        }> {picture.title}</button>
                    </div>
                )}
            </div>
        </div >
    )

}
export default Projets;
