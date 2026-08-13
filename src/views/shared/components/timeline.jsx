const Timeline = ({ id, name, link, location, from, until, study, position }) => {
  return (
    <>
      <a href={link}>
        <h4 className="h4 timeline-item-title">{id}.&nbsp;&nbsp;{name}</h4>
      </a>
      <span>{study && study !== "" ? study : position}</span>
      <p className="timeline-text">
        {from} - {until} in {location}.{' '}
        {study && study !== ""
          ? <>Completed the program successfully. Gained valuable knowledge and skills.</> 
          : <>Supported significant projects. Delivered results and created additional value.</>}
      </p>
    </>
  )
}

export default Timeline;
