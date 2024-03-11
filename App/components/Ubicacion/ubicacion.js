import { getProducts, putProducts } from "../../../../Api/db/db.js";
export class EditarUbicacion extends HTMLElement {
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
            if (!('UbicacioneId' in element)){
                tr.innerHTML = /* HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${element.name}</td>
                <td><button type="button" id="${element.id}" class="agregarBoton">Asignar ubicacion</button></td>
            `;
            tbody.appendChild(tr);
            }
        });
        const botones = this.querySelectorAll(".agregarBoton");
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const idEditar = boton.id;
                const dialog = this.querySelector('dialog');
                dialog.innerHTML = /* HTML */`
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Agregar ubicacion </legend>
                        <fieldset>
                        <div class="form-group">
                            <select name="marca" id="ubicacionSelect">
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                `;

                const getAndShowData = async () => {
                    function populateSelect(data, id) {
                        const select = document.querySelector(id)
                        data.forEach(item => {
                            const option = document.createElement('option')
                            option.value = item.id;
                            option.textContent = item.name
                            select.appendChild(option)
                        });
                    };
                    const responseUbicacion = await fetch("http://localhost:3000/Ubicaciones");
                    const dataUbicacion = await responseUbicacion.json();

                    populateSelect(dataUbicacion, "#ubicacionSelect");

                };
                getAndShowData()
                dialog.setAttribute('open', '');

                const cancelButton = this.querySelector('#cancel');
                cancelButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    dialog.close();
                    e.stopImmediatePropagation();
                });

                const form = dialog.querySelector('#ubicacionSelect');
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    ind = elements.findIndex(element => element.id === idEditar)
                    elements[ind].UbicacioneId = form.value;
                    await putProducts("/Activos", idEditar, elements[ind]);
                    dialog.close();
                });
            });
        });
    }
}

customElements.define("editar-ubicacion", EditarUbicacion);