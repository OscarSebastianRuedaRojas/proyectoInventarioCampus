import { getProducts } from "../../../../Api/db/db.js";
import { putProducts } from "../../../../Api/db/db.js";
export class Buscar extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.searchAssets()
        this.showAssetInfo()
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
                if (asset.Descripcion.toLowerCase().includes(assetDescription.toLowerCase())) {
                        let searchResult = document.createElement('div')
                        searchResult.setAttribute('class', 'search-result')
                        searchResult.innerHTML = /*html */ `
                        <p>${asset.id}</p>
                        <p>${asset.name}</p> 
                        <p>${asset.EstadoId}</p>
                        <button type="button" class="details" id="${asset.id}"><i class='bx bx-info-circle'></i></button>
                        `
                        results.appendChild(searchResult)
                    }
                })
            const botonesInfo = this.querySelectorAll('.details')
            botonesInfo.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idAsset = e.target.id;
                    this.showAssetInfo(assets, idAsset)
                })
            })
        });
        
    }
    showAssetInfo(assets, idAsset) {
            let mainContent = document.querySelector('.mainContent')
            let asset = assets.find(asset => asset.id === idAsset);
            let assetInfo = document.createElement('div')
            assetInfo.innerHTML = /* HTML */ `
            <div class="asset"">
                    <div class=" asset-body">
                    <fieldset>
                        <legend style="text-align: center"> Activo </legend>
                        <fieldset>
                            <legend> Nombre del activo</legend>
                            <div class="form-group">
                                <h3>${asset.name}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Id</legend>
                            <div class="form-group">
                                <h3>${asset.id}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend> Estado</legend>
                            <div class="form-group">
                                <h3>${asset.EstadoId}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend> Descripcion</legend>
                            <div class="form-group">
                                <h3>${asset.Descripcion}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Marca</legend>
                            <div class="form-group">
                                <h3>${asset.MarcaId}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Categoria</legend>
                            <div class="form-group">
                                <h3>${asset.categoryId}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Tipo de item</legend>
                            <div class="form-group">
                                <h3>${asset.TipoActivoId}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend> Valor unitario</legend>
                            <div class="form-group">
                                <h3>${asset["Valor unitario"]}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Proveedor</legend>
                            <div class="form-group">
                                <h3>${asset.ProveedoreId}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend> Numero de serial</legend>
                            <div class="form-group">
                                <h3>${asset.Serial}</h3>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Empresa responsable </legend>
                            <div class="form-group">
                                <h3>${asset.EmpresaId}</h3>
                            </div>
                        </fieldset>
                        <button type="button" id="close">Cerrar</button>
                    </div>
                </div>
            `
            mainContent.appendChild(assetInfo)
            let closeButton = document.querySelector('#close')
            closeButton.addEventListener('click', (e) => {
                e.preventDefault()
                mainContent.removeChild(assetInfo)
            })
    }
}
customElements.define("search-asset", Buscar)