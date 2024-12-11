import { verificarListaVazia } from "./verificarListaVazia.js";
const listaCompras = document.querySelector("#lista-compras");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza?");

    if (confirmacao) {

        elemento.remove();
        verificarListaVazia(listaCompras);
    } 
}

export {excluirItem};