const Timeline = ({ name, link, location, from, until, study, position }) => {
  return (
    <li className="timeline-item">
      <a href={link}>
        <h4 className="h4 timeline-item-title">{name}</h4>
      </a>
      <span>{study && study !== "" ? study : position}</span>
      <p className="timeline-text">
        {from} - {until} in {location}.{' '}
        {study && study !== ""
          ? <>Completed the program successfully. Gained valuable knowledge and skills.</> 
          : <>Supported significant projects. Delivered results and created additional value.</>}
      </p>
    </li>
  )
}

export default Timeline;
