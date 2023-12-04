import style from './exam.module.css'
import React from 'react';

interface ExamComponentProps{
    title:string,
    date:string,
    local:string,
    category:string,
    file:string
}
const ExamComponent: React.FC<ExamComponentProps>=({title,date,local,category})=>{

    return(
        <div className={style.container} >
            <h1 className={style.title}>{title}</h1>
            <ul className={style.listContainer}>
                <li>Data: {date}</li>
                <li>Local: {local}</li>
                <li>Categoria: {category}</li>
            </ul>
            <button className={style.button}>Baixar resultado do(a) {category}</button>
        </div>
    )
}

export default ExamComponent