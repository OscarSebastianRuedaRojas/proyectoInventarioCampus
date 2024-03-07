export class Alert extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.showAlert()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style rel="stylesheet">
            @import "./App/components/Alert/Alert.css"; 
        </style>
            <div id="alert" class="alert">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                ¡Agregado con éxito!
            </div>
        `
    }
    showAlert() {
        document.getElementById("taskForm").addEventListener("submit", function(event){
            event.preventDefault();
            document.getElementById("alert").style.display = "block"; 
            setTimeout(function(){ document.getElementById("alert").style.display = "none"; }, 5000);
        });
    }
}

customElements.define("custom-alert", Alert)