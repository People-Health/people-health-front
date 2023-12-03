import Image from 'next/image'
import Link from 'next/link'
import style from "../../app/medical-data-user/medical-data-user.module.css"

import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from '../component.logoFaixa/logoFaixa';

export default function MedicalData() {
    return (
        
        <div>
            <LogoFaixa/>
            <Header option={2}/>
            <div className={style.fundo}>
                <div className={style.titulo}>
                    <h1>Dados Médicos:</h1>
                </div>
                <div>
                    <div className={style.tituloexam}>
                        <h1>Medicações em Uso:</h1>                            
                        <button className={style.button}>
                            <Link href="medical-data-user">+ Observações</Link>
                        </button>
                    </div>

                    <div>
                        <h2 className={style.dadosExam}>Rivotril</h2>
                        <h2 className={style.dadosExam}>Ritalina</h2>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}