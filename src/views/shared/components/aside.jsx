import { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLinkedin } from "react-icons/tfi";
import contacts from "~/models/contacts.json";
import { handleOpenLinkedin } from "~/scripts/app";
import { initSidebarToggle } from "~/scripts/app";

const Profile = new URL("/images/nafis.jpg", import.meta.url).href;

// simpan komponen, bukan elemen
const iconMap = {
  Email: FaEnvelope,
  Phone: FaPhoneAlt,
  Media: TfiLinkedin,
  Location: FaMapMarkerAlt,
};

function Aside({ ICON_SIZE = 18 }) {

  useEffect(() => {
    const cleanup = initSidebarToggle();
    return cleanup;
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box" title="Muhammad Nafis">
          <img src={Profile} alt="" width="80" />
        </figure>

        <button onClick={handleOpenLinkedin} className="info-content">
          <h1 className="name">Muhammad Nafis</h1>
          <p className="title">IT Digital Consultant</p>
        </button>

        <button className="info_more-btn" data-sidebar-btn>
          <GiHamburgerMenu size={ICON_SIZE} className="sidebar-icon" />
          <span>Show Contacts</span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          {contacts.map((item, index) => {
            const Icon = iconMap[item.title];
            return (
              <li className="contact-item" key={index}>
                <a href={item.link}>
                  <div className="icon-box">
                    {Icon && <Icon size={ICON_SIZE} className="sidebar-icon" />}
                  </div>
                </a>

                <div className="contact-info">
                  <p className="contact-title">{item.title}</p>
                  <a href={item.link} className="contact-link">
                    {item.desc}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
