import React from "react";
import style from "../../app/resultsSearch/card.module.css";
import 'Hospitancia' from "../../public/Hospitancia.png";

interface CardProps {
    nome: string;
    idade: string;
    cpf: string;
}

const card: React.FC<CardProps> = ({ nome, idade, cpf }) => {
    return (
        <div className="card">
            <div className="profile-pic">
                {/* Coloque a imagem do perfil aqui */}
            </div>
            <div className="info">
                <h2>Informações pessoais</h2>
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>CPF: {cpf}</p>
            </div>
            <div className="hospital-icon">
                    {"../../public/Hospitancia.png"}
            </div>
        </div>
    );
};

export default card;