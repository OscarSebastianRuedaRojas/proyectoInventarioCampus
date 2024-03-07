export class Form extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.getAndShowData() 
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Form/form.css"; 
        </style>
        <div class="formCard"">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend> Agregar </legend>
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
                                    placeholder="Add valorUnitario" required>
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
        `
    }
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
}

customElements.define('form-register', Form)