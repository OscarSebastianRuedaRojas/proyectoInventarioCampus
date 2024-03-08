import { getProducts } from '../../../../Api/db/db.js';
import { postProducts } from '../../../../Api/db/db.js';
export class Persona extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.getAndShowData()
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Forms/Persona/Persona.css"; 
        </style>
            <div class="formCard"">
            <div class="formCard-body">
                <form id="taskForm">
                    <fieldset>
                        <legend for="id"> Seleccione Tipo de persona </legend>
                        <div class="form-group">
                            <select name="id" id="selectTipoPersona">
                            </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <Legend> Numero de identificacion/Nit </Legend>
                        <div class="form-group">
                            <input type="number" id="id" name="id"
                                placeholder="Ingrese el número" required>
                        </div>
                    </fieldset>
                    <fieldset>
                        <Legend> Nombre </Legend>
                        <div class="form-group">
                            <input type="text" id="name" name="name"
                                placeholder="Ingrese el nombre completo" required>
                        </div>
                    </fieldset>
                    <fieldset>
                        <Legend> Email </Legend>
                        <div class="form-group">
                            <input type="email" id="email" name="email"
                                placeholder="Ingrese el email" required>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
            <custom-alert></custom-alert>
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
        const tipoPersona = await getProducts("/TiposPersonas");
        populateSelect(tipoPersona, "#selectTipoPersona");

    }
    async postData() {
        const form = document.querySelector('#taskForm')
        form.addEventListener('submit', async (e) => {
            const EstadosJSON = await getProducts("/Personas");
            let data = Object.fromEntries(new FormData(form).entries());
            data.id = `TpPs-${(Object.keys(EstadosJSON).length)+1}`
            setTimeout(() => postProducts("/Personas", data), 1500)
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

customElements.define('form-persona', Persona)








// Personas
// • id (CC, Nit)
// • Nombre
// • Email
// • idTipoPersona