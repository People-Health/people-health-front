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
                <div className={style.lousapequena}>
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
            <Footer/>
        </div>
    )
}