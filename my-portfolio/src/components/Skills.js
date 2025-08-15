import React, { useEffect, useState } from "react";

const dataSkills = [
  { icon: "fa-microsoft", title: "Microsoft Stack", skills: [["C#", 90], ["ASP.NET", 90], ["LINkQ", 85]] },
  { icon: "fa-html5", title: "Frontend", skills: [["HTML5/CSS3", 90], ["JavaScript", 85], ["Responsive Design", 85]] },
  { icon: "fa-robot", title: "AI & Programming", skills: [["Prompt Engineering", 85], ["Python", 70], ["C++", 70]], style: "fas" },
  { icon: "fa-database", title: "Database & Tools", skills: [["SQL Server", 85], ["Database Design", 80], ["Web Services", 75]], style: "fas" },
];

function Skills() {
  const [animated, setAnimated] = useState(false);

  
  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I use to create exceptional digital experiences</p>

        <div className="row g-4">
          {dataSkills.map((data, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <section className="skill-category h-100" aria-label={data.title}>
                <div className="skill-icon" aria-hidden="true">
                  <i className={`${data.style || "fab"} ${data.icon}`} size="6px"></i>
                </div>
                <h3 className="h5 text-center">{data.title}</h3>
                <div className="skills-list" role="list">
                  {data.skills.map(([name, pct]) => (
                    <div className="skill-item" role="listitem" key={name}>
                      <span>{name}</span>
                      <div
                        className="skill-bar"
                        aria-label={`${name} proficiency ${pct}%`}
                        role="meter"
                        aria-valuenow={pct}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="skill-progress"
                          style={{
                            width: animated ? `${pct}%` : "0%",
                            transition: "width 1s ease-in-out",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
