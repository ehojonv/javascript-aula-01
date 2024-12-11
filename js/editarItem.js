export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");

        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".checkbox_input").checked;
        
        if (estavaComprado) {
            elemento.querySelector(".checkbox_input").checked = true;
            elemento.querySelector(".checkbox_customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through"

        }
    }
}