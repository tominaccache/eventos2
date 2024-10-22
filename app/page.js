import Image from "next/image";
import styles from "./page.module.css";
import Registrarse from"./Registrarse/page";
import PantallaPrincipal from "./Home/page";
import Login from "./components/Login/Login";


export default function Home() {
  return (
    <div >
      <Login/>
    </div>
  );
}
