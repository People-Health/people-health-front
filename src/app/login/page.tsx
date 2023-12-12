'use client'

import React, {useState} from "react";
import style from  './login.module.css';
import Footer from '../component.footer/footer';
import Header from "../component.header/header";
import LogoFaixa from "../component.logoFaixa/logoFaixa";
import Link from 'next/link';



const  Login=()=>{
    const [num,setBool]=useState(1);

    function btn(){
        setBool(num+1);
        console.log(num);

    }
    return(
        <div className={style.container} style={{display:'flex'}}> {/*preciso dizer que o display é flex no css inline tbm */}
        <LogoFaixa/>
        <Header option={0} />
            <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LoginForm/>
            </main>
            <button onClick={()=>btn()}>valor:{num}</button>
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
                Usuário: 
                <input type='text'placeholder=' usuário *' name="username" style={{marginBottom:'10px', color: 'black', fontWeight:'normal'}}/>
            </label>
            <label className={style.senha} style={{display:'flex', justifyContent:'space-between'}}>
                Senha:
                <input type="password" placeholder=' senha *'  name="password" style={{marginBottom:'10px', color: 'black', fontWeight:'normal'}}/>
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