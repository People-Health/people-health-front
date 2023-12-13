import Image from 'next/image'
import style from "../../app/result-patient-search/result.module.css"

import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from '../component.logoFaixa/logoFaixa';
import fotoperfil from "public/fotoperfil.png";
import ExamComponent from '../component.exam/exam';


export default function Info() {
    return (
        <main>
            <div>
                <LogoFaixa />
                <Header option={1} />

                <div className={style.fundo1}>
                    <div className={style.lousapequena1}>
                        <h1>Informações Pessoais</h1>
                    </div>
                    <div className={style.lousagrande1}>
                        <Image className={style.imgperfil} src={fotoperfil} alt="fotoperfil" />
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

                <div className={style.pular}></div> {/*-----------------------*/}

                <div className={style.fundo2}>
                    <div className={style.titulo}>Exames:</div>

                    <div className={style.exam}>
                        <ExamComponent
                            title={'Ressonância'}
                            local='Hospital samaritano'
                            date='03/05/1999'
                            category='Exame'
                            file='No file' />

                        <ExamComponent
                            title={'Hemograma'}
                            local='Hospital da Sé'
                            date='07/09/1989'
                            category='Exame'
                            file='No file' />

                        <ExamComponent
                            title={'Retirada de apêndice'}
                            local='Hospital Santa Maria'
                            date='07/10/1988'
                            category='Cirurgia'
                            file='No file' />

                        <ExamComponent
                            title={'Eletrocardiograma'}
                            local='Laboratório Sabin'
                            date='09/12/2023'
                            category='Exame'
                            file='No file' />

                    </div>
                </div>

                <div className={style.pular}></div> {/*-----------------------*/}

                <div className={style.fundo3}>
                <div className={style.lousapequena3}>
                    <h1>Ficha Médica</h1>
                </div>

                <div className={style.lousaFixo}>  {/*Aqui*/}
                        <h1>Medicações em Uso:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>● Rivotril</h1>
                        <h1>● Citrato</h1>              
                    </div>
                </div>

                    <hr></hr>

                <div className={style.lousaFixo}>   {/*Aqui*/}
                        <h1>Alergias:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>● Ácido Acetilsalicílico</h1>
                        <h1>● Glúten</h1>              
                    </div>
                </div>

                    <hr></hr>

                    <div className={style.lousaFixo}>   {/*Aqui*/}
                        <h1>Tipo Sanguíneo:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>● O+</h1>
                    </div>
                </div>

                    <hr></hr>

                    <div className={style.lousaFixo}>   {/*Aqui*/}
                        <h1>Patologias:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>● Diabetes</h1>
                        <h1>● Arritmia</h1>
                    </div>
                </div>

                    <hr></hr>

                <div className={style.lousaFixo}>  {/*Aqui*/}
                        <h1>Tabagismo:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>✅</h1>
                    </div>
                </div>

                    <hr></hr>
                    
                <div className={style.lousaFixo}>  {/*Aqui*/}
                        <h1>Consumo de Álcool:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>❌</h1>
                    </div>
                </div>

                    <hr></hr>

                <div className={style.lousaFixo}>  {/*Aqui*/}
                        <h1>Substâncias Ilícitas:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>❌</h1>
                    </div>
                </div>

                    <hr></hr>
                
                <div className={style.lousaFixo}>  {/*Aqui*/}
                        <h1>PCD:</h1>  

                        <button className={style.button}>
                            {/*<Link href="">*/}+ Observação{/*</button></Link>*/}
                        </button>
                </div>

                <div className={style.lousaDados}>
                    <div className={style.coluna1}>
                        <h1>✅</h1>
                    </div>
                </div>

                    <hr></hr>

            </div>

                <Footer />
            </div>
        </main>
    )
}