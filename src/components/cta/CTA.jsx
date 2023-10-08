import Nasrin_Jafari from "../../assets/Nasrin_Jafari.pdf";
import "./cta.scss";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={Nasrin_Jafari} download>
        Download CV
      </a>
      <Link className="btn btn-primary" to="/contact">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
