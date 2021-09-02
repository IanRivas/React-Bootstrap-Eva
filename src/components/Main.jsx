import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import '../assets/styles/Main.scss';
// Cards
import shinji from '../assets/images/card-shinji.png';
import azuka from '../assets/images/card-azuka.png';
import rei from '../assets/images/card-rei.png';
// Poster Movies
import peli1 from '../assets/images/peli-1.png';
import peli2 from '../assets/images/peli-2.png';
import peli3 from '../assets/images/peli-3.png';
import peli4 from '../assets/images/peli-4.png';

function Main() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="container inter">
      <h2 className="text-center my-4">Protagonist</h2>
      <CardGroup>
        <Card className="p-4">
          <Card.Img variant="top" src={azuka} />
          <Card.Body>
            <Card.Title>Azuka</Card.Title>
            <Card.Text className="fs-8">
              Asuka es la piloto del Evangelion unidad 02 siendo a la vez
              denominada como el segundo niño. nacionalidad estadounidense2​3​4​
              pero vivió y creció en Alemania lugar de fabricación de la unidad
              02 antes de ser enviada a Japón
            </Card.Text>
            <Button className="mt-3" variant="primary">
              More Info
            </Button>
          </Card.Body>
        </Card>
        <Card className="p-4">
          <Card.Img variant="top" src={shinji} />
          <Card.Body>
            <Card.Title>SHINJI</Card.Title>
            <Card.Text className="fs-8">
              Shinji es un joven que fue abandonado Su padre posteriormente se
              contacta con él y le pide que pilotee un robot humanoide llamado
              Evangelion-01, con el fin de proteger la ciudad de Tokio-3 de
              criaturas conocidas como los ángeles, las cuales amenazan con
              destruir a la humanidad.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
        <Card className="p-4">
          <Card.Img variant="top" src={rei} />
          <Card.Body>
            <Card.Title>Rei</Card.Title>
            <Card.Text className="fs-8">
              Rei es una enigmática figura cuyo inusual comportamiento confunde
              a sus compañeros. Rei se revelará como el factor clave en los
              eventos que concluyen la trama histórica. Rei es el "Primer Niño"
              designada para pilotar la unidad prototipo Evangelion-00.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <h2 className="text-center mt-4">Movies</h2>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex">
          <div className="w-5 px-5 py-3 d-flex justify-content-center flex-column">
            <h3>Evangelion: 1.0 You ARE (NOT) ALONE</h3>
            <p>
              Shinji Ikari llega a Tokyo-3, buscado por su padre Gendo. A su
              llegada, se encuentra con el ejército de la ONU tratando de
              detener al cuarto Ángel (el tercero en la versión original),
              Sachiel. Rescatado por Misato Katsuragi, Shinji llega a los
              cuarteles generales de NERV junto con su padre Gendo (que es el
              Supremo Comandante de NERV) con la casi amenaza de que si no
              pilotaba el EVA-01 (EVA 初号機 EVA shogōki?) y luchaba contra
              Sachiel, la misteriosa Rei Ayanami, que se encontraba en malas
              condiciones, sería enviada a pelear; por lo que acepta. Después de
              la primera batalla, en la que salió victorioso, Misato lo lleva a
              su casa para que viva con ella, vaya a la escuela y trate de tener
              una vida normal.{' '}
            </p>
          </div>
          <div className="w-5 py-3">
            <img src={peli1} width={300} alt="poster-evangelion" />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <div className="w-5 px-5 py-3 d-flex justify-content-center flex-column order-2">
            <h3>Evangelion: 2.22 You Can (Not) Advance</h3>
            <p>
              Evangelion: 2.22 You Can (Not) Advance (ヱヴァンゲリヲン新劇場版:
              破 Evangerion Shin Gekijōban: Ha?, Evangelion nueva versión
              teatral: Ruptura) (titulada: Evangelion: 2.22 Tú (No) Puedes
              Avanzar en Hispanoamérica) es una película animada japonesa de
              2009, escrita por Hideaki Anno. Es la segunda de cuatro películas
              que se lanzarán en la tetralogía Rebuild of Evangelion
              (Reconstrucción de Evangelion), basadas en la serie original de
              anime Neon Genesis Evangelion. Fue producida y co-distribuida por
              el Studio Khara de Hideaki Anno. Evangelion 2.0 se aparta del
              original mucho más ampliamente que 1.0, con un mayor énfasis en
              material nuevo. La primera mitad de la película adapta los
              episodios de "Action Arc" 08 a 12,{' '}
            </p>
          </div>
          <div className="w-5 py-3 order-1">
            <img src={peli2} width={300} alt="poster-evangelion" />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <div className="w-5 px-5 py-3 d-flex justify-content-center flex-column">
            <h3>Evangelion: 3.33 You can (not) Redo</h3>
            <p>
              Evangelion: 3.0 You Can (Not) Redo (ヱヴァンゲリヲン新劇場版:Q
              Evangerion Shin Gekijōban: Kyū?, Evangelion nueva versión teatral:
              Quickening) (titulada: Evangelion: 3.33 Tú (No) Puedes Rehacer en
              Hispanoamérica) es una película de anime dirigida por Hideaki
              Anno, siendo este último el guionista y director de la serie
              original Neon Genesis Evangelion, y producida y codistribuida por
              Studio Khara. Es la tercera de cuatro películas planeadas en la
              tetralogia Rebuild of Evangelion, la cual se basa en la serie
              original de Neon Genesis Evangelion.{' '}
            </p>
          </div>
          <div className="w-5 py-3">
            <img src={peli3} width={300} alt="poster-evangelion" />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <div className="w-5 px-5 py-3 d-flex justify-content-center flex-column order-2">
            <h3>Evangelion: 3.0+1.0 Thrice Upon a Time</h3>
            <p>
              Evangelion: 3.0+1.0 Thrice Upon a Time
              (シン・エヴァンゲリオン劇場版:|| Shin Evangelion Gekijōban:||?,
              Evangelion nueva versión teatral:||) (titulada: Evangelion:
              3.0+1.0 Tres Veces Una Vez en Hispanoamérica) una película
              japonesa animada de ciencia ficción de 2021 escrita y codirigida
              por Hideaki Anno y producida por Studio Khara. Es la cuarta y
              última película de la serie Rebuild of Evangelion, basada en la
              serie de anime Neon Genesis Evangelion. Fue estrenada el 8 de
              marzo de 2021.1​{' '}
            </p>
          </div>
          <div className="w-5 py-3 order-1">
            <img src={peli4} width={300} alt="poster-evangelion" />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          <span>© 2021 Company, INC</span>
          <Button onClick={scrollToTop} variant="outline-primary">
            Back to Top
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Main;
