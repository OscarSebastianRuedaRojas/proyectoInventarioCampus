export class SideBar extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        
        `
    }
    expandSidebar() {
        const hamburger = document.querySelector('#toggle-btn');
        hamburger.addEventListener('click', () => {
            document.querySelector('#sidebar').classList.toggle('expand')
        })
    }
}