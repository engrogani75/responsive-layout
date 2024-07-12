import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../lib/fontawesome";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/HobbyCue Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex searchbar">
          <input
            className="form-control"
            type="search"
            placeholder="Search here..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link me-3">
                <i class="fa-solid fa-compass"></i>
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link me-4">
                <i class="fa-solid fa-sun"></i>
                Hobbies
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link">
                <i class="fa-solid fa-bookmark"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                <i class="fa-solid fa-bell"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary ms-2">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
