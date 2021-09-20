import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import azuka from '../assets/images/card-azuka.png';
import '../assets/styles/Main.scss';

function Azuka() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Evangelion</Navbar.Brand>
          <Link to="/">
            <Button variant="light">Back</Button>
          </Link>
        </Container>
      </Navbar>
      <div className="container mt-3 inter">
        <h1 className="text-center">Asuka Langley Shikinami</h1>
        <p className="float-start mt-3">
          <img src={azuka} alt="shinji" className="float-start p-4 img-fl" />
          Al inicio de la película, Shinji y Gendo visitan la tumba de Yui.
          Luego, Misato pasa a buscar a Shinji con su auto. Mientras viajan,
          reciben la notificacion sobre la llegada del Séptimo Ángel. Antes de
          que puedan reaccionar, el ángel es derrotado por la recién llegada
          Unidad-02, pilotada por Asuka. Shinji se ve obligado a convivir con
          Asuka, que se muda a casa de Misato, y a su vez demuestra tener duras
          relaciones con todo el mundo, y algunos signos de amor/odio hacia
          Shinji. Un día Ryoji Kaji les lleva a un acuario, donde residen las
          últimas criaturas marinas con vida. A pesar de la compañía de Shinji y
          sus amigos, Asuka prefiere permanecer sola jugando a su videojuego en
          lugar de ir a hablar con ellos. El gigantesco ángel cae a gran
          velocidad desde el espacio. Tiempo después, el Octavo Ángel aparece en
          el espacio. Para detenerlo, Misato ordena un arriesgado plan en el que
          Shinji, Asuka y Rei deben cooperar. La idea es impedir que el ángel
          colisione, capturándolo con las manos desnudas y desplegando los
          campos AT de los tres EVAs al máximo. Shinji es el primero en llegar
          al punto de caída y con ayuda de Rei consiguen romper el campo AT,
          exponiendo el núcleo para que finalmente Asuka lo destruya. Al día
          siguiente, es el turno de Shinji para cocinar el almuerzo y hace
          también uno para Rei, dándosela en la escuela, lo que irrita a Asuka.
          Entonces, ella decide aprender a cocinar para competir con Rei, que
          planeaba organizar una comida para Shinji y su padre. Más tarde, la
          Unidad-04 se desvanece en un misterioso accidente junto con la Segunda
          Rama de NERV, y la Unidad-03 es enviada a Japón. Cuando llega la
          Unidad-03, SEELE recomienda congelar la Unidad-00 para respetar el
          Tratado del Vaticano. Dicho tratado limita el número de EVAs activos
          que un país puede tener. Gendo prefiere congelar la Unidad-02 y Asuka
          es seleccionada como piloto de pruebas de la Unidad-03. Finalmente,
          comienza la prueba de activación, la cual parecía marchar bien al
          principio. Pero inesperadamente el Evangelion Unidad 03 es poseído por
          el Noveno Ángel. Masa azul Bardiel (Rebuild).png A pesar de la
          gravedad de la situación, Gendo sólo envía la Unidad-01. Durante el
          combate, el ángel despliega dos brazos extra que estrangulan a Shinji,
          quien se niega a pelear para no herir a Asuka. Ante ello, Gendo activa
          un método experimental de teledirección llamado Dummy Plug,
          destrozando a su oponente y luego triturando con los dientes de la
          Unidad-01 el Entry Plug de la Unidad-03. Shinji enloquece ante ello y
          ataca la pirámide del Dogma Central. Con Shinji incapaz de razonar,
          Gendo ordena elevar la presión del LCL y obligarlo a salir. Como
          resultado, Shinji es arrestado y llevado ante Gendo. Luego se anuncia
          que Asuka está viva, pero gravemente herida y posiblemente infectada
          por el ángel. Evangelion: 3.0 You Can (Not) Redo 14 años después,
          vuelve a aparecer en Evangelion: 3.0 You Can (Not) Redo, solo que
          ahora lleva un parche en el ojo izquierdo. Técnicamente ahora Asuka
          tendría 28 años de edad pero a pesar de que pasaron 14 años, su
          apariencia no ha cambiado debido a "La Maldición del Eva". A lo largo
          de la película, primero pelea contra los Nemesis Series en el espacio
          para recuperar al EVA-01, que se encontraba contenido en el interior
          del Teseracto Cruciforme. Después de completar su misión con la ayuda
          de Mari Illustrious Makinami, regresa al AAA Wunder para ver a Shinji
          Ikari después de ser rescatado del interior del EVA-01.
        </p>
      </div>
    </>
  );
}

export default Azuka;
