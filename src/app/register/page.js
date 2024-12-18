"use client"; 
import styles from './page.module.css'; 
import { useState } from 'react'; 
import { usePathname } from 'next/navigation'; 

export default function Register() { 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, username: email, password: password }),
      });

      if (res.statusText == "Created") { 
        window.location.href = '/login'; 
      } else {
        alert('Error al registrarse');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registrarse</h1>
      <form onSubmit={handleRegister} className={styles.formContacto}>
        <label className={styles.label}>Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.input}
          required
        />
        <label className={styles.label}>Apellido</label>
        <input
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
          required
        />
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
        <button type="submit" className={styles.enviar}>Registrarse</button>
      </form>
    </div>
  );
}
