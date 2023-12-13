import Image from 'next/image'
import style from "../../app/info-user/info-user.module.css"

import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from '../component.logoFaixa/logoFaixa';
import fotoperfil from "../../../public/fotoperfil.png";

export default function Info() {
    return (
        <main>
        <div>
            <LogoFaixa/>
            <Header option={2}/>
        </div>
        <div className={style.fundo}>
            <div className={style.lousapequena}>
                <h1>Informações Pessoais</h1>
            </div>
            <div className={style.lousagrande}>
                <Image className={style.imgperfil} src={fotoperfil} alt="fotoperfil"/>
                <div className={style.lousadados}>
                    <h1>Nome:</h1>
                    <h1>Idade:</h1>
                    <h1>CPF:</h1>
                    {/* <h1>Cargo:</h1> */}
                </div>
                <div className={style.dadosrecebidos}>
                    <h1>João da Silva</h1>
                    <h1>25</h1>
                    <h1>123.456.789-10</h1>
                    {/* <h1>Clínico Geral</h1> */}
                </div>             
            </div>
        </div>

        <Footer/>
        </main>
        
    )
}