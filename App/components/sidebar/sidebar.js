import Delete from "../Delete/delete.js";
export class SideBar extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.expandSidebar();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./App/components/sidebar/sidebar.css";
        </style>
        <aside id="sidebar">
        <div class="d-flex">
            <button id="toggle-btn" type="button">
                <i class='bx bx-menu'></i>
            </button>
            <div class="sidebar-logo">
                <img src="storage/img/download logo.png" alt="No disp.">
            </div>
        </div>
        <ul class="sidebar-nav">
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <i class='bx bx-home-alt-2'></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="sidebar-item" >
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#agregar" aria-expanded="false" aria-controls="agregar" data-verocultar='["aG"]'>
                    <i class='bx bx-add-to-queue'></i>
                    <span>Agregar</span>
                </a>
                <ul id="agregar" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["aA"]'>Activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["aM"]'>Marca</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["aP"]'>Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["aE"]'>Estado</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["aTp"]'>Tipo de Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["aTma"]'>Tipo de movimiento de activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["aTa"]'>Tipo de activo</a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#editar" aria-expanded="false" aria-controls="editar" data-verocultar='["eD"]'>
                    <i class='bx bx-edit'></i>
                    <span>Editar</span>
                </a>
                <ul id="editar" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["edA"]'>Activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["edM"]'>Marca</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["edP"]'>Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["edE"]'>Estado</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["edTp"]'>Tipo de Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["edTma"]'>Tipo de movimiento de activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["edTa"]'>Tipo de activo</a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#eliminar" aria-expanded="false" aria-controls="eliminar" data-verocultar='["el"]'>
                    <i class='bx bx-trash-alt' ></i>
                    <span>Eliminar</span>
                </a>
                <ul id="eliminar" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["Activos"]'>Activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["Marcas"]    '>Marca</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["Personas"]'>Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["Estados"]'>Estado</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["TiposPersonas"]'>Tipo de Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["TipoDeMovimientos"]'>Tipo de movimiento de activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["TipoActivos"]'>Tipo de activo</a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false" aria-controls="buscar" data-verocultar='["b"]'>
                    <i class='bx bx-search-alt'></i>
                    <span>Buscar</span>
                </a>
                <ul id="buscar" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["bA"]'>Activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["bM"]'>Marca</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["bP"]'>Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["bE"]'>Estado</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["bTp"]'>Tipo de Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["bTma"]'>Tipo de movimiento de activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link" data-verocultar='["bTa"]'>Tipo de activo</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="sidebar-footer">
            <a href="#" class="sidebar-link">
                <i class='bx bx-exit bx-rotate-180' ></i>
                <span>Logout</span>
            </a>
        </div>
    </aside>
        `;
        this.querySelectorAll(".sidebar-link").forEach((val)=>{
            val.addEventListener("click", (e)=>{
                let data = JSON.parse(e.target.dataset.verocultar)[0];
                let mainContent = document.querySelector('#mainContent');
                mainContent.innerHTML= "";
                let deleteM = new Delete()
                deleteM.render(data)
                
                switch (data){
                    case 'aA':
                        mainContent.innerHTML= "<form-register></form-register>";
                        break;
                    case 'aM':
                        mainContent.innerHTML= "<form-marca></form-marca>";
                        break;
                    case 'aP':
                        mainContent.innerHTML= "<form-persona></form-persona>";
                        break;
                    case 'aE':
                        mainContent.innerHTML= "<form-estado></form-estado>";
                        break;
                    case 'aTp':
                        mainContent.innerHTML= "<form-tipo-persona></form-tipo-persona>";
                        break;
                    case 'aTma':
                        mainContent.innerHTML= "";
                        break;
                    case 'aTa':
                        mainContent.innerHTML= "<form-tipo-activo></form-tipo-activo>";
                        break;
                    case 'edA':
                        mainContent.innerHTML= "<form-register></form-register>";
                        break;
                    case 'edM':
                        mainContent.innerHTML= "";
                        break;
                    case 'edP':
                        mainContent.innerHTML= "";
                        break;
                    case 'edE':
                        mainContent.innerHTML= "";
                        break;
                    case 'edTp':
                        mainContent.innerHTML= "";
                        break;
                    case 'edTma':
                        mainContent.innerHTML= "";
                        break;
                    case 'edTa':
                        mainContent.innerHTML= "";
                        break;
                    case 'Activos':
                        mainContent.innerHTML= "";
                        break;
                    case 'Marcas':
                        mainContent.innerHTML= "<delete-element></delete-element>";
                        break;
                    case 'Personas':
                        mainContent.innerHTML= "<delete-element></delete-element>";
                        break;
                    case 'Estados':
                        mainContent.innerHTML= "<delete-element></delete-element>";
                        break;
                    case 'TiposPersonas':
                        mainContent.innerHTML= "<delete-element></delete-element>";
                        break;
                    case 'TipoDeMovimientos':
                        mainContent.innerHTML= "<delete-element></delete-element>";
                        break;
                    case 'TipoActivos':
                        mainContent.innerHTML= "<delete-element></delete-element>";
                        break;
                    case 'bA':
                        mainContent.innerHTML= "<form-register></form-register>";
                        break;
                    case 'bM':
                        mainContent.innerHTML= "";
                        break;
                    case 'bP':
                        mainContent.innerHTML= "";
                        break;
                    case 'bE':
                        mainContent.innerHTML= "";
                        break;
                    case 'bTp':
                        mainContent.innerHTML= "";
                        break;
                    case 'bTma':
                        mainContent.innerHTML= "";
                        break;
                    case 'bTa':
                        mainContent.innerHTML= "";
                        break;
                }
                e.stopImmediatePropagation();
                e.preventDefault();
            })
        })
    }
    expandSidebar() {
        const hamburger = document.querySelector('#toggle-btn');
        hamburger.addEventListener('click', () => {
            document.querySelector('#sidebar').classList.toggle('expand')
        })
    }
}
customElements.define("sidebar-nav", SideBar);