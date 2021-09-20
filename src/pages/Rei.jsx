import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import rei from '../assets/images/card-rei.png';
import '../assets/styles/Main.scss';

function Rei() {
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
        <h1 className="text-center">Rei Ayanami</h1>
        <p className="float-start mt-3">
          <img src={rei} alt="shinji" className="float-start p-4 img-fl" />
          La joven hace una breve aparición en los primeros minutos del episodio
          01. Desde la distancia, Rei III se manifiesta frente a Shinji Ikari y
          luego desaparece. La primera vez que vemos a Rei II (la Rei que
          aparece en la mayoría de los episodios de la serie) está gravemente
          herida y envuelta en vendajes, con tanto dolor que incluso tiene
          problemas para sentarse en la camilla. A pesar de esto, Gendo Ikari la
          trata fríamente. Probablemente usar a Rei de esta manera fue una
          artimaña de Gendo para conseguir que Shinji pilotara el Evangelion
          Unidad 01, después de ver que Misato Katsuragi y Ritsuko Akagi no
          pudieron convencerlo. Durante el episodio 02, Rei pasa frente a Shinji
          en una camilla del hospital. En los episodios 03 y 04, se puede ver
          que ella sigue envuelta en vendajes y Ritsuko realiza varios exámenes
          médicos sobre su cuerpo. En el episodio 05, se revela que Rei vive
          sola en el apartamento número 402, el cual es parte de un gran bloque
          de edificios situado en el extremo oeste de Tokio-3. A partir de este
          episodio, queda claro que ella valora muy poco su propio espacio
          personal y su comodidad. Sus lesiones fueron causadas durante el
          experimento de activación del EVA-00 realizado antes de la llegada del
          ángel Sachiel en la estación experimental 2. Cuando el proceso de
          sincronización alcanzó la tercera fase, acercándose a la frontera
          absoluta, la Unidad-00 de repente entró en modo berserk y el Entry
          Plug fue expulsado automáticamente, impactando violentamente contra el
          techo. Inmediatamente después, Ritsuko ordenó utilizar baquelita para
          inmovilizar al EVA. La joven fue gravemente herida como resultado de
          la accidentada expulsión del Plug. Gendo se quemó las manos al abrir
          la escotilla del Entry Plug para rescatarla. Es durante este incidente
          cuando Rei obtiene las gafas de Gendo, las cuales se convirtieron en
          su posesión material más preciada. Rei Ayanami en el opening.jpg
          Shinji no tarda en interesarse por ella a pesar de lo difícil que
          resulta conocerla. Después de recibir su nueva identificación de parte
          de Shinji, Rei se dirige a la base para realizar el experimento de
          reactivación de la Unidad-00. Durante el experimento, ella lleva las
          gafas de Gendo al interior del Entry Plug. Según parece, esto la ayudó
          a calmarse y así el experimento de reactivación fue exitoso. Cuando la
          activación se completa, Rei inclina su cabeza hacia atrás y una serie
          de burbujas de aire escapan de su boca. Esto indica que ella había
          contenido su respiración durante todo el experimento, debido a lo
          nerviosa que estaba. Luego, el ángel Ramiel se aproxima a Tokio-3 y
          Gendo ordena enviar a la Unidad-01. Ramiel detecta al EVA y enciende
          un rayo de partículas mortal que disparó directamente a través de un
          edificio dañando a la Unidad-01. Al darse cuenta que un EVA no podía
          acercarse lo suficiente a Ramiel para neutralizar su campo AT, a
          Misato se le ocurrió canalizar toda la potencia eléctrica de Japón en
          un nuevo rifle experimental de positrones. Mientras la Unidad-01
          dispara como francotirador, Rei abordo de la Unidad-00 le protege con
          un escudo electromagnético diseñado para soportar altas temperaturas.
          Ramiel reaccionó a los EVAs disparando su rayo al mismo tiempo que la
          Unidad-01 disparó con su rifle. Ambos haces de energía interactuaron
          entre sí al pasar uno al lado del otro, desviándose de su trayectoria.
          Ramiel disparó por segunda vez y Rei lo bloqueó con su escudo. Esto
          permitió que Shinji pudiera lanzar un segundo ataque, que atravesó el
          núcleo del ángel, destruyéndolo. Luego, Shinji rescató a Rei del
          interior del Entry Plug. En ese momento, Rei manifiesta no saber qué
          expresar y Shinji le pide una sonrisa. Ella le corresponde. La
          Unidad-00 fue gravemente dañada por el rayo de partículas del ángel y
          quedó fuera de servicio durante un tiempo. En el episodio 09, cuando
          Asuka Langley Sohryu se une al equipo, intenta interactuar con Rei sin
          demasiado éxito. Asuka le ofreció su amistad, pero Rei le respondió
          que la aceptará cuando le sea ordenado. Misato y Rei Ayanami
          Evangelion 09.jpg Poco después, Rei estuvo presente durante el
          entrenamiento de sincronización de Shinji y Asuka en el apartamento de
          Misato. Según parece, Misato decidió llevarla como compañera de
          respaldo. Luego de fallar en numerosas ocasiones, Asuka comenzó a
          quejarse haciendo énfasis en que toda la culpa la tenía Shinji. Al oír
          esto, Misato le pidió a Rei que tomase el lugar de Asuka. Y para
          sorpresa de todos, Rei sincronizaba a la perfección con Shinji. Al ver
          esto, Asuka tuvo que afrontar la realidad y superarse a sí misma,
          dando como resultado la sincronización perfecta durante el combate con
          Israfel. Después de pasar un largo periodo en reparación, la Unidad-00
          es completamente restaurada. Sin embargo, ocurre un misterioso corte
          de energía en Tokio-3 y el ángel Matariel emergió del océano. Cuando
          llegó a Tokio-3, el ángel comenzó a abrirse un túnel hacia el GeoFront
          segregando un potente ácido. Los Evangelion treparon por los túneles,
          llegando a un pozo de acceso situado bajo la posición del ángel.
          Siendo salpicados por el ácido corrosivo, los EVAS cayeron por el pozo
          y perdieron sus armas. Ante ésta difícil situación, Asuka tomó el
          mando e ideó un plan, en el cual la Unidad-02 neutralizaría el campo
          AT del ángel y les protegería del ácido, mientras que Rei saltaría al
          fondo del pozo, recuperaría el arma y se la pasaría a la Unidad-01.
          Finalmente, la Unidad-02 se apartaría del camino permitiendo a la
          Unidad-01 disparar al ángel. El plan fue ejecutado perfectamente, y
          Matariel murió cuándo la Unidad-01 disparó sobre él con el pallet
          rifle.
        </p>
      </div>
    </>
  );
}

export default Rei;
