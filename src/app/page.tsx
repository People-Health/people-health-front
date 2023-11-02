import Image from 'next/image'
import style from "../styles/home.module.css"
import Head from 'next/head'
import logo from "../../public/logo.png"

export default function Home() {
  return (
    <main className={style.container}>

      <Head>
        <title>Home | People Health</title>
      </Head>
      <div className={style.logo}><Image src={logo} alt="logo" /></div>
      <header className={style.header}>
        <div className={style.menu}>
          <span>Início</span>
          <span>Sobre Nós</span>
          <span>Serviços</span>
          <span>Contato</span>
          </div>
          <div className={style.button}>
            <button>Login</button>
            <button>Cadastre-se</button>
          </div>
          
      </header>
    </main>
  )
} 