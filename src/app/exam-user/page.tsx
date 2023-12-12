import Image from 'next/image'
import style from "../../app/exam-user/exam-user.module.css"

import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from '../component.logoFaixa/logoFaixa';
import ExamComponent from '../component.exam/exam';

export default function Exam() {
    return (
        
        <div>
            <LogoFaixa/>
            <Header option={1}/>
            <div className={style.fundo}>
                <div className={style.titulo}>Exames:</div>

                <div className={style.exam}>
                    <ExamComponent
                        title={'Ressonância'} 
                        local='Hospital samaritano'
                        date='03/05/1999'
                        category='Exame' 
                        file='No file'/>

                        <ExamComponent
                        title={'Hemograma'} 
                        local='Hospital da Sé'
                        date='07/09/1989'
                        category='Exame' 
                        file='No file'/>

                        <ExamComponent
                        title={'Retirada de apêndice'} 
                        local='Hospital Santa Maria'
                        date='07/10/1988'
                        category='Cirurgia' 
                        file='No file'/>

                          <ExamComponent
                        title={'Eletrocardiograma'} 
                        local='Laboratório Sabin'
                        date='09/12/2023'
                        category='Exame' 
                        file='No file'/>
                   
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}