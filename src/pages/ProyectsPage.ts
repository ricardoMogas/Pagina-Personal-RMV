import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../Components/SimpleCard";

@customElement("proyects-page")
export class ProyectsPage extends LitElement {

    render() {
        return html`
        <div class="container">
            <div class="title">
                <h1>Proyects</h1>
                <p>Here you can see all the proyects</p>
            </div>
            <div class="grid">
                <simple-card></simple-card>
                <simple-card></simple-card>
                <simple-card></simple-card>
            </div>
        </div>
        `;
    }

    static styles = css`
        .container {
            margin-top: 14%;
            display: flex;
        }

        .title {
            margin: 20px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* Modified code */
            gap: 20px;
            padding: 20px;
        }
    `;
}

