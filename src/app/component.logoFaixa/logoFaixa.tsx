import Image from 'next/image'
import Link from 'next/link'
import style from "../../styles/home.module.css"
import logo from "../../../public/logo.png";
import favicon from "../../../public/favicon.ico";

export default function LogoFaixa() {
  
    return (
          <div className={style.faixa}>
              <div className={style.blocobranco}>

              </div>

              <div>
              <Link href="/">
              <Image className={style.icon} src={favicon} alt="icon" />
              </Link>
              </div>

              <div>
              <Link href="/">
              <Image className={style.logo} src={logo} alt="logo" />
              </Link>
              </div>
          </div>

    )
}