import Image from "next/image";
import style from "../../app/search-patient/search.module.css";
import Link from "next/link";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";
import React, { useState, ChangeEvent } from 'react';


export default function Search() {


  
  return (
    <>
      <main className={style.search}>
        <LogoFaixa />
        <Header option={1} />
        <label className={style.buscar}>
          <h1>Consultar Paciente:</h1>
        </label>
        <div>
          <label
            className={style.cpf}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            {/* CPF: */}
            <div className={style.inputContainer}>
              <input
                type="number"
                className={style.inputField}
                placeholder=""
                name="cpf"
                maxLength={11}
              />
              <label className={style.inputPlaceholder}>CPF *</label>
              </div>
          </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#1F2B6C",
              width: "100px",
              padding: "10px",
              marginBottom: "3rem"
            }}
          >
            Buscar
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
