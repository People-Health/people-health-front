import Image from 'next/image'
import style from "../../app/exam-user/exam-user.module.css"

import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from '../component.logoFaixa/logoFaixa';

export default function Exam() {
    return (
        
        <div>
            <LogoFaixa/>
            <Header option={2}/>
            <div className={style.fundo}>
                <div className={style.titulo}>Exames:</div>

                <div className={style.exam}>
                    <h1>Exame 1</h1>
                    <h1>Exame 2</h1>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}