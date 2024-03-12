import { postProducts, getProducts, putProducts } from '../../../../Api/db/db.js';

export class RetornarActivo extends HTMLElement {
    constructor() {
        super();
        this.renderPersonasAsignaciones();
        this.renderListaActivosRetonar();
    }
    renderPersonasAsignaciones() {
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
    }
    renderListaActivosRetonar() {
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
                                <th scope="col">Descripción</th>
                                <th scope="col">Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        `;
        
    }

}

customElements.define('retornar-activo', RetornarActivo);