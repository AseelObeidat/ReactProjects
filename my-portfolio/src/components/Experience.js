 function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Professional Experience</h2>
        <p className="section-subtitle">My journey in software development and technology</p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <article className="timeline-content">
              <header className="timeline-header">
                <h3 className="h5 mb-1">Prompt AI Engineer</h3>
                <span className="timeline-company d-block">MenaDevs</span>
                <span className="timeline-period">Nov 2024 – Feb 2025</span>
              </header>
              <div className="timeline-description">
                <p>Designed and optimized AI prompts to enhance model accuracy and performance.</p>
                <ul className="timeline-achievements">
                  <li>Optimized prompts across multiple model families</li>
                  <li>Iterative test pipelines to boost accuracy</li>
                  <li>Delivered AI-driven business solutions</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <article className="timeline-content">
              <header className="timeline-header">
                <h3 className="h5 mb-1">Web Developer</h3>
                <span className="timeline-company d-block">GTS</span>
                <span className="timeline-period">Sep 2015 – Sep 2016</span>
              </header>
              <div className="timeline-description">
                <p>Led development of web applications including e-commerce and healthcare systems.</p>
                <ul className="timeline-achievements">
                  <li>E-commerce website with HTML5, CSS, JS, SQL</li>
                  <li>Hospital nursing shifts system (ASP.NET, C#, LINQ)</li>
                  <li>Database solutions & web services integration</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <article className="timeline-content">
              <header className="timeline-header">
                <h3 className="h5 mb-1">Personal Project: Engineering Library App</h3>
                <span className="timeline-company d-block">Independent</span>
                <span className="timeline-period">Jan 2014 – May 2014</span>
              </header>
              <div className="timeline-description">
                <p>Windows Phone app to facilitate communication between doctors and students.</p>
                <ul className="timeline-achievements">
                  <li>Built with C# & Visual Studio</li>
                  <li>Database via web services</li>
                  <li>User-friendly educational interface</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;