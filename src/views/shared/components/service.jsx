import { MdOutlineDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";

// Map ke komponen, bukan langsung elemen
const iconMap = {
  1: MdOutlineDesignServices,
  2: CgWebsite,
  3: FaMobileAlt,
  4: FaDesktop,
};

function Service({ title, description, id, size }) {
  const Icon = iconMap[id]; // ambil komponen ikon sesuai id

  return (
    <li className="service-item">
      <div className="service-icon-box">
        {Icon && <Icon size={size} className="service-icon" />}
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
}

export default Service;
