'use client'

import React, {useState} from "react";
import style from  './login.module.css';
import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";
import Link from 'next/link';



const  Login=()=>{
    return(
        <div className={style.container} style={{display:'flex'}}> {/*preciso dizer que o display é flex no css inline tbm */}
        <LogoFaixa/>
        <Header option={0} />
            <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LoginForm/>
            </main>
            <Footer/>
            
        </div>
        
    );

}

const  LoginForm=()=>{
    return(
        <form style={{display:'flex',flexDirection:'column',width:'300px'}}>
            <label className={style.mensagemLogin}>
                <h1>
                    Login:
                </h1>
            </label>
            <label className={style.usuario} style={{display:'flex', justifyContent:'space-between'}}>
                {/* Usuário:  */}
                <div className={style.inputContainer}>
                        <input
                            type="text"
                            className={style.inputField}
                            placeholder=""
                            name="cpf"
                        />
                        <label className={style.inputPlaceholder}>Usuário</label>
                    </div>  
            </label>
            <label className={style.senha} style={{display:'flex', justifyContent:'space-between'}}>
                {/* Senha: */}
                                <div className={style.inputContainer}>
                        <input
                            type="password"
                            className={style.inputField}
                            placeholder=""
                            name="cpf"
                        />
                        <label className={style.inputPlaceholder}>Senha</label>
                    </div>
            </label>
            <div style={{display:'flex', justifyContent:'center',paddingTop:'2rem'}}>
                <button type="submit" style={{backgroundColor:'#1F2B6C',width:'8rem', padding:'0.5rem'}}>
                    {/* if (user==medico): */}
                    <Link href="/info-user">Login User</Link>
                    {/* else:*/}
                    {/* <Link href="/info-paciente">Login</Link>  */}
                </button>
                <button type="submit" style={{backgroundColor:'#1F2B6C',width:'8rem', padding:'0.5rem', marginLeft:'1rem'}}> {/*Apagar Este Depois*/}
                    <Link href="/info-doctor">Login Doctor</Link>
                </button>
            </div>
            
        </form>
    )
}

export default Login;