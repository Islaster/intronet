import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" aria-label="Home">
          {/* swap for <img src="/logo.svg" ... /> if you have an image */}
          Logo
        </Link>

        <nav aria-label="Primary">
          <ul className="nav__links">
            <li>
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/board">
                Job Board
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/connect">
                LinkedIn Connect
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/tracker">
                Job Tracker
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
