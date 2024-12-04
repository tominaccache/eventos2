"use client"; // Asegúrate de que el archivo sea un Client Component
import Styles from './style.module.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'; 
import { TokenContext } from "../../context/TokenContext";

export default function UserMenu() {
  const { token, name, setToken,logout } = useContext(TokenContext);
  const borrarLS = () => {
    logout(); 
    window.location.href = '/'; 
  };


  return (
    <div className={Styles.userMenu}>
      {token ? (
        <div>
          <p>{name}</p>
          <Link href="/FormularioEvento">

          <button className={Styles.button}>Crear Evento</button>
          </Link>

          <button className={Styles.button} onClick={borrarLS}>Cerrar Sesión</button>
          
        </div>
      ) : (
        <div>
          <Link href="/login">
            <button className={Styles.button}>Iniciar Sesión</button>
          </Link>
          <Link href="/register">
            <button className={Styles.button2}>Registrarse</button>
          </Link>
        </div>
      )}
    </div>
  );
}
