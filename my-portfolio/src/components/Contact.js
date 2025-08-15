function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Get In Touch</h2>
        <p className="section-subtitle">If you find me highly qualified, do not hesitate to contact me.</p>

        <div className="contact-form" role="form" aria-describedby="contact-help">
          <form
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I’ll reply to you soon.");
            }}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input type="text" className="form-control" id="name" name="name" required aria-required="true" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input type="email" className="form-control" id="email" name="email" required aria-required="true" />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" placeholder="How can I help you?" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea className="form-control" id="message" name="message" rows="5" required placeholder="Brief explanation of your request..." />
            </div>

            <button type="submit" className="btn btn-submit">
              <i className="fas fa-paper-plane me-2" aria-hidden="true" />
              Send Message
            </button>
            <p id="contact-help" className="visually-hidden">All fields marked with * are required.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;