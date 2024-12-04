import styles from './page.module.css';

export default function Contacto() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacto</h1>
      <p className={styles.description}>
        Si tienes preguntas o necesitas más información, no dudes en contactarnos.
      </p>
      <p>Email: contacto@eventos.com</p>
      <p>Teléfono: +54 9 1234 5678</p>
      
      <form className={styles.formContacto}>
        <label className={styles.label}>Nombre *</label>
        <input type="text" name="nombre" className={styles.input} required />

        <label className={styles.label}>Email *</label>
        <input type="email" name="email" className={styles.input} required />

        <label className={styles.label}>Mensaje *</label>
        <textarea name="textarea" className={styles.input} required></textarea>

        <button type="submit" className={styles.enviar}>Enviar</button>
      </form>
    </div>
  );
}