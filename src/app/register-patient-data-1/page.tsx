'use client'
import Image from "next/image";
import style from "../register-patient-data-1/register1.module.css"
import Link from "next/link";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";

import ExamInput from "../component.exam-input-doctor/exam-input";
import {useState} from "react";

export default function Info() {
    return (
        <div>
            <LogoFaixa/>
            <Header option={1}/>

            <div className={style.titulo}>
                <h1>
                    Cadastrar Paciente
                </h1>                
            </div>

            <div className={style.duasLousas}>
                <div>
                    <h1 className={style.titulozinho}>Informações Pessoais</h1>
                </div>

                <div>
                    <h1 className={style.titulozinho}>Informações Clínicas</h1>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

