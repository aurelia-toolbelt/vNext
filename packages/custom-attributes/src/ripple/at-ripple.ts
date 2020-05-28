import { customAttribute, inject } from "aurelia";

@customAttribute({ name: 'at-ripple' })
@inject(Element)
export class RippleEffect {
    constructor(private element: Element) {
    }

    afterAttach() {
        (<HTMLElement>this.element).addEventListener('mousedown', function (e) {
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            const w = this.offsetWidth.toString();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.setProperty('--scale', w);
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.parentNode.removeChild(ripple);
            }, 500);
        })
    }
}

