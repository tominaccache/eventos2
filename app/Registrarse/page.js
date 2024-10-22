import Styles from './page.module.css';
import Link from 'next/link';

const Registrarse = () => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Registrarse aquí</h1>
            <form className={Styles.form}>
                <input className={Styles.input} type="text" placeholder="Nombre" required />
                <input className={Styles.input} type="text" placeholder="Apellido" required />
                <input 
                    className={Styles.input} 
                    type="tel" 
                    placeholder="Teléfono ej: 11 2121-4568" 
                    required 
                    pattern="^\d{2} \d{4}-\d{4}$"
                />
                <input className={Styles.input} type="text" placeholder="País" required />
                <input className={Styles.input} type="text" placeholder="Ciudad" required />
                <input className={Styles.input} type="date" placeholder="Fecha de Nacimiento" required />
                <input className={Styles.input} type="email" placeholder="Correo Electrónico" required />
                <input 
                    className={Styles.input} 
                    type="password" 
                    placeholder="Contraseña" 
                    required 
                    minLength={4} 
                    maxLength={20} 
                />
                <input 
                    className={Styles.input} 
                    type="password" 
                    placeholder="Repite la contraseña" 
                    required 
                    minLength={4} 
                    maxLength={20} 
                />
                <button className={Styles.button} type="submit">Registrarse</button>
                <p className={Styles.p}>¿Ya estás logeado? <Link href="/" className={Styles.link}>Inicie sesión</Link></p>
            </form>
        </div>
    );
};

export default Registrarse;
