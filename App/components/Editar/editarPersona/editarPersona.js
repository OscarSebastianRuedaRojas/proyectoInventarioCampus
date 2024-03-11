import { getProducts } from "../../../../Api/db/db.js";
import { putProducts } from "../../../../Api/db/db.js";
export class EditarPersona extends HTMLElement {
    constructor() {
        super();
        this.render()
    }
    async render() {
        const elements = Array.from(await getProducts(`/Personas`));
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/Editar/editarPersona/editarPersona.css"; 
        </style>
        <div class="formCard">
            <div class="formCard-body">
                <form id="taskForm"></form>
                <table class="table caption-top">
                <caption>Lista de Personas</caption>
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
            
        </div>
        </div>
        <dialog>

        </dialog>
        `;

        /*Aqui rellena la tabla */
        const tbody = this.querySelector('tbody')
        elements.forEach(element => {
            let tr = document.createElement('tr');
            tr.innerHTML = /*HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${element.name}</td>
                <td><button type="button" id="${element.id}" class="editarBoton">Editar </button></td>
            `;
            tbody.appendChild(tr);
        });

        /*Logica para el dialog*/
        const dialog = this.querySelector('dialog')
        const botones = this.querySelectorAll(".editarBoton");
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const idEditar = boton.id;
                const dialog = this.querySelector('dialog');
                dialog.innerHTML = /* HTML */`
                    <div class="formCard-body">
                        <form id="taskForm">
                            <fieldset>
                                <legend style="text-align: center"> Editar Personas ${idEditar} </legend>
                                <div class="form-group">
                                    <input type="text" id="estado" name="name" placeholder="Nuevo Estado" >
                                </div>
                                <button type="submit">Guardar</button>
                                <button id="cancel">Cancelar</button>
                            </fieldset>
                        </form>
                    </div>
                `;
                dialog.setAttribute('open', '')
                const cancelButton = this.querySelector('#cancel').addEventListener('click', (e) => {
                    e.preventDefault()
                    dialog.close();
                    e.stopImmediatePropagation()
                })
                const form = dialog.querySelector('#taskForm');
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(form).entries());
                    data.id = idEditar;
                    await putProducts("/Personas", idEditar, data);
                    dialog.close();
                });
            });
        });
        
    }
}

customElements.define("editar-element-persona", EditarPersona);