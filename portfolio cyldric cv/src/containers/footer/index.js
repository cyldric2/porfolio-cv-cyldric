import "./style.scss";
import linkedin from "../../image/linkedin noir.jpg";

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/cyldric-bouvet-08633a1b0/" aria-label="lien linkedin"> <img src={linkedin} alt="logo linkedin" /></a>
        </div>

    )
}

export default Footer