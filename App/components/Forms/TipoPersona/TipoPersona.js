import { getProducts } from '../../../../Api/db/db.js';
import { postProducts } from '../../../../Api/db/db.js';
export class FormTipoPersona extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Forms/TipoPersona/TipoPersona.css"; 
        </style>
        <div class="formCard"">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Agregar Tipo de Persona </legend>
                            <fieldset>
                            <div class="form-group">
                                <input type="text" id="TipoPersona" name="name"
                                    placeholder="Añadir tipo de persona" required>
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
            const EstadosJSON = await getProducts("/TiposPersonas");
            let data = Object.fromEntries(new FormData(form).entries());
            data.id = `TpPs-${(Object.keys(EstadosJSON).length)+1}`
            setTimeout(() => postProducts("/TiposPersonas", data), 1500)
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

customElements.define('form-tipo-persona', FormTipoPersona)