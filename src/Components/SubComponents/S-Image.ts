import {customElement, property} from "lit/decorators.js";
import {html, LitElement, css} from "lit";

@customElement('s-img')
export class SImg extends LitElement {
    @property({type: String}) src?: string;
    @property({type: Number}) size = 200;
    @property({type: Number}) shadow = 0;  // Propiedad para la sombra
    @property({type: String}) borderRadius = '0';  // Propiedad para los bordes redondeados ('0' o '50%')
    @property({type: String}) alt = '';  // Texto alternativo
    @property({type: Number}) border = 0; // si se le asigna un numero por encima de 0 es border style solid

    render() {
        return html`
            <img
                src="${this.src}"
                alt="${this.alt}"
                style="
                    width: ${this.size}px; 
                    height: ${this.size}px; 
                    box-shadow: 0 0 4px rgba(0,0,0,${this.shadow}); 
                    border-radius: ${this.borderRadius === 'circle' ? '50%' : this.borderRadius};
                    outline: ${ this.border > 0 ? this.border+'px solid var(--primary)' : 'none' };
                    outline-offset: ${ this.border > 0 ? '4px' : '0'};
                "
            />
        `;
    }

    static styles = css`
        img {
            object-fit: cover;
        }
    `;

}
