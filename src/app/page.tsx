import Image from 'next/image'
import style from "../styles/home.module.css"
import logo from "../../public/logo.png";
import logoWhats from "../../public/logoWhats.png";
import logoRed from "../../public/favicon.ico";
import doctor2 from "../../public/doctor2.jpg";
import doctor from "../../public/doctor.png";
import varios_medicos from "../../public/varios_medicos.png"
import exame2 from "../../public/exame2.jpg"
import femaleDoctors from "../../public/femaleDoctors.jpg";
import femaleDoctors2 from "people-health-front\public\femaleDoctors.jpg";

import Link from 'next/link';
import Footer from './footer/footer';
import Header from './header/header';
import FaixaLogo from './logoFaixa/logoFaixa';
import LogoFaixa from './logoFaixa/logoFaixa';


export default function Home() {
  return (
    <>
    <main className={style.container}>
      <LogoFaixa/> 

      <Header option={0}/>

      <div className={style.doctor}>
        <Image src={doctor} alt="doctor"/>  
      </div>

      <div className={style.parcerias}>
        <div className={style.parceria1}>
          <h1>Parceria com Hospitais</h1>
        </div>
        <div className={style.parceria2}>
          <h1>Parceria com Convênios</h1>
        </div>
      </div>

      <div className={style.azulClaro}>
        <h1>Bem Vindo ao People Health!</h1>
      </div>

      <div className={style.azulEscuro}>
        <h1>Não poupamos esforço para garantir sua saúde e bem estar!</h1>
      </div>

      <div className={style.pretaMiuda}>
        <h2 className={style.centralizarTXT}>A People Health surgiu com o intuito de simplificar processos repetitivos para que juntos
         possamos maximizar a eficiência na área hospilar</h2>
      </div>

      <div className={style.variosMedicos}>
        <Image src={varios_medicos} alt="varios_medicos"/>
      </div>

      <div>
        <h1 className={style.azulClaro}>Promovendo a saúde e confiabilidade</h1>
        <h2 className={style.azulEscuro}>Nossos serviços</h2>
      </div>

      <div className={style.fim}></div>

      

      <div className={style.areaServicos}>
        <h1 className={style.TXTservicos}>Esse texto</h1>

        <div className={style.exame}>
        <Image src={exame2} alt="exame"/>
        </div>

        <div className={style.femaleDoctors}>
        <Image src={femaleDoctors} alt="doutoras"/>
        </div>
      </div>

    </main>
    <Footer/>

    </>
  )
} 
//Comentario