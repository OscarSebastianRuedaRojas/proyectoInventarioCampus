import { getProducts } from "../../../Api/db/db.js";
import { delProducts } from "../../../Api/db/db.js";
export class DeleteActivo extends HTMLElement {
    constructor() {
        super();
        this.render()
    }
    async render() {
        const elements = Array.from(await getProducts(`/Activos`));
        elements.forEach(element => {
            console.log(element.id);
        });
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/DeleteActivo/deleteActivo.css"; 
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
                        <h2 id="name">${element.Descripcion}</h2>
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
                    delProducts(`/Activos`, idEliminar);
                }
            });
        });
    }
}

customElements.define("delete-element-activo", DeleteActivo);