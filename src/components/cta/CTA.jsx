import nasrin_jafari_cv from "../../assets/nasrin_jafari_cv.pdf";
import "./cta.scss";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={nasrin_jafari_cv} download>
        Download CV
      </a>
      <Link className="btn btn-primary" to="/contact">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
