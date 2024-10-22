import styles from './eventoDetalle.module.css';

const EventoDetalle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.eventoinfo}>
      <h1 className={styles.titulo}>Detalle del Evento</h1>
        <h2 className={styles.subtitulo}>NombreXXX</h2>
        <p className={styles.eventofecha}>Fecha: XXXXXX</p>
        <p className={styles.eventohora}>Hora: XXXX hs</p>
        <p className={styles.eventolugar}>Lugar: XXXXXXXXXXX</p>


        <h3 className={styles.subtitulo}>Descripción del Evento</h3>
        <p className={styles.descevento}>
          Este evento es una oportunidad única para disfrutar de una experiencia inolvidable. Con una 
          combinación de entretenimiento, educación, y networking, el evento está diseñado para ofrecer 
          algo para todos. Los asistentes tendrán la oportunidad de aprender de expertos de la industria, 
          interactuar con otros participantes y disfrutar de actividades especiales.
        </p>


        <h3 className={styles.subtitulo}>Oradores</h3>
        <ul className={styles.lista}>
          <li className={styles.orador}>Dr. Juan Pérez - Experto en Tecnología</li>
          <li className={styles.orador}>Lic. María García - Consultora de Marketing Digital</li>
          <li className={styles.orador}>Ing. Carlos Rodríguez - Innovación y Emprendimiento</li>
        </ul>
      </div>

    </div>
  );
};

export default EventoDetalle;
