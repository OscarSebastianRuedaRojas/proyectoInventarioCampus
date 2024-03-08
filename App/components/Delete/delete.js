import { getProducts } from "../../../Api/db/db.js";
import { delProducts } from "../../../Api/db/db.js";
export class Delete extends HTMLElement{
    constructor(){
        super();
        this.render("Estados");
    }
    render(eleccion) {
        const elements = Array.from(getProducts(`/${eleccion}`))
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/Delete/delete.css"; 
        </style>
        <div class="formCard"">
        <div class="formCard-body">
            <form id="taskForm">
                
            </form>
            <button type="submit" id="eliminarBoton"> Eliminar </button>
        </div>
        </div>
        `
        let taskForm = this.querySelector("#taskForm")
        elements.forEach(element => {
            taskForm.innerHTML += /*HTML */`
            <div class="displaySeachResult">
                <div class="body">
                    <div class="text">
                        <h2 id="id">${element.id}</h2>
                        <h2 id="name"> ${element.nombre}</h2>
                    </div>
                    <form id="delete"">
                        <input type="checkbox" id=${element.id} class="checkbox">
                    </form>
                </div>
            </div> 
        `;
        
    delData(eleccion)
    })};
    delData(eleccion) {
        const boton = document.querySelector("#eliminarBoton")
        boton.addEventListener('submit', (e) => {
            const inputs = document.querySelectorAll(".checkbox");
            inputs.forEach(input => {
                if (input.checked){
                    let idEliminar = input.id;
                    delProducts(`/${eleccion}`, idEliminar)
                }
            });
        })
    }
}

customElements.define("delete-element", Delete)