import { getProducts } from "../../../../Api/db/db.js";
import { putProducts } from "../../../../Api/db/db.js";
export class EditarTipoActivos extends HTMLElement {
    constructor() {
        super();
        this.render()
    }
    async render() {
        const elements = Array.from(await getProducts(`/TipoActivos`));
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/Editar/editarTipoActivo/editarTipoActivo.css"; 
        </style>
        <div class="formCard">
            <div class="formCard-body">
                <form id="taskForm"></form>
                <table class="table caption-top">
                <caption>Lista de Tipos Activos</caption>
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

        /*Aqui rellena la tabla */
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

        /*Logica para el dialog*/
        const dialog = this.querySelector('dialog')
        const boton = this.querySelector("#editarBoton");
        boton.addEventListener("click", () => {
            const checkedCheckbox = this.querySelector(".checkbox:checked");
            if (!checkedCheckbox) {
                console.error('No se ha seleccionado ningún estado.');
                return;
            }
            const idEditar = checkedCheckbox.id;
            const dialog = this.querySelector('dialog');
            dialog.innerHTML = /* HTML */`
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Editar Tipos Activos ${idEditar} </legend>
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
                await putProducts("/TipoActivos", idEditar, data);
                dialog.close();
            });
        });
    }
}

customElements.define("editar-element-tipo-activos", EditarTipoActivos);