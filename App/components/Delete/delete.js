import { getProducts } from "../../../Api/db/db.js";
import { delProducts } from "../../../Api/db/db.js";

export class Delete extends HTMLElement {
    constructor() {
        super();
        this.render("Estados");
    }

    async render(eleccion) {
        const elements = Array.from(await getProducts(`/${eleccion}`));
        console.log(elements);
        console.log(elements[0]);
        elements.forEach(element => {
            console.log(element.id);
        });
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/Delete/delete.css"; 
        </style>
        <div class="formCard">
            <div class="formCard-body">
                <form id="taskForm"></form>
                <button type="button" id="eliminarBoton">Eliminar </button>
            </div>
        </div>
        `;
        const taskForm = this.querySelector("#taskForm");

        elements.forEach(element => {
            let div = document.createElement('div');
            div.innerHTML = /*HTML */`
                <div class="body">
                    <div class="text">
                        <h2 id="id">${element.id}</h2>
                        <h2 id="name">${element.name}</h2>
                    </div>
                    <form id="delete">
                        <input type="checkbox" id="${element.id}" class="checkbox">
                    </form>
                </div>
            `;
            taskForm.appendChild(div);
        });

        const boton = this.querySelector("#eliminarBoton");
        boton.addEventListener("click", () => {
            const inputs = this.querySelectorAll(".checkbox");
            inputs.forEach(input => {
                console.log(input.id);
                if (input.checked){
                    let idEliminar = input.id;
                    delProducts(`/${eleccion}`, idEliminar);
                }
            });
        });
    }
}

customElements.define("delete-element", Delete);
