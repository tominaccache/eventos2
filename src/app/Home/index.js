'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/event/');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Cargando eventos...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explora Nuestros Eventos</h1>
      {events.length === 0 ? (
        <p className={styles.noEvents}>No hay eventos disponibles por ahora. ¡Vuelve pronto!</p>
      ) : (
        <ul className={styles.eventList}>
          {events.map((event) => (
            <li key={event.id} className={styles.eventItem}>
              <Link href={`/eventos/${event.id}`} className={styles.link}>
                <div className={styles.eventCard}>
                  <h2 className={styles.eventName}>{event.name}</h2>
                  <p className={styles.eventDescription}>{event.description}</p>
                  <div className={styles.eventDetails}>
                    <span className={styles.eventDate}>
                      📅 {new Date(event.start_date).toLocaleDateString()}
                    </span>
                    <span className={styles.eventPrice}>💵 ${event.price}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
