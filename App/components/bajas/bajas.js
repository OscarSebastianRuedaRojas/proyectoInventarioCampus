import { getProducts, putProducts } from "../../../../Api/db/db.js";
export class EditarBajas extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    async render() {
        const elements = Array.from(await getProducts(`/Activos`));

        this.innerHTML = /* HTML */`
            <style rel="stylesheet">
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm"></form>
                    <table class="table caption-top">
                        <caption>Inventario de Activos sin Asignación de Ubicación Predefinida</caption>
                        <thead>
                            <tr>  
                                <th scope="col">Identificador</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
            <dialog></dialog>
        `;
        const tbody = this.querySelector('tbody');
        elements.forEach(element => {
            let tr = document.createElement('tr');
            if (element.estadoId !== "Es-2"){
                tr.innerHTML = /* HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${element.name}</td>
                <td><button type="button" id="${element.id}" class="bajasBoton">Mandar a bajas</button></td>
            `;
            tbody.appendChild(tr);
            }
        });
        const botones = this.querySelectorAll(".bajasBoton");
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const idEditar = boton.id;
                const dialog = this.querySelector('dialog');
                dialog.innerHTML = /* HTML */`
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> El activo fue mandado a bajas </legend>
                        <fieldset>
                        <div class="form-group">
                        </div>
                        <button type="submit" id="submit">Submit</button>
                    </form>
                `;
                dialog.setAttribute('open', '');

                const form = dialog.querySelector('#submit');
                form.addEventListener('click', async (e) => {
                    e.preventDefault();
                    let ind = elements.findIndex(element => element.id === idEditar)
                    elements[ind].estadoId = "Es-2";
                    await putProducts("/Activos", idEditar, elements[ind]);
                    dialog.close();
                });
            });
        });
    }
}

customElements.define("editar-bajas", EditarBajas);