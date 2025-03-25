import React from "react"
import { TipoCabecalho } from "@/types/TipoCabecalho"

export default function Cabecalho(props:TipoCabecalho) {
    return(
        <header>
            <h1>{props.titulo}</h1>
            <p>{props.msg}</p>
            <div>
                <p>Nome:{props.usuario.nome}</p>
                <p>Email:{props.usuario.email}</p>
            </div>


        </header>
    )
}