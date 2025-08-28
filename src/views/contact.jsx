import { RiSendPlaneFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // ganti dari dashboard EmailJS
        "YOUR_TEMPLATE_ID", // ganti dari dashboard EmailJS
        form.current,
        "YOUR_PUBLIC_KEY" // ganti dari dashboard EmailJS
      );
      alert("Pesan terkirim!");
      form.current.reset(); // reset form setelah kirim
    } catch (error) {
      alert("Gagal kirim: " + error.text);
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
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </figure>
      </div>

      <div className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full Name"
              required
            />
            <input type="email" name="email" className="form-input" placeholder="Email" required />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Messages"
            required
          ></textarea>

          <button className="form-btn" type="submit">
            <RiSendPlaneFill size={24} className="sidebar-icon" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
