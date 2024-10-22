import Styles from './Login.module.css';
import Link from 'next/link';

const Login = () => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Inicie sesión</h1>
            <form className={Styles.form}>
                <input className={Styles.input} type="email" placeholder="Correo Electrónico" required />
                <input 
                    className={Styles.input} 
                    type="password" 
                    placeholder="Contraseña" 
                    required 
                    minLength={4} 
                    maxLength={20} 
                />
                <button className={Styles.button} type="submit">Iniciar sesión</button>
                <p className={Styles.p}>¿No tienes cuenta? <Link href="/Registrarse" className={Styles.link}>Registrese</Link></p>
            </form>
        </div>
    );
};

export default Login;
