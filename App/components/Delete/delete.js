import { getProducts } from "../../../Api/db/db";
import { delProducts } from "../../../Api/db/db";
export class Delete extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(eleccion){
        const elements = getProducts(`/${eleccion}`)
        this.innerHTML = /* HTML */`
        <div class="formCard"">
        <div class="formCard-body">
            <form id="taskForm">
                
                
            </form>
        </div>
        </div>
        `
        let taskForm = document.querySelector("#taskForm")
        elements.forEach(element => {
            taskForm.innerHTML += /*HTML */`
                ${element.id}
                ${element.nombre}
                <input id=${element.id} class="checkbox">
        `;
        const inputs = this.querySelectorAll(".checkbox");
        inputs.forEach(input => {
            if (input.checked){
                let idEliminar = input.id;
                delProducts(`/${eleccion}`, idEliminar)
            }
        });

        });
    }
}