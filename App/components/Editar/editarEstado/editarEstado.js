import { getProducts } from "../../../../Api/db/db.js";
import { putProducts } from "../../../../Api/db/db.js";
export class EditarEstado extends HTMLElement {
    constructor() {
        super();
        this.render()
    }
    async render() {
        const elements = Array.from(await getProducts(`/Estados`));
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/editarEstado/editarEstado.css"; 
        </style>
        <div class="formCard">
            <div class="formCard-body">
                <form id="taskForm"></form>
                <table class="table caption-top">
                <caption>Lista de Estados</caption>
                <thead>
                  <tr>  
                    <th scope="col">Identificador</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Seleccionar</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
                <button type="button" id="editarBoton">Editar </button>
            </div>
        </div>
        <dialog>
        
        </dialog>
        `;
        const tbody = this.querySelector('tbody')
        elements.forEach(element => {
            let tr = document.createElement('tr');
            tr.innerHTML = /*HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${element.name}</td>
                <td><input type="checkbox" id="${element.id}" class="checkbox"></td>
            `;
            tbody.appendChild(tr);
        });
        const boton = this.querySelector("#editarBoton");
        const dialog = this.querySelector("dialog")
        boton.addEventListener("click", () => {
            const inputs = this.querySelectorAll(".checkbox");
            inputs.forEach(input => {
                if (input.checked){
                    let idEditar = input.id;
                    let ind = datos.findIndex(estado => estado.id === idEditar);
                    dialog.innerHTML = /* HTML */`
                    div class="formCard-body">
                        <form id="taskForm">
                            <fieldset>
                                <legend style="text-align: center"> Editar Estado </legend>
                            <fieldset>
                            <div class="form-group">
                                <input type="text" id="estado" name="name"
                                    placeholder="Añadir Estado" required>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    `
                    const form = document.querySelector('#taskForm');
                    form.addEventListener('submit', async (e) => {
                        let data = Object.fromEntries(new FormData(form).entries());
                        data.id = idEditar
                        putProducts("/Estado", idEditar, data)
                        e.preventDefault();
                        e.stopPropagation();
                    })
                }
            });
        });
    }
}

customElements.define("editar-element-estado", EditarEstado);