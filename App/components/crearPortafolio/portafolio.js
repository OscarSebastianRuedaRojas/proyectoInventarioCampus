import { postProducts,getProducts } from '../../../Api/db/db.js';

export class CrearAsignacion extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.getAndShowData() 
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/crearPortafolio/portafolio.css"; 
        </style>
        <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Crear Asignación </legend>
                        </fieldset>
                                <label>Selecciona el responsable</label>
                                <div class="form-group">
                                    <select name="responsableId" id="responsableSelect">
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
        const responseResponsable = await fetch("http://localhost:3000/Personas");

        const dataResponsable = await responseResponsable.json();

        populateSelect(dataResponsable, "#responsableSelect");

    }
    async postData() {
        const form = document.querySelector('#taskForm')
        form.addEventListener('submit', async (e) => {
            const asignacionesJSON = await getProducts("/asignaciones");
            let data = Object.fromEntries(new FormData(form).entries());
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1;
            const año = fechaActual.getFullYear();
            data.fecha = `${dia}/${mes}/${año}`
            data.id = `As-${(Object.keys(asignacionesJSON).length)+1}`
            setTimeout(() => postProducts("/asignaciones", data), 1500)
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

customElements.define('crear-asignacion', CrearAsignacion)