export default function initTolltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item)=>{
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event){
        const tooltipBox = criarTooltipBox(this);
        

        onMouseMove.tooltipBox = tooltipBox
        onMouseMove.element = this
        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave);  
    }

    const onMouseMove = {
        tooltipBox: '',
        element: '',
        handleEvent(event){
            this.tooltipBox.style.top = event.pageY +20+ 'px';
            this.tooltipBox.style.left = event.pageX +20+ 'px';
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }


    const onMouseLeave = {
        tooltipBox: '',
        element: '',
        handleEvent(){
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave);
        }
    }


    function criarTooltipBox(element){
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox
    }
}


