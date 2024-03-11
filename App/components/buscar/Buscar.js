import { getProducts } from "../../../../Api/db/db.js";
import { putProducts } from "../../../../Api/db/db.js";
export class Buscar extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.searchAssets()
    }
    async render() {
        const assets = Array.from(await getProducts(`/Activos`));
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
        @import "./App/components/Buscar/Buscar.css"; 
        </style>
        <div class="search-card">
            <div class="search-body">
                <fieldset>
                    <legend>Buscar Activo</legend>
                </fieldset>
                <form id="getAsset">
                    <input type="text" id="search-description" placeholder="Ingrese descripcion" required>
                    <button type="submit" id="search-button">Buscar</button>
                </form>
            </div>
            <div class="results">
            </div>
        </div>
        `
        const searchDescription = this.querySelector('#search-description')
        const searchButton = this.querySelector('#search-button')
        const results = this.querySelector('.results')
        searchButton.addEventListener('click', (e) => {
            results.innerHTML= ''
            if (searchDescription.value == '' ) {
                return
            }
            e.preventDefault()
            const assetDescription = searchDescription.value; 
            assets.forEach((asset) => {
                if (asset.Descripcion.toLowerCase().includes(assetDescription)) {
                        let searchResult = document.createElement('div')
                        searchResult.setAttribute('class', 'search-result')
                        searchResult.innerHTML = /*html */ `
                        <p>${asset.id}</p>
                        <p>${asset.name}</p> 
                        <p>${asset.EstadoId}</p>
                        <button type="button" id="details"><i class='bx bx-info-circle'></i></button>
                        `
                        results.appendChild(searchResult)
                    }
                })
            
        });
        function search(heroes) {
            const searchInput = document.querySelector('#search');
            const filter = searchInput.value.toLowerCase();
            const card = document.querySelectorAll('.card')
            card.forEach(card => {
                if (card.id.toLowerCase().includes(filter)) {
                    card.style.display = ''
                }
                else {
                    card.style.display = 'none';
                }
            })
        }
    }
}
customElements.define("search-asset", Buscar)