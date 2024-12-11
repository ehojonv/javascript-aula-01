import { criaItemLista } from "./criarItemLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.querySelector("#input-item");
const listaCompras = document.querySelector("#lista-compras");




export function adicionarItem(evento) {
    evento.preventDefault();

    if (item.value === "") {
        alert("Escreva algo")
        return
    }

    const itemLista = criaItemLista(item.value);
    listaCompras.appendChild(itemLista);
    verificarListaVazia(listaCompras);
    item.value = ""
}