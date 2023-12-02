import Image from "next/image";
import style from "../../app/search/search.module.css";
import Link from "next/link";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";

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
              padding: "30px",
            }}
          >
            CPF:
            <input type="text" placeholder=" cpf *" name="cpf" />
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
