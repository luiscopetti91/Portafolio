import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTANME <span className="purple">PRESENTARME</span>
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación y al menos he aprendido algo, creo... 🤷‍♂️
              <br />
              <br />Tengo fluidez en clásicos como
              <i>
                <b className="purple"> C++, Javascript y Go. </b>
              </i>
              <br />
              <br />
              Mis intereses se centran en construir nuevas &nbsp;
              <i>
                <b className="purple">Tecnologías Web y Productos </b> y
                también en áreas relacionadas con{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Siempre que sea posible, también aplico mi pasión por desarrollar productos
              con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas y Marcos de Javascript Modernos
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectarte</span> conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/luiscopetti91"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/lucho_styx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="###"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="###"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
