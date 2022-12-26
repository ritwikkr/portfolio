import React, { useState } from "react";
import Wrapper from "../wrapper/ContactWrapper";
import { AiFillMail } from "react-icons/ai";
import pdf from "../assets/myCV.pdf";

function Contact() {
  const [details, setDetails] = useState({ name: "", email: "", msg: "" });

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(details);
  }
  return (
    <Wrapper id="contact">
      <div className="body">
        <div className="contact">
          <h1>Contact Me</h1>
          <div className="email">
            <div className="icon">
              <AiFillMail />
            </div>
            <p>ritwikkumarrishu@gmail.com</p>
          </div>
          <div className="icons"></div>
          <div className="btn">
            <a href={pdf} download>
              Download CV
            </a>
          </div>
        </div>
        <div className="form">
          <form onSubmit={formSubmitHandler}>
            <div className="form-content">
              <input
                type={"text"}
                placeholder="Your Name"
                name="Name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <input
                type={"text"}
                placeholder="Your Email"
                name="Email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <textarea
                type={"text"}
                placeholder="Your Message"
                rows={10}
                name="Message"
                onChange={(e) =>
                  setDetails({ ...details, msg: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
