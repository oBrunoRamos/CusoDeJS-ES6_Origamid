export default function initModal(){
    const login = document.querySelector("[data-modal='abrir']");
    const fechar = document.querySelector('[data-modal="fechar"]')
    const modal = document.querySelector('[data-modal="container"]')

    if(login && fechar && modal){

        function toggleModal(event){
            event.preventDefault()
            modal.classList.toggle('ativo')
        }
        function cliqueForaModal(event){
            if(event.target === this)
                toggleModal(event)
        }

        login.addEventListener('click', toggleModal)
        fechar.addEventListener('click', toggleModal)
        modal.addEventListener('click', cliqueForaModal)
    }
}


