import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('info-page')
export class InfoPage extends LitElement {
    
    render() {
        return html`
        <h1>info page</h1>
        <p>Here you can see all the info</p>
        `;
    }
}

