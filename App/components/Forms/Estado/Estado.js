export class FormEstado extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.postData()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Forms/Estsado/Estado.css"; 
        </style>
        <div class="formCard"">
                <div class="formCard-body">
                    <form id="taskForm">
                        <fieldset>
                            <legend style="text-align: center"> Agregar Estado </legend>
                            <fieldset>
                                <legend> Estado</legend>
                            <div class="form-group">
                                <label for="estado">Estado:</label>
                                <input type="text" id="estado" name="estado"
                                    placeholder="Añadir Estado" required>
                            </div>
                            <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        `
    }
    async postData() {
        const form = document.querySelector('#taskForm')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            e.stopPropagation();
            let data = Object.fromEntries(new FormData(form).entries())
            console.log(data);
            async function postProducts(endpoint, data) {
                try {
                    const response = await fetch(`${URL_API}${endpoint}`,
                        {
                            method: "POST",
                            headers: myHeader,
                            body: JSON.stringify(data)
                        }
                    )
                    if (!response.ok) {
                        throw new Error("Error en la petición.")
                    }
                    return await response.json()
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            }
            postProducts("http://localhost:3000/Estados", data)
        })



    }
}

customElements.define('form-estado', FormEstado)