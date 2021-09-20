import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import shinji from '../assets/images/card-shinji.png';
import '../assets/styles/Main.scss';

function Shinji() {
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
        <h1 className="text-center">Shinji Ikari</h1>
        <p className="float-start mt-3">
          <img src={shinji} alt="shinji" className="float-start p-4 img-fl" />
          Alrededor de la edad de tres años, Shinji perdió a su madre y cayó en
          un considerable trauma que tuvo efectos persistentes sobre él. Después
          de ser abandonado por su padre Gendo Ikari, Shinji vivió durante once
          años junto a su sensei. Shinji aparece por primera vez en los primeros
          minutos del episodio 01. El joven ha sido citado a Tokio-3 por su
          padre. Mientras espera a que vayan a buscarlo, Shinji es testigo del
          ataque del ángel Sachiel. Misato Katsuragi lo rescata justo a tiempo,
          y escapan a toda velocidad en su Renault Alpine A310. En la base de
          NERV, Shinji se entera de los verdaderos motivos de su padre:
          designarlo como piloto del Evangelion Unidad 01. Shinji se niega al
          ver que su padre sólo quiere utilizarlo. Ante esta situación, Gendo
          decide utilizar a Rei Ayanami, que está gravemente herida y envuelta
          en vendajes. Este acto de crueldad hace cambiar de parecer a Shinji,
          que finalmente decide pilotar la Unidad-01. A bordo del Evangelion,
          Shinji es dejado inconsciente al poco tiempo de comenzar la batalla,
          pero súbitamente el EVA entra en modo berserk, actúa por sí mismo y
          destruye al ángel. Poco después de la derrota del ángel, Misato
          Katsuragi se lleva a Shinji a vivir con ella en lugar de dejarlo vivir
          por su cuenta. Varias semanas más tarde, Shinji comienza a asistir a
          la escuela, donde conoce a Toji, Kensuke y Hikari. Cuando se descubre
          que Shinji es el piloto del Evangelion Unidad 01, Toji lo golpea, en
          represalia por haber resultado su hermana pequeña herida en la batalla
          contra el ángel. Evangelion unidad1-testipe.jpg Poco después, el ángel
          Shamshel ataca, y Shinji pilota la Unidad-01 una vez más. Durante la
          batalla, el cable umbilical es cortado, y la Unidad-01 opera con
          límite de energía. Para empeorar la situación, Toji y Kensuke se
          escapan del refugio y van a ver el combate, complicándole las cosas a
          Shinji, que debe rescatarlos. Shinji desobedece la orden de retirada
          de Misato, y ataca a Shamshel con su cuchillo progresivo, corriendo un
          riesgo innecesario y derrotándolo de milagro. Debido a esto, ella lo
          regaña severamente y Shinji decide escapar de casa, pasando varios
          días vagando por la ciudad. En las afueras de Tokio-3 se encuentra con
          Kensuke, que estaba acampando, y pasa la noche con él. Kensuke le
          cuenta que Toji se sentía mal por haberlo golpeado, y estaba
          preocupado por él. Al día siguiente, los agentes del Departamento de
          Inteligencia de NERV los encuentran y se llevan a Shinji. Luego de
          hablar con Misato sin llegar a un acuerdo, el joven Ikari decide tomar
          un tren para irse definitivamente. En la estación se encuentra con
          Toji y Kensuke, que habían anticipado su partida y fueron a
          despedirse. Pensando que jamás se volverían a ver, Toji se disculpa
          con Shinji y le pide que lo golpee, para que puedan estar en paz.
          Después de esta reunión, Shinji se da cuenta que ahora tiene dos
          nuevos amigos. Finalmente, Misato logra entender sus sentimientos,
          haciendo las paces y logrando que el chico se quede en NERV. Más
          tarde, Shinji ve a Rei charlando con Gendo, quien tiene quemaduras en
          sus manos. Después de preguntar a Ritsuko Akagi sobre ello, ella
          describe un incidente en el que Gendo puso las manos en metal caliente
          para salvar a Rei, a lo que Shinji se muestra escéptico. Shinji
          comienza sentir curiosidad por Rei, sobre todo al ver que ella siempre
          está sola. Episodio 5 Ayanami Rei sale de la ducha.jpg Poco después,
          Misato invita a Ritsuko a comer a su apartamento. Durante la reunión,
          Ritsuko dice que olvidó entregarle la nueva identificación de
          seguridad a Rei y le pide a Shinji que se la entregue. Al día
          siguiente, Shinji acude al apartamento de Rei. Primero toca el timbre,
          pero no funciona, así que decide entrar. En la habitación, ve las
          gafas de su padre y las sujeta. En ese momento, Rei sale desnuda de la
          ducha. Parece molesta al ver que Shinji sujeta las gafas. Cuando ella
          intenta quitárselas, Shinji torpemente se cae encima de ella, tocando
          su cuerpo. Shinji se pone muy nervioso y no sabe qué hacer, pero ella
          no muestra vergüenza o malestar alguno. Un poco conmocionado, Shinji
          sigue a Rei a NERV, dándole su tarjeta de identificación. Rei se
          dirige a la base para realizar el experimento de reactivación del
          Evangelion Unidad 00. En el camino, Shinji habla despectivamente sobre
          Gendo y por eso Rei le da una bofetada. Después del experimento,
          Ramiel ataca y Gendo ordena el lanzamiento de la Unidad-01 con Shinji
          como piloto. Shinji es golpeado inmediatamente por un poderoso rayo de
          energía de Ramiel y es retirado inmediatamente por orden de Misato.
          Cuando Shinji despierta, se encuentra en el hospital y Rei le explica
          los detalles de la Operación Yashima.{' '}
        </p>
      </div>
    </>
  );
}

export default Shinji;
