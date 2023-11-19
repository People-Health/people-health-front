import style from './header.module.css';
import ComercialPage from '../page';
import Link from 'next/link';
import Image from 'next/image';
import logoRed from '../../../public/favicon.ico';


type HeaderProps = {
    option: number;
  };
  
  const Header: React.FC<HeaderProps> = ({ option }) => {
    if(option==0){//menu página comercial
        return (
            <header className={style.header}>

                <div className={style.menuBtnsContainer}>
                    <Image width={40} src={logoRed} className={style.button} alt="logo"/>
                    <button  className={style.button}><Link href="/">Início</Link></button>
                    <button className={style.button}>Sobre nós</button>
                    <button className={style.button} >Serviços</button>
                    <button className={style.button}>Contato</button>
                </div>
                <button className={style.logInOutBtn}><Link href="/loginn">Login</Link></button>
            
            </header>
          );

    }
    if(option==1){//menu médico
        return (
            <header className={style.header}>
                <div className={style.menuBtnsContainer}>
                    <Image width={40} src={logoRed}  alt="logo"/>
                    <button className={style.button}><Link href="">Início</Link></button>
                    <button className={style.button}>Consultar paciente</button>
                    <button className={style.button}>Cadastrar paciente</button>
                    <button className={style.button}>Atualizar dados paciente</button>
                    <button className={style.button}>Mapa</button>
                </div>
                <button className={style.logInOutBtn}><Link href="/">logout</Link></button>
            </header>
          );
    }
    if(option==2){//menu paciente

        return(
            <header className={style.header}>
            <div className={style.menuBtnsContainer}>
                <Image width={40} src={logoRed}  alt="logo"/>
                <button className={style.button}><Link href="">Início</Link></button>
                <button className={style.button}>Exames</button>
                <button className={style.button}>Dados médicos</button>
            </div>
            <button className={style.logInOutBtn}><Link href="/">logout</Link></button>
        </header>
        );

    }
   
  
  };
  
  export default Header;