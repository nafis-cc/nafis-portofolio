import services from "~/models/services.json";
import clients from "~/models/clients.json";
import reviews from "~/models/reviews.json";
import { Service, Review, Client } from "~/views/shared/components";

function About() {
  return (
    <>
      <section className="about active">
        <header>
          <h2 className="h2 article-title">About Me</h2>
          <section className="about-text">
            <p>
              I’m Muhammad Nafis, an IT Digital Consultant and software developer with a degree in
              Information Systems. I’ve contributed to digital transformation at the Ministry of
              Finance of Indonesia and currently build enterprise software at PT Kalimantan Prima
              Persada — giving me direct experience across government and industry scale. I
              specialize in web, mobile, and desktop applications that are functional, visually
              polished, and built around real user needs. I approach every project with curiosity
              and precision, delivering software that is both effortless to use and genuinely
              impactful for the people and organizations behind it.
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
              {reviews.map((item, index) => (
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
              {clients
                .slice()
                .reverse()
                .map((item, index) => (
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
