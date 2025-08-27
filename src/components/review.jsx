const Review = ({name, avatar, testimonial}) => {
  return (
    <li className="testimonials-item">
      <div className="content-card">
        <figure className="testimonials-avatar-box">
          <img src={avatar} alt=""  />
        </figure>
        <h4 className="h4 testimonials-item-title">{name}</h4>
        <div className="testimonials-text">
          <p>{testimonial}</p>
        </div>
      </div>
    </li>
  )
}

export default Review