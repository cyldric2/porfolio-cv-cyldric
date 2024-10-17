/* eslint-disable no-return-assign */
import Button from "../../components/Button";


import "./style.scss";

const Header = () => (
  <nav className="header">
    <h1>BOUVET Cyldric</h1>
    <div>
      <a href="#présentation">Présentation</a>
      <a href="#mes-réalisations">Mes réalisations</a>
      <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
        Contact
      </Button>
    </div>

  </nav>
);

export default Header;
