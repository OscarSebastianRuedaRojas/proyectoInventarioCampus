import { postProducts, getProducts, putProducts } from '../../../../Api/db/db.js';

export class RetornarActivo extends HTMLElement {
    constructor() {
        super();
        this.renderPersonasAsignaciones();
        this.renderListaActivosRetonar();
    }
    async renderPersonasAsignaciones() {
        this.innerHTML = /* HTML */ `
            <style>
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm"></form>
                    <table class="table table-hover caption-top">
                        <caption>Lista de personas</caption>
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
        const personas = await getProducts(`/Personas`);
        personas.forEach(persona => {
            const tr = document.createElement('tr');
            tr.innerHTML = /* HTML */`
                <td id="id">${persona.id}</td>
                <td id="name">${persona.name}</td>
                <td><button type="button" id="${persona.id}" class="elegirBoton">Elegir</button></td>
            `;
            tbody.appendChild(tr);
        });
        const elegir = this.querySelector('.elegirBoton')
        elegir.addEventListener('click', (e) => {
            this.renderListaActivosRetonar()
        })
    }
    async renderListaActivosRetonar() {
        this.innerHTML = /* HTML */ `
            <style>
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm"></form>
                    <table class="table table-hover caption-top">
                        <caption>Lista de activos para retornar</caption>
                        <thead>
                            <tr>  
                                <th scope="col">Identificador</th>
                                <th scope="col">Persona responsable</th>
                                <th scope="col">Fecha de entrega</th>
                                <th scope="col">Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        `;
        const tbody = this.querySelector('tbody');
        const asignaciones = await getProducts(`/asignaciones`);
        const personas = await getProducts(`/Personas`);
        asignaciones.forEach(asignacion => {
            const tr = document.createElement('tr');
            const ind = personas.findIndex(persona => persona.id === asignacion.responsableId);
            tr.innerHTML = /* HTML */`
                <td id="id">${asignacion.id}</td>
                <td id="name">${personas[ind].name}</td>
                <td id="name">${asignacion.fecha}</td>
                <td><button type="button" id="${asignacion.id}" class="elegirBoton">Elegir</button></td>
            `;
            tbody.appendChild(tr);
    })

}}

customElements.define('retornar-activo', RetornarActivo);