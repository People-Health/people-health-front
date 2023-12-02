import Image from "next/image";
import style from "../../app/resultsSearch/resultsSearch.module.css";
import Link from "next/link";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";

export default function Search() {
  return (
    <>
      <main className={style.results}>
        <LogoFaixa />
        <Header option={1} />
        <label className={style.info}>
          <h1>Informações Pessoais:</h1>
        </label>
      </main>
      <Footer />
    </>
  );
}
