import React from "react";
import style from  './login.module.css';
import Footer from '../footer/footer';
import Header from "../header/header";


const  Login=()=>{
    return(
        <div className={style.container} style={{display:'flex'}}> {/*preciso dizer que o display é flex no css inline tbm */}
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
                    Faça seu login aqui!
                </h1>
            </label>
            <label className={style.usuario} style={{display:'flex', justifyContent:'space-between'}}>
                Usuário: 
                <input type='text' name="username" style={{marginBottom:'10px', color: 'black'}}/>
            </label>
            <label className={style.senha} style={{display:'flex', justifyContent:'space-between'}}>
                Senha:
                <input type="password"  name="password" style={{marginBottom:'10px', color: 'black'}}/>
            </label>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button type="submit" style={{backgroundColor:'#1F2B6C',width:'70px'}}>Entrar</button>
            </div>
            
        </form>
    )
}

export default Login;

