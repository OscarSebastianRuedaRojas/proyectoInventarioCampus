import { postProducts,getProducts } from '../../../../Api/db/db.js';

export class Form extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.getAndShowData() 
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Forms/Activo/form.css"; 
        </style>
        <div class="formCard"">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Agregar Activo </legend>
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
                                <label for="Descripcion">Descripcion:</label>
                                <input type="text" id="Descripcion" name="Descripcion"
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
    }
    /**
     *  @returns Formulario para agregar activo con los selectores alimentados desde la db.
     */
    async getAndShowData() {
        function populateSelect(data, id) {
            const select = document.querySelector(id)
            data.forEach(item => {
                const option = document.createElement('option')
                option.value = item.id;
                option.textContent = item.name
                select.appendChild(option)
            });
        }
        const responseMarcas = await fetch("http://localhost:3000/Marcas");
        const responseCategorias = await fetch("http://localhost:3000/categorias");
        const responseTipo = await fetch("http://localhost:3000/TipoActivos");
        const responseProveedor = await fetch("http://localhost:3000/Proveedores");
        const responseEmpresa = await fetch("http://localhost:3000/Empresas");

        const dataMarcas = await responseMarcas.json();
        const dataCat = await responseCategorias.json();
        const dataTipo = await responseTipo.json();
        const dataProv = await responseProveedor.json();
        const dataEmpresa = await responseEmpresa.json();

        populateSelect(dataMarcas, "#marcaSelect");
        populateSelect(dataCat, "#categoriaSelect");
        populateSelect(dataTipo, "#tipoItemSelect");
        populateSelect(dataProv, "#proveedorSelect");
        populateSelect(dataEmpresa, "#empresaSelect");



    } 
    /**
     * Envia método post a la DB con el formulario del activo agregado.
     */
    async postData() {
        const form = document.querySelector('#taskForm')
        form.addEventListener('submit', async (e) => {
            const ActivosJSON = await getProducts("/Activos");
            let data = Object.fromEntries(new FormData(form).entries());
            data.id = `Ac-${(Object.keys(ActivosJSON).length)+1}`
            setTimeout(() => postProducts("/Activos", data), 1500)
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

customElements.define('form-register', Form)