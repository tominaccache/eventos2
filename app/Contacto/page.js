import Styles from './page.module.css';

export default function Contact() {
    return (
      <div className={Styles.container}>
        <h1 className={Styles.title}>Contacto</h1>
        <p className={Styles.description}>
          Si tienes preguntas o necesitas más información, no dudes en contactarnos.
        </p>
        <form className={Styles.formContacto}>
        <label className={Styles.label}>Nombre *</label>
        <input  type="text" name="nombre"className={Styles.input} required />

        <label className={Styles.label}>Email *</label>
        <input type="email" name="email" className={Styles.input} required />

        <label className={Styles.label}>Mensaje *</label>
        <textarea name="textarea" className={Styles.input} required></textarea>

        <button type="submit" className={Styles.enviar}>Enviar</button>
      </form>
  
      </div>
    );
  }