
import { getProducts } from '../../../../Api/db/db.js';
import { postProducts } from '../../../../Api/db/db.js';
export class FormEstado extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Forms/Estado/Estado.css"; 
        </style>
        <div class="formCard"">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Agregar Estado </legend>
                            <fieldset>
                            <div class="form-group">
                                <input type="text" id="estado" name="name"
                                    placeholder="Añadir Estado" required>
                            </div>
                            <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <custom-alert></custom-alert>
        `
    }
    async postData() {
        const form = document.querySelector('#taskForm')
        form.addEventListener('submit', async (e) => {
            const EstadosJSON = await getProducts("/Estados");
            let data = Object.fromEntries(new FormData(form).entries());
            data.id = `Es-${(Object.keys(EstadosJSON).length)}`
            setTimeout(() => postProducts("/Estados", data), 1500)
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

customElements.define('form-estado', FormEstado)