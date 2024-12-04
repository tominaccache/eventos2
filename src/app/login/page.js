"use client";
import styles from './page.module.css';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TokenContext } from "../context/TokenContext";
import { setCookie } from 'nookies';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { saveToken, setName } = useContext(TokenContext);
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        saveToken(data.token);
        window.location.href = '/';
      } else {
        alert('Error al iniciar sesión: ' + data.message);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className={styles.formContacto}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <label className={styles.label}>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.enviar}>Ingresar</button>
      </form>
    </div>
  );
}
