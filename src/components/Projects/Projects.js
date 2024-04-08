import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong>Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí tienes algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Sala de chat personal o espacio de trabajo para compartir recursos y pasar el rato con amigos, construido con react.js, Material-UI y Firebase. Tiene funciones que permiten al usuario enviar mensajes en tiempo real, compartir imágenes, así como reacciones a los mensajes."
              ghLink="###"
              demoLink="###"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Mi página de blog personal construida con Next.js y Tailwind CSS que toma el contenido de archivos markdown y lo renderiza usando Next.js. Admite modo oscuro y es fácil escribir blogs usando markdown."
              ghLink="###"
              demoLink="###"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Editor de código y markdown en línea construido con react.js. Editor en línea que admite código html, css y js con vista instantánea del sitio web. Editor de markdown en línea para construir archivos README que admite GFM, etiquetas Html personalizadas con barra de herramientas y vista previa instantánea. Ambos editores admiten el guardado automático del trabajo utilizando Local Storage."
              ghLink="###"
              demoLink="###"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Usé el conjunto de datos de enfermedades de las plantas de Kaggle y entrené un modelo clasificador de imágenes utilizando el marco 'PyTorch' con CNN y Transfer Learning con 38 clases de diversas hojas de plantas. El modelo pudo detectar con éxito hojas enfermas y saludables de 14 plantas únicas. Logré una precisión del 98% utilizando el modelo preentrenado Resnet34."
              ghLink="###"
              demoLink="###"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="Usando 'Procesamiento del Lenguaje Natural' para la detección de publicaciones relacionadas con el suicidio y la ideación suicida del usuario en el ciberespacio, y así ayudar en la prevención del suicidio."
              ghLink="###"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Por favor incluye un enlace de demostración aquí
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconocimiento Facial y Detección de Emociones"
              description="Entrené un clasificador CNN utilizando el conjunto de datos 'FER-2013' con Keras y tensorflow backend. El clasificador predijo con éxito los diversos tipos de emociones humanas. Y la precisión más alta obtenida con el modelo fue del 60.1%.
              Luego utilicé Open-CV para detectar el rostro en una imagen y luego pasar el rostro al clasificador para predecir la emoción de una persona."
              ghLink="###"
              // demoLink="###"      <--------Por favor incluye un enlace de demostración aquí 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
