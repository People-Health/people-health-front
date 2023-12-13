"use client";
import Image from "next/image";
import style from "../register-patient-data-1/register1.module.css"
import Link from "next/link";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";

import ExamInput from "../component.exam-input-doctor/exam-input";
import React, { useState } from "react";
import { formattedCpf } from "../../utils/cpfFormated";
import { formattedRg } from "../../utils/rgFormated";
import { formattedData } from "../../utils/dataFormated";


export default function Info() {
    const [value, setValue] = useState("");

    const handleChangeCPF = (event: any) => {
        const formattedCPFValue = formattedCpf(event.target.value);
        setValue(formattedCPFValue);
    };

    const [valor, setValor] = useState("");

    const handleChangeRG = (event: any) => {
        const formattedRGValor = formattedRg(event.target.valor);
        setValor(formattedRGValor);
    };

    const [valorData, setValorData] = useState("");
    const handleChangeData = (event: any) => {
        const formattedDataValor = formattedData(event.target.valor);
        setValorData(formattedDataValor);
    };
        const [examInputIds,setExamInputIds]=useState<number[]>([]);
        
        function removeExamInput(id:number){
         setExamInputIds(examInputIds.filter((value)=>value!==id))
        }
        function addExamInput(){
          const id=Date.now();
         setExamInputIds([...examInputIds,id]);
         
       }

    return (
        <>
            <main>
                <div>
                    <LogoFaixa />
                    <Header option={1} />

                    <div className={style.titulo}>
                        <h1>
                            Cadastrar Paciente
                        </h1>
                    </div>

                    <div className={style.duasLousas}>
                        <div>
                            <h1 className={style.titulozinho}>Informações Pessoais</h1>
                            <div className={style.coluna}>

                                <div className={style.inputContainer}>
                                    <input
                                        type="text"
                                        className={style.inputField}
                                        placeholder=""
                                        name="cpf"
                                    />
                                    <label className={style.inputPlaceholder}>Nome Completo</label>
                                </div>

                                <div className={style.inputContainer}>
                                    <input
                                        type="date"
                                        className={style.inputField}
                                        placeholder=""
                                        name="data"
                                        maxLength={8}
                                    />
                                    <label className={style.inputPlaceholder}>Data de Nascimento</label>
                                </div>

                                <div className={style.inputContainer}>
                                    <input
                                        type="text"
                                        className={style.inputField}
                                        placeholder=""
                                        name="cpf"
                                        maxLength={14}
                                        onChange={handleChangeCPF}
                                        value={value}
                                    />
                                    <label className={style.inputPlaceholder}>CPF *</label>
                                </div>

                                <div className={style.inputContainer}>
                                    <input
                                        type="text"
                                        className={style.inputField}
                                        placeholder=""
                                        name="rg"
                                        onChange={handleChangeRG}
                                        value={valor}
                                    />
                                    <label className={style.inputPlaceholder}>RG *</label>
                                </div>

                            </div>
                        </div>


                        <div>
                            <h1 className={style.titulozinho}>Informações Clínicas</h1>
                            <div className={style.coluna}>

                                <div className={style.inputContainer}>
                                    <input
                                        type="text"
                                        className={style.inputField}
                                        placeholder=""
                                        name="medicacao"
                                    />
                                    <label className={style.inputPlaceholder}>Medicação</label>
                                </div>

                                <div className={style.inputContainer}>
                                    <input
                                        type="text"
                                        className={style.inputField}
                                        placeholder=""
                                        name="alergia"
                                    />
                                    <label className={style.inputPlaceholder}>Alergia</label>
                                </div>

                                <div className={style.inputContainer}>
                                    <input
                                        type="text"
                                        className={style.inputField}
                                        placeholder=""
                                        name="patologia"
                                    />
                                    <label className={style.inputPlaceholder}>Patologia</label>
                                </div>

                                <label
                                    className={style.infos}
                                    style={{
                                        display: "flex",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <h1 className={style.margin}>
                                        Tipo Sanguíneo:
                                    </h1>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="A+"
                                            name="A+"
                                            value="a+"
                                        />
                                        <label htmlFor="tabagismo-sim">A+</label>
                                    </div>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="A-"
                                            name="A-"
                                            value="a-"
                                        />
                                        <label htmlFor="tabagismo-nao">A-</label>
                                    </div>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="B+"
                                            name="B+"
                                            value="B+"
                                        />
                                        <label htmlFor="tabagismo-nao">B+</label>
                                    </div>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="B-"
                                            name="B-"
                                            value="B-"
                                        />
                                        <label htmlFor="tabagismo-nao">B-</label>
                                    </div>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="O-"
                                            name="O-"
                                            value="O-"
                                        />
                                        <label htmlFor="tabagismo-nao">O-</label>
                                    </div>
                                </label>

                                <label
                                    className={style.infos}
                                    style={{
                                        display: "flex",
                                        marginBottom: "1rem",

                                    }}
                                >
                                    <h1 className={style.margin}>
                                        Tabagismo:
                                    </h1>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="tabagismo-sim"
                                            name="tabagismo"
                                            value="sim"
                                        />
                                        <label htmlFor="tabagismo-sim">✅</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="tabagismo-nao"
                                            name="tabagismo"
                                            value="nao"
                                        />
                                        <label htmlFor="tabagismo-nao">❌</label>
                                    </div>
                                </label>

                                <label
                                    className={style.infos}
                                    style={{
                                        display: "flex",
                                        marginBottom: "1rem",

                                    }}
                                >
                                    <h1 className={style.margin}>
                                        Consumo de Álcool:
                                    </h1>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="Álcool-sim"
                                            name="Álcool"
                                            value="sim"
                                        />
                                        <label htmlFor="Álcool-sim">✅</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="Álcool-nao"
                                            name="Álcool"
                                            value="nao"
                                        />
                                        <label htmlFor="Álcool-nao">❌</label>
                                    </div>
                                </label>

                                <label
                                    className={style.infos}
                                    style={{
                                        display: "flex",
                                        marginBottom: "1rem",

                                    }}
                                >
                                    <h1 className={style.margin}>
                                        Substâncias Ilícitas:
                                    </h1>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="Substâncias-sim"
                                            name="Substâncias"
                                            value="sim"
                                        />
                                        <label htmlFor="Substâncias-sim">✅</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="Substâncias-nao"
                                            name="Substâncias"
                                            value="nao"
                                        />
                                        <label htmlFor="Substâncias-nao">❌</label>
                                    </div>
                                </label>
                                <label
                                    className={style.infos}
                                    style={{
                                        display: "flex",
                                        marginBottom: "1rem",

                                    }}
                                >
                                    <h1 className={style.margin}>
                                        PCD:
                                    </h1>
                                    <div className={style.margin}>
                                        <input
                                            type="radio"
                                            id="PCD-sim"
                                            name="PCD"
                                            value="sim"
                                        />
                                        <label htmlFor="PCD-sim">✅</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="PCD-nao"
                                            name="PCD"
                                            value="nao"
                                        />
                                        <label htmlFor="PCD-nao">❌</label>
                                    </div>
                                </label>

                            </div>
                        </div>

                    </div>
                    <div className={style.titulo}>
                        <h1>Historico de Exames/Cirurgias:</h1>
                    </div>
                    <div className={style.exameInputContainer}>
                        {examInputIds.map((id) => <ExamInput id={id} onClickRemove={removeExamInput} key={id} />)}
                        <button className={style.addExamBtn} onClick={() => { addExamInput() }}>Adicionar Exame/Cirurgia</button>
                        <button className={style.btn} type="submit">Salvar</button>
                    </div>

                    <Footer />
                </div>
            </main >
        </>
    );
}


{/* <div className={style.inputContainer}>
    <input
        type="number"
        className={style.inputField}
        placeholder=""
        name="cpf"
        maxLength={11}
    />
    <label className={style.inputPlaceholder}>Nome Completo</label>
</div> */}