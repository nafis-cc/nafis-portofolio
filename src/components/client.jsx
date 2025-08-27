
const Client = ({name, logo, link}) => {
  return (
    <li className="clients-item">
        <a href={link} title={name}>
            <img src={logo} alt={name} />
        </a>
    </li>
  )
}

export default Client