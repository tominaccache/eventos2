import Styles from './style.module.css';

export default function Footer() {
  return (
<footer className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.separacion}>
          <ul className={Styles.links}>
            <li><p className={Styles.textfooter}>Términos de Servicio</p></li>
            <li><p className={Styles.textfooter}>Política de Privacidad</p></li>
          </ul>
          <div>
            <h2 className={Styles.textfooter}>Información</h2>
            <p className={Styles.textfooter}>
              <strong>Email:</strong> contacto@eventos.com<br />
              <strong>Teléfono:</strong> +54 9 1234 5678
            </p>
          </div>
          <div>
            <h2 className={Styles.textfooter}>Síguenos en Redes Sociales</h2>
            <ul className={Styles.socialMedia}>
              <li><a href="https://facebook.com" className={Styles.link}>Facebook</a></li>
              <li><a href="https://twitter.com" className={Styles.link}>Twitter</a></li>
              <li><a href="https://instagram.com" className={Styles.link}>Instagram</a></li>
            </ul>
          </div>
        </div>
        <p>© 2024 EventoGo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
