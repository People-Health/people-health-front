import style from "./header.module.css";
import ComercialPage from "../page";
import Link from "next/link";
import Image from "next/image";
import logoRed from "../../../public/favicon.ico";
import logo from "../../../public/logo.png";

type HeaderProps = {
  option: number;
};

const Header: React.FC<HeaderProps> = ({ option }) => {
  if (option == 0) {
    //menu página comercial
    return (
      <header className={style.header}>
        <div className={style.menuBtnsContainer}>
          {/* <Image
            width={40}
            src={logoRed}
            style={{ paddingRight: "10px" }}
            alt="logo"
          /> */}
          <button className={style.button}>
            <Link href="/">Início</Link>
          </button>

          <button className={style.button}>
          <Link href="/#sobrenos">
            Sobre nós
          </Link>
          </button>

          <button className={style.button}>
          <Link href="/#servicos">
            Serviços
          </Link>
          </button>

          <button className={style.button}>
          <Link href="/#contato">
            Contato
          </Link>
            </button>

        </div>
        <button className={style.logInOutBtn}>
          <Link href="/login">Login</Link>
        </button>
      </header>
    );
  }
  if (option == 1) {
    //menu médico
    return (
      <header className={style.header}>
        <div className={style.menuBtnsContainer}>
          {/* <Image
            width={40}
            src={logoRed}
            style={{ paddingRight: "10px" }}
            alt="logo"
          /> */}
          <button className={style.button}>
            <Link href="/info-doctor">Início</Link>
          </button>
          <button className={style.button}>
            <Link href="/search-patient">Consultar Paciente</Link>
          </button>
          <button className={style.button}>
          <Link href="/register-patient-data-1">Cadastrar Paciente</Link>
          </button>
          <button className={style.button}><Link href="/map">Mapa</Link></button>
        </div>
        <button className={style.logInOutBtn}>
          <Link href="/login">Logout</Link>
        </button>
      </header>
    );
  }
  if (option == 2) {
    //menu paciente

    return (
      <header className={style.header}>
        <div className={style.menuBtnsContainer}>
          {/* <Image
            width={40}
            src={logoRed}
            style={{ paddingRight: "10px" }}
            alt="logo"
          /> */}
          <button className={style.button}>
            <Link href="/info-user">Início</Link>
          </button>

          <button className={style.button}>
            <Link href="/exam-user">Exames</Link>
          </button>

          <button className={style.button}>
            <Link href="/medical-data-user">Ficha Médica</Link>
          </button>

        </div>
        <button className={style.logInOutBtn}>
          <Link href="/login">Logout</Link>
        </button>
      </header>
    );
  }
};

export default Header;
