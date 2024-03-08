import { getProducts } from '../../../../Api/db/db.js';
import { postProducts } from '../../../../Api/db/db.js';
export class TipoActivo extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Forms/TipoActivo/TipoActivo.css"; 
        </style>
            <div class="formCard"">
            <div class="formCard-body">
                <form id="taskForm">
                    <fieldset>
                        <Legend> Nombre </Legend>
                        <div class="form-group">
                            <input type="text" id="name" name="name"
                                placeholder="Ingrese el nombre completo" required>
                        </div>
                    </fieldset>
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
            const EstadosJSON = await getProducts("/TipoActivo");
            let data = Object.fromEntries(new FormData(form).entries());
            data.id = `TpAc-${(Object.keys(EstadosJSON).length)+1}`
            setTimeout(() => postProducts("/TipoActivo", data), 1500)
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

customElements.define('form-tipo-activo', TipoActivo)








// Personas
// • id (CC, Nit)
// • Nombre
// • Email
// • idTipoPersona