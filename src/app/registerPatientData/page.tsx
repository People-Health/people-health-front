import Image from "next/image";
import style from "../../app/registerPatientData/register.module.css";
import Link from "next/link";
import Footer from "../component.footer/footer";
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";

export default function register() {
  return (
    <>
      <main className={style.container}>
        <LogoFaixa />
        <Header option={1} />
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
            <h1>Historico de Exames:</h1>
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1590px",
            }}
          >
            Exame:
            <input
              type="text"
              placeholder=" digite o tipo de exame feito"
              name="exame"
            />
          </label>
          <div>
            <label
              className={style.infos}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                width: "1590px",
              }}
            >
              Upload do Exame:
              <input type="file" accept="application/pdf" />
            </label>
          </div>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1525px",
            }}
          >
            Data do exame:
            <input
              type="text"
              placeholder=" digite a data do exame"
              name="dataExame"
            />
          </label>
          <label className={style.text2}>
            <h1>Historico de Cirurgias:</h1>
          </label>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1578px",
            }}
          >
            Cirurgia:
            <input
              type="text"
              placeholder=" digite o tipo de cirurgia feita"
              name="cirurgia"
            />
          </label>
          <div>
            <label
              className={style.infos}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                width: "1570px",
              }}
            >
              Upload do Relatorio:
              <input type="file" accept="application/pdf" />
            </label>
          </div>
          <label
            className={style.infos}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "1521px",
            }}
          >
            Data da Cirurgia:
            <input
              type="text"
              placeholder=" digite a data da cirurgia"
              name="dataCirurgia"
            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
            width: "1525px",
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#1F2B6C",
              width: "100px",
              padding: "10px",
              marginBottom: '2rem'
            }}
          >
            Salvar
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

