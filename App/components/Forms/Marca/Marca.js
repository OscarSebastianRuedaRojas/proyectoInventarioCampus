import { getProducts } from '../../../../Api/db/db.js';
import { postProducts } from '../../../../Api/db/db.js';
export class FormMarca extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Forms/Marca/Marca.css"; 
        </style>
        <div class="formCard"">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Agregar Marca </legend>
                            <fieldset>
                            <div class="form-group">
                                <input type="text" id="marca" name="name"
                                    placeholder="Añadir nombre de la marca" required>
                            </div>
                            <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <custom-alert></custom-alert>
        `
    }
    async postData() {
        const form = document.querySelector('#taskForm')
        form.addEventListener('submit', async (e) => {
            const EstadosJSON = await getProducts("/Marcas");
            let data = Object.fromEntries(new FormData(form).entries());
            data.id = `Mc-${(Object.keys(EstadosJSON).length)+1}`
            setTimeout(() =>  postProducts("/Marcas", data), 1500)
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

customElements.define('form-marca', FormMarca)