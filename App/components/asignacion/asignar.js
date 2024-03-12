import { postProducts, getProducts, putProducts } from '../../../../Api/db/db.js';

export class AsignarActivo extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    async render() {
        const elements = await getProducts(`/asignaciones`);
        const personas = await getProducts(`/Personas`);
        const activos = await getProducts(`/Activos`);
        const detallesMovimientosJSON = await getProducts("/DetallesMovimientos");
        const HistorialActivosJSON = await getProducts("/HistorialActivos");
        
        this.innerHTML = /* HTML */ `
            <style>
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm"></form>
                    <table class="table table-hover caption-top">
                        <caption>Lista de Activos</caption>
                        <thead>
                            <tr>  
                                <th scope="col">Identificador</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        `;

        const tbody = this.querySelector('tbody');
        elements.forEach(element => {
            const tr = document.createElement('tr');
            const idNombre = element.responsableId;
            const ind = personas.findIndex(persona => persona.id === idNombre);
            console.log(personas);
            console.log(ind);
            console.log(personas[ind]);
            tr.innerHTML = /* HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${personas[ind].name}</td>
                <td><button type="button" id="${element.id}" class="elegirBoton">Elegir</button></td>
            `;
            tbody.appendChild(tr);
        });

        const botones = this.querySelectorAll(".elegirBoton");
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const idAsignacion = boton.id;
                this.renderActivos(activos, idAsignacion, detallesMovimientosJSON, idNombre, HistorialActivosJSON);
            });
        });
    }

    renderActivos(activos, idAsignacion, detallesMovimientosJSON, idNombre, HistorialActivosJSON ) {
        this.innerHTML = /* HTML */`
            <style>
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm"></form>
                    <table class="table table-hover caption-top">
                        <caption>Lista de Activos</caption>
                        <thead>
                            <tr>  
                                <th scope="col">Identificador</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        `;

        const tbody = this.querySelector('tbody');
        activos.forEach(element => {
            const tr = document.createElement('tr');
            if(element.EstadoId==="Es-0"){
                tr.innerHTML = /* HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${element.name}</td>
                <td><button type="button" id="${element.id}" class="elegirActivo">Elegir</button></td>
            `;
            tbody.appendChild(tr);
            }
        });

        const botonesActivos = this.querySelectorAll(".elegirActivo");
        botonesActivos.forEach(boton => {
            boton.addEventListener("click", async () => {
                const idActivo = boton.id;
                const ind = activos.findIndex(activo => activo.id === idActivo);
                let idEstado = "Es-1"
                activos[ind].EstadoId = idEstado;
                await this.putProductss("/Activos", idActivo, activos[ind]);
                this.renderFormulario(idAsignacion, idActivo, detallesMovimientosJSON, idNombre, HistorialActivosJSON, idEstado);
            });
        });
    }

    async putProductss(endpoint, idActivo, activo) {
        await putProducts(endpoint, idActivo, activo);
    }

    renderFormulario(idAsignacion, idActivo, detallesMovimientosJSON, idNombre, HistorialActivosJSON, idEstado) {
        this.innerHTML = /* HTML */`
            <style>
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center">Crear Asignación</legend>
                        </fieldset>
                        <fieldset>
                            <legend>Selecciona el responsable</legend>
                            <div class="form-group">
                                <input type="text" id="comentario" name="comentario" placeholder="Comentario" required>
                            </div>
                        </fieldset>
                        <button type="submit" id="submit">Enviar</button>
                    </form>
                </div>
            </div>
        `;
        
        const form = this.querySelector('#taskForm');
        const submit = this.querySelector("#submit");

        submit.addEventListener("click", async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1;
            const año = fechaActual.getFullYear();
            let fecha = `${dia}/${mes}/${año}`
            data.fecha = fecha;
            data.asignacioneId = idAsignacion;
            data.activoId = idActivo;
            data.id = `Dm-${Object.keys(detallesMovimientosJSON).length + 1}`;
            await postProducts("/DetallesMovimientos", data);
            this.generarHistorial(idActivo, idNombre, idEstado, fecha, HistorialActivosJSON)
        });
    }
    async generarHistorial(idActivo, idResponsable, idEstado, fecha, HistorialActivosJSON){
        let id = `Ha-${Object.keys(HistorialActivosJSON).length + 1}`
        let data = {
            id: id,
            ActivoId: idActivo,
            fecha: fecha,
            PersonaId: idResponsable,
            EstadoId: idEstado
        }
        await postProducts("/HistorialActivos", data)
    }
}

customElements.define('asignar-activo', AsignarActivo);

