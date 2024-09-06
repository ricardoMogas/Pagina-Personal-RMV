import {LitElement, html, css} from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('info-page')
export class InfoPage extends LitElement {
    
    render() {
        return html`
        <div class="container-info">
            <h1>info page</h1>
            <p>Here you can see all the info</p>
        </div>
        `;
    }

    static styles = css`
        .container-info {
            height: 200px;
            width: auto;
            color: var(--light);
            background-color: var(--dark);
        }
    `;
}

