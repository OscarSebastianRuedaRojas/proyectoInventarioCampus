import { getProducts } from "../../../../Api/db/db.js";
import { putProducts } from "../../../../Api/db/db.js";
export class EditarActivos extends HTMLElement {
    constructor() {
        super();
        this.render()
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
                <caption>Lista de Activos</caption>
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
        const botones = this.querySelectorAll(".editarBoton");
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const idEditar = boton.id;
                const dialog = this.querySelector('dialog');
                dialog.innerHTML = /* HTML */`
                <style rel="stylesheet">
                @import "./App/components/Forms/Activo/form.css"; 
            </style>
            <div class="formCard">
                    <div class="formCard-body">
                        <form id="taskForm">
                            <fieldset>
                                <legend style="text-align: center"> Editar Activo </legend>
                                <fieldset>
                                <legend> Nombre del activo</legend>
                            <div class="form-group">
                                <label for="descripcion">nombre:</label>
                                <input type="text" id="nombre" name="nombre"
                                    placeholder="Añadir nombre" required>
                            </div>
                            </fieldset>
                                <fieldset>
                                    <legend> Descripcion</legend>
                                <div class="form-group">
                                    <label for="descripcion">descripcion:</label>
                                    <input type="text" id="descripcion" name="descripcion"
                                        placeholder="Añadir descripcion" required>
                                </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Marca</legend>
                                    <div class="form-group">
                                        <select name="marca" id="marcaSelect">
                                        </select>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Categoria</legend>
                                    <div class="form-group">
                                        <select name="categoria" id="categoriaSelect">
                                        </select>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Tipo de item</legend>
                                    <div class="form-group">
                                        <select name="tipoItem" id="tipoItemSelect">
                                        </select>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend> Valor unitario</legend>
                                <div class="form-group">
                                    <label for="valorUnitario">valorUnitario:</label>
                                    <input type="number" id="valorUnitario" name="valorUnitario"
                                        placeholder="Añadir valor unitario" required>
                                </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Proveedor</legend>
                                    <div class="form-group">
                                        <select name="proveedor" id="proveedorSelect">
                                        </select>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend> Numero de serial</legend>
                                <div class="form-group">
                                    <label for="numeroSerial">Número de serial:</label>
                                    <input type="number" id="numeroSerial" name="numeroSerial"
                                        placeholder="Número de serial" required>
                                </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Empresa responsable </legend>
                                    <div class="form-group">
                                        <select name="empresa" id="empresaSelect">
                                        </select>
                                    </div>
                                </fieldset>
                                <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <custom-alert></custom-alert>
            `
            let getAndShowData = () => {
                function populateSelect(data, id) {
                    const select = document.querySelector(id)
                    data.forEach(item => {
                        const option = document.createElement('option')
                        option.value = item.id;
                        option.textContent = item.name
                        select.appendChild(option)
                    });
                }
                const dataMarcas = getProducts("/Marcas");
                const dataCat = getProducts("/categorias");
                const dataTipo = getProducts("/TipoActivos");
                const dataProv = getProducts("/Proveedores");
                const dataEmpresa = getProducts("/Empresas");
        
                populateSelect(dataMarcas, "#marcaSelect");
                populateSelect(dataCat, "#categoriaSelect");
                populateSelect(dataTipo, "#tipoItemSelect");
                populateSelect(dataProv, "#proveedorSelect");
                populateSelect(dataEmpresa, "#empresaSelect")
            }
            getAndShowData()
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
                    await putProducts("/Activos", idEditar, data);
                    dialog.close();
                });
            });
        });
        
    }
}

customElements.define("editar-element-activo", EditarActivos);