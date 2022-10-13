import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/pincoop-logo.png'

const Header = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector("#header");
      if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
      } else {
        nav.classList.remove("add-shadow");
      }
    });

  }, [])
  return (
    <>
      <section id="header">
        <Link to="/">
          <img src={logo} className='img-fluid' width="100" alt="pincoop-logo" />
        </Link>
        <div>
          <ul id="navbar" className={`mt-2 ${active && "active"}`}>
            <li onClick={() => setActive(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link to="/contact">Contact</Link>
            </li>
            <div className="right-mobile">
              <Link
                to="#"
                className="mx-3 mb-4"
                onClick={() => setActive(false)}
              >
                Login
              </Link>
              <button className="sign-up" onClick={() => setActive(false)}>
                Sign up
              </button>
            </div>
            <Link to="#" id="close">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setActive(false)}
              ></i>
            </Link>
          </ul>
        </div>
        <div className="right">
          <Link to="#" className="mx-3">
            Login
          </Link>
          <button className="sign-up">Sign up</button>
        </div>
        <div id="mobile">
          <i
            id="bar"
            className="fas fa-bars"
            onClick={() => setActive(true)}
          ></i>
        </div>
      </section>
    </>
  );
}

export default Header