import { editarItem } from "./editarItem.js";
import gerarDataHora from "./gerarDataHora.js";
import { excluirItem } from "./removerItem.js";

const listaComprados = document.querySelector("#lista-comprados");
const listaCompras = document.querySelector("#lista-compras");
let contador = 0

export function criaItemLista(item) {
    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeItem = document.createElement("div");
    containerNomeItem.classList.add("container-nome-compra");

    const containerCheckBox = document.createElement("div");
    containerCheckBox.classList.add("checkbox_container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox_input");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox_input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox_customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemLista);

        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaCompras.appendChild(itemLista);
        }
    })

    const checboxCustomizado = document.createElement("div");
    checboxCustomizado.classList.add("checkbox_customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checboxCustomizado);

    containerCheckBox.appendChild(checkboxLabel);

    containerNomeItem.appendChild(containerCheckBox);
  
    const nomeItem = document.createElement("p");
    nomeItem.id = "item-titulo";
    nomeItem.innerText = item;
    containerNomeItem.appendChild(nomeItem);

    const containerBotoes = document.createElement("div");

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("btn_acao")

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Deletar";

    botaoRemover.addEventListener("click", function () {
        excluirItem(itemLista);
    })

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("btn_acao");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function() {
        editarItem(itemLista);
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar)
    
    containerItemLista.appendChild(containerNomeItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = gerarDataHora()
    itemData.classList.add("item-lista-texto");

    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(itemData);

    return itemLista;
}

