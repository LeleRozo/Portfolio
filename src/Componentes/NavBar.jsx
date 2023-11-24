import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img
              src="src/assets/logo.png"
              alt="logo"
              className="img-fluid"
              style={{
                width: "20vh",
                height: "auto",
              }}
            />
          </a>

          <button
            className="btn navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#abajo"
          >
            <span className="navbar-toggler-icon" id="color"></span>
          </button>
          <div className="container-fluid collapse navbar-collapse" id="abajo">
            <ul className="navbar-nav">
              <li className="nav-item naveg">
                <a className="nav-link text-light navegacion" href="#title">
                  About
                </a>
              </li>
              <li className="nav-item naveg">
                <a className="nav-link text-light navegacion" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item naveg">
                <a className="nav-link text-light navegacion" href="#contact">
                  Contacto
                </a>
              </li>
              <li>
                <ion-icon
                  className="navbar-nav navegacion"
                  name="sunny-outline"
                ></ion-icon>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
