import Image from 'next/image'
import style from "../../styles/home.module.css"
import logo from "../../../public/logo.png";

export default function LogoFaixa() {
    return (
        <div className={style.logo}>
        <Image src={logo} alt="logo" />
      </div>  
    )
}