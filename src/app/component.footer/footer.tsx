import style from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerFirstContent}>
          <h2>People Health</h2>
          <p>
            Simplificando processos<br></br>com um serviço confiável e de
            excelência
          </p>
        </div>
        <div className={style.footerSecondContent}>
          <h3>Fale conosco</h3>
          <p>Ligue:(19)995447255</p>
          <p>Email: peoplehealth@gmail.com</p>
          <p>Endereço:Rua Stefano Argentin João Aranha Paulínia</p>
          <p>País: Brasil</p>
        </div>
      </div>
      <hr></hr>
      <div className={style.footerEnd}>
        <p>© 2023 People Health All Rights Reserved by PNTEC-LTD</p>
      </div>
    </footer>
  );
}
