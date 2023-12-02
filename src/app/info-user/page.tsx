import Image from 'next/image'
import style from "../../app/info-user/info-user.module.css"

import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from '../component.logoFaixa/logoFaixa';
import fotoperfil from 'public/fotoperfil.png'

export default function Info() {
    return (
        <main>
        <div>
            <LogoFaixa/>
            <Header option={2}/>
        </div>
        <div className={style.fundo}>
            <div className={style.lousa}>
                <div className={style.titulo}>
                    <h1>Informações do Pessoais</h1>
                </div>
                <div className={style.imgperfil}>
                    <Image src={fotoperfil} alt="fotoperfil"/>
                </div>
            </div>
        </div>

        <Footer/>
        </main>
        
    )
}