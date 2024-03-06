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
                <a href="#">CodzSword</a>
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
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#agregar" aria-expanded="false" aria-controls="agregar">
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
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#editar" aria-expanded="false" aria-controls="editar">
                    <i class='bx bx-edit'></i>
                    <span>Editar</span>
                </a>
                <ul id="editar" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Marca</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Estado</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de movimiento de activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de activo</a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#eliminar" aria-expanded="false" aria-controls="eliminar">
                    <i class='bx bx-trash-alt' ></i>
                    <span>Eliminar</span>
                </a>
                <ul id="eliminar" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Marca</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Estado</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de movimiento de activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de activo</a>
                    </li>
                </ul>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false" aria-controls="buscar">
                    <i class='bx bx-search-alt'></i>
                    <span>Buscar</span>
                </a>
                <ul id="buscar" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Marca</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Estado</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de Persona</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de movimiento de activo</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">Tipo de activo</a>
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
                let data = JSON.parse(e.target.dataset.verocultar);
                let mainContent = document.querySelector('#mainContent');
                mainContent.innerHTML= "";
                switch (data[0]){
                    case 'aA':
                        mainContent.innerHTML= "<form-register></form-register>";
                        break;
                    case 'c':
                        mainContent.innerHTML= "";
                        break;
                    case 'v':
                        mainContent.innerHTML= "";
                        break;
                    case 'f':
                        mainContent.innerHTML= ""
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