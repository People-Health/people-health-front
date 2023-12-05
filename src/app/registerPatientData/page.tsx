'use client'
import Image from "next/image";
import style from "../registerPatientData/register.module.css"
import Link from "next/link";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";

import ExamInput from "../component.exam-input-doctor/exam-input";
import {useState} from "react";

export default function Register() {
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
    <LogoFaixa />
    <Header option={1} />

      <main className={style.container}>
        
        <label className={style.text1}>
          <h1>Cadastrar Paciente</h1>
        </label>
        <label className={style.text2}>
          <h1>Informações Pessoais:</h1>
        </label>
        <div>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1520px",
            }}
          >
            Nome completo:
            <input type="text" placeholder=" digite o nome aqui" name="nome" />
          </label>
          <label
           className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1600px",
            }}
          >
            Idade:
            <input
              type="text"
              placeholder=" digite a idade aqui"
              name="idade"
            />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1610px",
            }}
          >
            CPF:
            <input type="text" placeholder=" digite o cpf aqui" name="cpf" />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1620px",
            }}
          >
            RG:
            <input type="text" placeholder=" digite o rg aqui" name="rg " />
          </label>
          <label className={style.text2}>
            <h1>Informações Clinicas:</h1>
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1455px",
            }}
          >
            Medicação(ões) em uso:
            <input
              type="text"
              placeholder=" digite o nome da(s) medicação(ções) aqui"
              name="medicacao"
            />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1565px",
            }}
          >
            Alergia(s):
            <input
              type="text"
              placeholder=" digite o nome da(s) alergia(s) aqui"
              name="alergia"
            />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1565px",
            }}
          >
            Doença(s):
            <input
              type="text"
              placeholder=" digite o nome da(s) doença(s) aqui"
              name="doenca"
            />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1535px",
            }}
          >
            Deficiência(s):
            <input
              type="text"
              placeholder=" digite o nome da(s) deficiência(s) aqui"
              name="deficiencia"
            />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1560px",
            }}
          >
            Tabagismo:
            <input type="text" placeholder=" sim ou não" name="tabagismo" />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1490px",
            }}
          >
            Consumo de Alcool:
            <input type="text" placeholder=" sim ou não" name="alcool" />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1529px",
            }}
          >
            Uso de Drogas:
            <input type="text" placeholder=" sim ou não" name="drogas" />
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1522px",
            }}
          >
            Tipo Sanguíneo:
            <input
              type="text"
              placeholder=" ex: A+, B-, O+, etc..."
              name="sangue"
            />
          </label>
          <label className={style.text2}>
            <h1>Historico de Exames/Cirurgias:</h1>
          </label>
          <div className={style.exameInputContainer}>
            {examInputIds.map((id)=><ExamInput id={id} onClickRemove={removeExamInput} key={id}/>)}
            <button className={style.addExamBtn} onClick={()=>{ addExamInput()}}>Adicionar Exame/Cirurgia</button>
            <button className={style.btn} type="submit">Salvar</button>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}

