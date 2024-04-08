import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
<p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Luis Copetti</span>, un entusiasta que está dando sus primeros pasos en el mundo de la programación. Actualmente, me encuentro trabajando en proyectos personales donde estoy explorando y aprendiendo nuevas tecnologías. Resido en <span className="purple">Mendoza, Argentina</span>.
            <br />
            ¡Estoy emocionado por esta nueva aventura en el mundo de la tecnología!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar a juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir blogs técnicos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esforzarse por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
