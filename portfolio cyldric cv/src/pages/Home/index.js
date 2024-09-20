
import React from "react";
import Accueil from "../../containers/accueil";
import Menu from "../../containers/Menu";
import "./style.scss";
import Projets from "../../containers/projet";
import ListProjet from "../../image/listProjet.json";
import Filter from "../../containers/filter";


function Page() {

  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <section >
          <Accueil />
        </section>
        <section >
          <div className="boxCart">
            <h2>
              mes réalisations
            </h2>
          </div>
          <Filter />

          <div className="boxCart">
            {ListProjet.map((profile) => (
              <Projets
                key={`${profile.id}`}
                pictures={profile.pictures}
                title={profile.title}
                type={profile.type}
              />
            ))}
          </div>
        </section>
      </main>
    </div >
  );
};

export default Page;
