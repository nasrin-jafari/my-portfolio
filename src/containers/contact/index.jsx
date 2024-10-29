import  {useRef} from "react";
import {FaLinkedinIn, FaTelegramPlane} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import emailjs from "@emailjs/browser";
import "./styles.scss";
import {Animate} from "react-simple-animate";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7z42cju",
        "template_c86ur71",
        form.current,
        "gKnnDKF_USRGmwwRt"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="contact">
      <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: "translateX(-200px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <h3 className="contact__content__header-text">Let's Talk</h3>
      </Animate>
      <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: "translateX(-200px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="social">
          <a href="https://www.linkedin.com/in/nasrin-jfri" target="_blank">
            <FaLinkedinIn size={28} />
          </a>
          <a href="https://t.me/Nasrin_jfri" target="_blank">
            <FaTelegramPlane size={28} />
          </a>
          <a href="mailto:nasrin.jafari778@gmail.com" target="_blank">
            <HiMail size={28} />
          </a>
        </div>
      </Animate>
      <form ref={form} onSubmit={sendEmail} action="">
        <input
          type="text"
          name="user_name"
          placeholder="Your Full Name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary"
          
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
export default Contact;
