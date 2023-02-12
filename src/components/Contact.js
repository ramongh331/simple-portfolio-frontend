import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../home.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xbgxy8k",
        "contact_form",
        form.current,
        "OgxW0hZZelLj-CDZI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact_comp">
      <h2>Let's Connect</h2>
      <section className="contact_bottom">
        <section className="contact_info">
          <h3 className="contact_titles">Hire Me</h3>
          <p>Email: RamonGH331@gmail.com</p>
          <p>Location: Connecticut | Willing to Relocate</p>
          <a
            href="https://docs.google.com/document/d/1wiw12XV2FYtoqgWUFv-xZNhvhHL64YuPXFUGZoH5kQk/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <p>Resumè</p>
          </a>
        </section>
        <section className="form">
          <h3 className="contact_titles">Message Me</h3>
          <form ref={form} onSubmit={sendEmail}>
            <section>
              <label className="hiddenLabel">Name</label>
              <input
                className="contact_input"
                type="text"
                name="user_name"
                placeholder="Name"
              />
            </section>
            <section>
              <label className="hiddenLabel">Email</label>
              <input
                className="contact_input"
                type="email"
                name="user_email"
                placeholder="Email"
              />
            </section>
            <section>
              <label className="hiddenLabel">Message</label>
              <textarea
                className="contact_input textarea"
                name="message"
                placeholder="Message"
              />
            </section>
            <section id="submit">
              <input type="submit" value="Send" />
            </section>
          </form>
        </section>
        <section className="contact_social">
          <h3 className="contact_titles">Keep Connected</h3>
          <section className="contact_icons">
            <a
              href="https://www.linkedin.com/in/ramon-hernandez-web/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/9whU8k1.png" alt="LinkedIn Icon" />
            </a>
            <a
              href="https://github.com/ramongh331"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/Ye3Jxte.png" alt="GitHub Icon" />
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};
