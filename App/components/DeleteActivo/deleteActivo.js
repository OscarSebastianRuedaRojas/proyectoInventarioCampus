import { getProducts } from "../../../Api/db/db.js";
import { delProducts } from "../../../Api/db/db.js";
export class DeleteActivo extends HTMLElement {
    constructor() {
        super();
        this.render()
        this.searchData()
    }
    async render() {
        const miniTitle = 'Lista de activos'
        const elements = Array.from(await getProducts(`/Activos`));
        elements.forEach(element => {
            console.log(element.id);
        });
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/DeleteActivo/deleteActivo.css"; 
        </style>
        <div class="formCard">
            <div class="formCard-body">
                <form id="taskForm"></form>
                <table class="table caption-top">
                <caption>Lista de ${miniTitle} &nbsp;<input type="text" placeholder="Buscar ${miniTitle}"></caption>
                <thead>
                  <tr>  
                    <th scope="col">Identificador</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Seleccionar</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
                <button type="button" id="eliminarBoton">Eliminar </button>
            </div>
        </div>
        `;
        const tbody = this.querySelector('tbody')
        elements.forEach(element => {
            let tr = document.createElement('tr');
            tr.setAttribute('id', `${element.name}`)
            if(element?.EstadoId==="Es-2"){
                tr.innerHTML = /*HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${element.Descripcion}</td>
                <td><input type="checkbox" id="${element.id}" class="checkbox"></td>
            `;
            tbody.appendChild(tr);
            }
        });
        let content= this.querySelector(".formCard-body")
        if (tbody.innerHTML.trim() === '') {
            content.innerHTML = /* HTML */ `
            <img src="storage/gif/astronauta.gif" class="astronauta" alt="">
            <p>No hay elementos disponibles para eliminar</p>
            `
            console.log('El elemento está vacío.');
        }
        const boton = this.querySelector("#eliminarBoton");
        boton.addEventListener("click", () => {
            const inputs = this.querySelectorAll(".checkbox");
            inputs.forEach(input => {
                console.log(input.id);
                if (input.checked){
                    let idEliminar = input.id;
                    delProducts(`/Activos`, idEliminar);
                }
            });
        });
    }
    async searchData(elements, searchValue) {
        const trId = document.querySelectorAll('tr')
        trId.forEach(i => {
            if (i.id.toLowerCase().includes(searchValue)) {
                i.style.display = 'table-row'
            } else {
                i.style.display = 'none'
            }
        })
    }
}

customElements.define("delete-element-activo", DeleteActivo);