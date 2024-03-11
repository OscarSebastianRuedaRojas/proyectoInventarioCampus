    export class Home extends HTMLElement {
        constructor() {
            super()
            this.render();
        }
        render() {
            this.innerHTML = /* HTML */ `
            <style rel="stylesheet">
                @import "./App/components/Home/Home.css";
            </style>
            <section class="home-page">
            
                <div class="welcome-text">
                <div class="welcome-text-img"><img src="https://cdn-icons-png.flaticon.com/512/2897/2897785.png" alt=""></div>
                    <h1>Bienvenido a nuestro Gestor de Inventario para Campuslands</h1>
                    <p>Administra fácilmente tus recursos con nuestra intuitiva plataforma. Agrega, edita y elimina elementos en cuestión de segundos, optimizando tus procesos de gestión.</p>
                </div>
                <div class="card-container">
                    <div class="card-item" id="ubicacion">
                        <div class="card-icon"><i class='bx bxs-edit-location'></i></div>
                        <div class="card-text"><h2>Ubicacion</h2></div>
                        <div class="card-button"><button>Asignar Ubicacion a activo</button></div>
                    </div>
                    <div class="card-item" id="mantenimiento">
                        <div class="card-icon"><i class='bx bxs-first-aid'></i></div>
                        <div class="card-text"><h2>Mantenimiento</h2></div>
                        <div class="card-button"><button>Mantenimiento de un activo</button></div>
                    </div>
                    <div class="card-item" id="Baja">
                        <div class="card-icon"><i class='bx bxs-shield-x'></i></div>
                        <div class="card-text"><h2>Baja</h2></div>
                        <div class="card-button"><button>Dar de baja un activo</button></div>
                    </div>
                </div>
            </section>
            `
            let ubicacion = this.querySelector("#ubicacion")
            let mantenimiento = this.querySelector("#mantenimiento")
            let baja = this.querySelector("#baja")
            let mainContent = document.querySelector("#mainContent")
            ubicacion.addEventListener("click", ()=>{
                mainContent.innerHTML = "<editar-ubicacion></editar-ubicacion>"
            })
            mantenimiento.addEventListener("click", ()=>{
                mainContent.innerHTML = "<editar-mantenimiento></editar-mantenimiento>"
            })
            // baja.addEventListener("click", ()=>{
            //     mainContent.innerHTML = "<editar-baja></editar-baja>"
            // })
        }
    }

    customElements.define("home-content", Home)