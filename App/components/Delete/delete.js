import { getProducts } from "../../../Api/db/db.js";
import { delProducts } from "../../../Api/db/db.js";
export default class Delete extends HTMLElement {
    constructor() {
        super();
        this.connectedCallback()
        this.searchData()
    }

    async connectedCallback() {
        let eleccion = event.target.dataset.verocultar
        await this.render(JSON.parse(eleccion)[0]);
    }
    async render(eleccion) {
        let texto = eleccion;
        let title = texto.replace((/([a-z])([A-Z])/g), '$1 $2');
        let miniTitle = title.toLowerCase()
        const elements = Array.from(await getProducts(`/${eleccion}`));
        elements.forEach(element => {
            (element.id);
        });
        this.innerHTML = /* HTML */`
        <style rel="stylesheet">
            @import "./App/components/Delete/delete.css"; 
        </style>
        <div class="formCard">
            <div class="formCard-body">
                <form id="taskForm">
                <table class="table caption-top">
                <caption>Lista de ${miniTitle} &nbsp;<input type="text" placeholder="Buscar ${miniTitle}" id="inputSearch"></caption>
                <thead>
                  <tr>  
                    <th scope="col">Identificador</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Seleccionar</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
           </div>
                </form>
                <button type="button" id="eliminarBoton">Eliminar </button>
            </div>
        </div>
        `;
        const taskForm = this.querySelector("#taskForm");
        const tbody = this.querySelector('tbody')
        elements.forEach(element => {
            let tr = document.createElement('tr');
            tr.setAttribute('id', `${element.name}`)
            tr.innerHTML = /*HTML */`
                <td id="id">${element.id}</td>
                <td id="name">${element.name}</td>
                <td><input type="checkbox" id="${element.id}" class="checkbox"></td>
            `;
            tbody.appendChild(tr);
        });

        const boton = this.querySelector("#eliminarBoton");
        boton.addEventListener("click", () => {
            const inputs = this.querySelectorAll(".checkbox");
            inputs.forEach(input => {
                (input.id);
                if (input.checked) {
                    let idEliminar = input.id;
                    delProducts(`/${eleccion}`, idEliminar);
                }
            });
        });
        const inputSearch = document.querySelector('#inputSearch')
        inputSearch.addEventListener('input', (e) => {
            this.searchData(elements, inputSearch.value)
        })
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

customElements.define("delete-element", Delete);
