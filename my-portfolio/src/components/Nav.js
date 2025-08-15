


function Header() {
  
    return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm" role="navigation" aria-label="Primary Navigation">
      <div className="container">
        <a className="navbar-brand fw-bold gradient-text" href="#home" aria-label="Go to home section">
          Aseel Obeidat
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              ["Home", "home"],
              ["Projects", "services"],
              ["Skills", "skills"],             
              ["Experience", "experience"],                     
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`} aria-label={`Go to ${label} section`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
  
}

export default Header;
