import Image from 'next/image'
import style from "../../app/info/info.module.css"

import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from '../component.logoFaixa/logoFaixa';

export default function Info() {
    return (
        <div>
            <LogoFaixa/>
            <Header option={2}/>
            <div className={style.teste}>
                <h1>Informações Pessoais</h1>
            </div>
            <Footer/>
        </div>
    )
}