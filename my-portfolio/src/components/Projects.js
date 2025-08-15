import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faShoppingCart, faHospital } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    icon: faBrain,
    title: "AI Prompt Engineering",
    text: "Design and optimize AI prompts for enhanced model accuracy through iterative testing and analysis.",
  },
  {
    icon: faShoppingCart,
    title: "E-commerce Development",
    text: "Build comprehensive e-commerce solutions using modern web technologies and database systems.",
  },
  {
    icon: faHospital,
    title: "Healthcare Systems",
    text: "Develop staff scheduling and patient management applications with robust data flows.",
  },
];


function Services() {
  return (
    <section id="services" className="features-section" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title">What I Offer</h2>
        <p className="section-subtitle">Professional services to bring your digital vision to life</p>

        <div className="row g-4">
          {data.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <article className="feature-card h-100" role="article">
                <div className="feature-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={item.icon}  />
                </div>
                <h3 className="feature-title text-center">{item.title}</h3>
                <p className="feature-text">{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;