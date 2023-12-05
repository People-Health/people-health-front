import style from './exam-input.module.css';
import React from 'react';
interface ExamInputProps{
    onClickRemove:Function,
    id:number;
}

const ExamInput:React.FC<ExamInputProps> = ({onClickRemove,id})=> {
    return (
       <>
       <main className={style.container}>
            <label
            className={style.infos}
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
               // width: "1590px",
            }}
            >
            Exame/Cirurgia:
            <input
                type="text"
                placeholder=" Exame ou cirurgia"
                name="exame/cirurgia"
            />
            </label>

            <label
                className={style.infos}
                style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
             //   width: "1590px",
                }}
            >
            Upload do Exame:
            <input type="File" accept="application/pdf" />
            </label>
            
            <label
            className={style.infos}
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
             //   width: "1525px",
            }}
            >
            Data do exame:
            <input
                type="text"
                placeholder=" digite a data do exame"
                name="dataExame"
            />
            </label>
            <button className={style.button} onClick={()=>onClickRemove(id)}>Remover</button>
        </main>
       
        </>

    );
}

export default ExamInput;

