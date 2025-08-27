import services from "~/models/services.json";
import clients from "~/models/clients.json";
import { Service, Review, Client } from "~/components";
import { useEffect, useState } from "react";

function About() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/src/models/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setTestimonials(data);
      });
  }, []);

  return (
    <>
      <section className="about active">
        <header>
          <h2 className="h2 article-title">About Me</h2>
          <section className="about-text">
            <p>
              Nafis is an efficient and fast learner who adapts easily to new work environments. He
              has a high curiosity and critical thinking so he is fully committed to always seeking
              innovation and trying his best to solve a problem.
            </p>
            <p>
              My role is to design and develop software that is not only highly functional and
              user-friendly, but also visually appealing. I strive to add a distinctive personal
              touch to every product, ensuring it is both engaging and effortless to use. My goal is
              to effectively convey your brand’s message and identity in the most creative and
              impactful way. I have had the privilege of creating software solutions for several
              well-known brand companies.
            </p>
          </section>

          <section className="service">
            <h3 className="h3 service-title">I specialize in</h3>
            <ul className="service-list has-scrollbar">
              {services.map((item, index) => (
                <Service
                  key={index}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                  size={40}
                />
              ))}
            </ul>
          </section>

          <section className="testimonials">
            <h3 className="h3 testimonials-title">What they said</h3>
            <ul className="testimonials-list has-scrollbar">
              {testimonials.map((item, index) => (
                <Review
                  key={index}
                  name={item.name}
                  avatar={item.avatar}
                  testimonial={item.testimonial}
                />
              ))}
            </ul>
          </section>

          <section className="clients">
            <h3 className="h3 clients-title">My Clients</h3>
            <ul className="clients-list has-scrollbar">
              {clients.slice().reverse().map((item, index) => (
                <Client key={index} name={item.name} logo={item.logo} link={item.link} />
              ))}
            </ul>
          </section>
        </header>
      </section>
    </>
  );
}

export default About;
