import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { initContactFormValidation } from "~/scripts/app";

function Contact() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const cleanup = initContactFormValidation();
    return cleanup;
  }, []);
  


  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      alert("Message sent successfully!");
      form.current.reset(); // reset form setelah kirim
    } catch (error) {
      alert("Failed to send message: " + error.text);
    }
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <div className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32658976.3929962!2d95.93688004479428!3d-2.2685276713225404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1756374183701!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </figure>
      </div>

      <div className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form ref={form} onSubmit={sendEmail} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="sender_name"
              className="form-input"
              placeholder="Full Name"
              required
              data-form-input
            />
            <input type="email" name="sender_email" className="form-input" placeholder="Email" required data-form-input />
          </div>
          <div className="input-subject">
            <input
              type="text"
              name="sender_title"
              className="form-input"
              placeholder="Your Subject"
              required
              data-form-input
            />
            <input type="hidden" name="sender_time" value={new Date().toLocaleString()} />
          </div>
          <textarea
            name="sender_message"
            className="form-input"
            placeholder="Your Messages"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn disabled>
            <RiSendPlaneFill size={24} className="sidebar-icon" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
