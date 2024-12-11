import { adicionarItem } from "./js/adicionarItem.js";

const btnSalvarItem = document.querySelector("#btn-salvar");
btnSalvarItem.addEventListener("click", adicionarItem);