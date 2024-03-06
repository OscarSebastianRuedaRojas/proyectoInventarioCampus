export class Form extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Form/form.css"; 
        </style>
        <div class="formCard" style="width: 18rem;">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend> Agregar </legend>
                            <fieldset>
                                <legend>Marca</legend>
                                <div class="form-group">
                                    <select name="marca" id="marcaSelect">
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Categoria</legend>
                                <div class="form-group">
                                    <select name="categoria" id="categoriaSelect">
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Tipo de item</legend>
                                <div class="form-group">
                                    <select name="tipoItem" id="tipoItemSelect">
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
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
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
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
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>
                            </fieldset>
                            <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        `
    }
}

customElements.define('form-register', Form)