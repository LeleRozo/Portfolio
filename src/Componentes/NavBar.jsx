import React from "react";
import { useState } from "react";

function NavBar() {
  /* se establece el estado inicial */
  const [isClicled, setisClicked] = useState(false);
  /* se crea una funcion que cambie el estado al hacer click */
  const handleClick = () => {
    setisClicked(!isClicled);
  };
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
                {/* le agrego la funcion que cambia el icono al div y debajo pongo la condicional */}
                <div id="manito" onClick={handleClick}>
                  {isClicled ? (
                    <ion-icon name="sunny-outline"></ion-icon>
                  ) : (
                    <ion-icon name="moon-outline"></ion-icon>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
