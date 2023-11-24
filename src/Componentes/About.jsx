import React from "react";

function About() {
  return (
    <div className="text-center mt-5 mb-5 text-secondary">
      <a href="#">
        <img
          className="mb-5 rounded-circle img-fluid"
          src="./src/assets/me.jpg"
          alt="me"
          style={{
            width: "30%",
            height: "auto",
          }}
        />
      </a>
      <h2 id="title">Programador Junior FRONT-END</h2>
      <h3>Leydy Maybrith Rozo Avila</h3>
      <br />

      <section className="cert">
        <div>
          <b>CERTIFICACIONES</b>
          <hr /> {/* pone una linea */}
          <ul className="listas">
            <li>➱ Diplomado en Programación Básica en lenguaje JAVA</li>
            <li>➱ Dip en fundamentos de programación en lenguaje PYTHON</li>
            <li>➱ Dip en Desarrollo de Aplicaciones Moviles</li>
            <li>➱ Dip en Desarrollo de Software</li>
          </ul>
        </div>

        <div id="izq">
          <b>SKILLS</b>
          <hr />
          <ul className="listas">
            <li>➱ Phython</li>
            <li>➱ JavaScript</li>
            <li>➱ Bootstrap</li>
            <li>➱ React</li>
            <li>➱ Git Hub</li>
            <li>➱ Idioma Inglés</li>
            <li>➱ Mecanografía</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
