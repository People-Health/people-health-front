"use client";
import style from "../../app/search-patient/search.module.css";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";
import React, { useState } from "react";
import { formattedCpf } from "../../utils/cpfFormated";
import Link from "next/link";

export default function Search() {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    const formattedValue = formattedCpf(event.target.value);
    setValue(formattedValue);
  };

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
                type="text"
                className={style.inputField}
                placeholder=""
                name="cpf"
                maxLength={14}
                onChange={handleChange}
                value={value}
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
              marginBottom: "3rem",
            }}
          >
          <Link href="/result-patient-search">Buscar</Link>

          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}