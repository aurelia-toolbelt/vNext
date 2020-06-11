import { customAttribute, inject } from "aurelia";
import * as css from './at-ripple.css'

@customAttribute({ name: 'at-ripple'})
@inject(Element)
export class RippleCustomAttribute {
    constructor(private element: Element) {
    }
    afterAttach() {
        console.log("Ripple effect");
        let htmlElement = this.element as HTMLElement;
        htmlElement.setAttribute('data-animation', 'ripple');
        htmlElement.addEventListener('mousedown', function (e) {
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
                ripple.remove();
            }, 500);
        })
    }
}

