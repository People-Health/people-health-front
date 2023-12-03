import Image from "next/image";
import style from "../styles/home.module.css";
import logo from "../../public/logo.png";
import logoWhats from "../../public/logoWhats.png";
import logoRed from "../../public/favicon.ico";
import doctor2 from "../../public/doctor2.jpg";
import doctor from "../../public/doctor.png";
import varios_medicos from "../../public/varios_medicos.png";
import exame2 from "../../public/exame2.jpg";
import femaleDoctors from "../../public/femaleDoctors.jpg";
import femaleDoctors2 from "people-health-frontpublic\femaleDoctors.jpg";

import Link from "next/link";
import Footer from "./component.footer/footer";
import Header from "./component.header/header";
import FaixaLogo from "./component.logoFaixa/logoFaixa";
import LogoFaixa from "./component.logoFaixa/logoFaixa";

export default function Home() {
  return (
    <>
      <main className={style.container}>
        <LogoFaixa />

        <Header option={0} />

        <div className={style.doctor}>
          <Image  src={doctor} alt="doctor" />
        </div>

        <div className={style.parcerias}>
          <div className={style.parceria1}>
            <h1>Parceria com Hospitais</h1>
          </div>
          <div className={style.parceria2}>
            <h1>Parceria com Convênios</h1>
          </div>
        </div>

        <div className={style.azulClaro1}>
          <h1 id="sobrenos" >Bem Vindo ao People Health!</h1>
        </div>

        <div className={style.azulEscuro}>
          <h1>Não poupamos esforço para garantir sua saúde e bem estar!</h1>
        </div>

        <div className={style.pretaMiuda}>
          <h2 className={style.centralizarTXT}>
            A People Health surgiu com o intuito de simplificar processos
            repetitivos para que juntos possamos maximizar a eficiência na área
            hospilar
          </h2>
        </div>

        <div className={style.variosMedicos}>
          <Image src={varios_medicos} alt="varios_medicos" />
        </div>

        <div>
          <h1 className={style.azulClaro2}>
            Promovendo a saúde e confiabilidade
          </h1>
          <h2 id="servicos" className={style.azulEscuro}>Nossos serviços</h2>
        </div>
          
        <div className={style.lousaservico}>
          <div className={style.coluna1}>
            <h1 className={style.titulozinho} >Nosso compromisso é com a sua saúde!</h1>
            <h2 className={style.servicos}>● Sistema para os Hospitais</h2>
            <h2 className={style.servicos}>● Rastreamento em tempo real das Ambulâncias</h2>
            <h2 className={style.servicos}>● Aplicativo para os Pacientes</h2>
            <h2 className={style.servicos}>● Upsell para Convênios</h2>

            <h3 className={style.explicacao}>● Aplicativo e site para pacientes: Os pacientes poderão entrar no nosso aplicativo e site para consultar suas informações clínicas, como exames já realizados,cirurgias, tipo sanguíneo,alergia de medicações, entre outros.</h3>
            <h3 className={style.explicacao}>● Sistema global dos hospitais: Para evitar o processo de cadastro de novos pacientes quando são novos em um hospital,utilize o sistema de gerenciamento de informações clínicas para agilizar o atendimento ao máximo.</h3>
            <h3 className={style.explicacao}>● Rastreio de ambulâncias: Todas as ambulâncias dos hospitais serão rastreadas em tempo real para aumentar a eficiência no atendimento de emergências.</h3>
            <h3 className={style.explicacao}>● Convênios poderão utilizar: Os convênios poderão oferecer um cadastro no  sistema para seus clientes para aumentar a eficiência no atendimento de todos.</h3>

          </div>
          <div className={style.coluna2}>
            <Image className={style.imgservicos} src={exame2} alt="exame2" />
            <Image className={style.imgservicos} src={femaleDoctors} alt="femaleDoctors" />
          </div>
        </div>        
      </main>
      <Footer />
    </>
  );
}
//Comentario
