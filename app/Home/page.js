import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a EventoGo</h1>
      <p className={styles.description}>
        Tu plataforma para descubrir y gestionar eventos emocionantes.
      </p>

      <section className={styles.events}>
        <h2 className={styles.eventsTitle}>Eventos Destacados</h2>
        <div className={styles.eventList}>
          <div className={styles.eventCard}>
            <h3 className={styles.h3}>Evento 1</h3>
            <p className={styles.p}>Descripción breve del evento 1.</p>
            <Link className={styles.link} href="/eventoDetalle">
            <h2 >Ver más</h2>
          </Link>
           
          </div>
          <div className={styles.eventCard}>
            <h3 className={styles.h3}>Evento 2</h3>
            <p className={styles.p}>Descripción breve del evento 2.</p>
            <Link className={styles.link} href="/eventoDetalle">
            <h2 >Ver más</h2>
          </Link>
          </div>
          <div className={styles.eventCard}>
            <h3 className={styles.h3}>Evento 3</h3>
            <p className={styles.p}>Descripción breve del evento 3.</p>
            <Link className={styles.link} href="/eventoDetalle">
            <h2 >Ver más</h2>
          </Link>
          </div>

        </div>
      </section>


    </div>
  );
}
