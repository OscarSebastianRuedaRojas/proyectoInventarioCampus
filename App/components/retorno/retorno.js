import { getProducts, delProducts } from '../../../Api/db/db.js';

export class RetornarActivo extends HTMLElement {
    constructor() {
        super();
        this.renderAsignaciones();
    }

    async renderAsignaciones() {
        this.innerHTML = /* HTML */ `
            <style>
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm"></form>
                    <table class="table table-hover caption-top">
                        <caption>Lista de activos</caption>
                        <thead>
                            <tr>  
                                <th scope="col">Identificador</th>
                                <th scope="col">responsable</th>
                                <th scope="col">Fecha asignado</th>
                                <th scope="col">Seleccionar </th>
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
            const personaInd = personas.findIndex(persona => persona.id === asignacion.responsableId);
            const tr = document.createElement('tr');
            tr.innerHTML = /* HTML */`
                <td>${asignacion.id}</td>
                <td>${personas[personaInd].name}</td>
                <td>${asignacion.fecha}</td>
                <td><button type="button" data-id="${asignacion.id}" class="elegirBtn">Retornar</button></td>
            `;
            tbody.appendChild(tr);
        });

        const elegirBtns = document.querySelectorAll('.elegirBtn');
        elegirBtns.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const asignacionId = e.target.dataset.id;
                this.renderListaActivosRetonar(asignacionId);
            });
        });
    }

    async renderListaActivosRetonar(asignacionId) {
        this.innerHTML = /* HTML */ `
            <style>
                @import "./App/components/Editar/editarActivo/editarActivo.css"; 
            </style>
            <div class="formCard">
                <div class="formCard-body">
                    <form id="taskForm"></form>
                    <table class="table table-hover caption-top">
                        <caption>Lista de movimientos</caption>
                        <thead>
                            <tr>  
                                <th scope="col">Identificador</th>
                                <th scope="col">comentario</th>
                                <th scope="col">Fecha asignado</th>
                                <th scope="col">asignacion </th>
                                <th scope="col">activo </th>
                                <th scope="col">Seleccionar </th>
                                
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        `;
        const tbody = this.querySelector('tbody');
        const detallesMovimientosJSON = await getProducts("/DetallesMovimientos");
        const asignaciones = await getProducts(`/asignaciones`);
        const personas = await getProducts(`/Personas`);
        const activos = await getProducts(`/Activos`);
        detallesMovimientosJSON.forEach(movimiento => {
            if (movimiento.asignacioneId == asignacionId) {
                const tr = document.createElement('tr');
                tr.innerHTML = /* HTML */`
                    <td>${movimiento.id}</td>
                    <td>${movimiento.comentario}</td>
                    <td>${movimiento.fecha}</td>
                    <td>${asignacionId}</td>
                    <td>${movimiento.activoId}</td>
                    <td><button type="button" id="${movimiento.id}"class="retornar-btn">Retornar</button></td>
                `;
                tbody.appendChild(tr);
            }
        });
        const retornarBtn = document.querySelectorAll('.retornar-btn')
        retornarBtn.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                let movimientoId = e.target.id
                const detallesMovimientosJSON = await delProducts("/DetallesMovimientos", movimientoId);
                console.log("Se borró");
                
            })
        })
    }
}

customElements.define('retornar-activo', RetornarActivo);
