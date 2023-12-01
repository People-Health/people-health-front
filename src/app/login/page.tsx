'use client'

import React, {useState} from "react";
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
                <input type='text'placeholder=" Usuario:" name="username" style={{marginBottom:'10px', color: 'black'}}/>
            </label>
            <label className={style.senha} style={{display:'flex', justifyContent:'space-between'}}>
                Senha:
                <input type="password" placeholder=' Senha:'  name="password" style={{marginBottom:'10px', color: 'black'}}/>
            </label>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button type="submit" style={{backgroundColor:'#1F2B6C',width:'70px'}}>Entrar</button>
            </div>
            
        </form>
    )
}

export default Login;







// const Login: React.FC = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');

//  const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validação e envio dos dados
//     console.log('Email:', email);
//     console.log('Senha:', password);
//  };

//  return (
//     <div className="login">
//       <h1>PEOPLE HEALTH</h1>
//       <h2>Simplificando processos com um serviço de excelência e confiável</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Usuário"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Log in</button>
//       </form>
//     </div>
//  );
// };

// export default Login;




// const pagina=()=>{
//     return(
//         <div className={style.container} style={{display:'flex'}}> {/*preciso dizer que o display é flex no css inline tbm */}
//         <Header option={0} />
//             <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Header option={1}/>
//             </main>
//             <Footer/>
            
//         </div>
        
//     );
// }

// interface LoginProps {
//   email: string;
//   setEmail: React.Dispatch<React.SetStateAction<string>>;
//   password: string;
//   setPassword: React.Dispatch<React.SetStateAction<string>>;
// }

// const Login: React.FC<LoginProps> = ({ email, setEmail, password, setPassword }) => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validação e envio dos dados
//     console.log('Email:', email);
//     console.log('Senha:', password);
//   };

//   return (
//     <div className="login">
//        <Header option={1}/>
//        <h1>PEOPLE HEALTH</h1>
//       <h2>Simplificando processos com um serviço de excelência e confiável</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Usuário"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Log in</button>
//       </form>
//       <Footer/>
//     </div>
//   );
// };


// const EmailePassword: React.FC = () => {
//   const [email, setEmail] = useState('email');
//   const [password, setPassword] = useState('password');

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>
//   );
// };

// const App: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//       <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
//       <EmailePassword />
//     </div>
//   );
// };

// export default App;

