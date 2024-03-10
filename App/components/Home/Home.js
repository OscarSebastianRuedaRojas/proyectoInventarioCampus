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
                    <div class="card-item">
                        <div class="card-icon"><i class='bx bx-add-to-queue'></i></div>
                        <div class="card-text"><h2>Agregar</h2></div>
                        <div class="card-button"><button>Agregar</button></div>
                    </div>
                    <div class="card-item">
                        <div class="card-icon"><i class='bx bxs-edit-alt'></i></div>
                        <div class="card-text"><h2>Editar</h2></div>
                        <div class="card-button"><button>Editar</button></div>
                    </div>
                    <div class="card-item">
                        <div class="card-icon"><i class='bx bxs-trash'></i></div>
                        <div class="card-text"><h2>Eliminar</h2></div>
                        <div class="card-button"><button>Eliminar</button></div>
                    </div>
                </div>
            </section>
            `
        }
    }

    customElements.define("home-content", Home)