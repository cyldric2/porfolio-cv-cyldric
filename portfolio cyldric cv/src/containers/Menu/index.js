/* eslint-disable no-return-assign */
import Button from "../../components/Button";


import "./style.scss";

const Menu = () => (
  <nav>
    <h1>BOUVET Cyldric</h1>
    <ul>
      <li>
        <a href="#présentation">Présentation</a>
      </li>
      <li>
        <a href="#mes-réalisations">Mes réalisations</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
