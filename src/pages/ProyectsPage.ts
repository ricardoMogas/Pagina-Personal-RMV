import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../Components/SimpleCard";

@customElement("proyects-page")
export class ProyectsPage extends LitElement {

    
    render() {
        return html`
        <div class="post-one">
            <div class="title">
                Header
            </div>
            <div class="content">
                <simple-card>Hola</simple-card>
                <simple-card>Hola</simple-card>
                <simple-card>Hola</simple-card>
                <simple-card>Hola</simple-card>
                <simple-card>Hola</simple-card>
                <simple-card>Hola</simple-card>
            </div>
        </div>
        `;
    }

    static styles = css`
        .post-one {
            display: grid;
            grid-template-columns: auto 2fr auto;
            grid-template-rows: auto 1fr;
            place-items: center; // Alinea verticalmente y horizontalmeente solo dentro de un grid, no en sus items
            height: 50vh;
            background-color: var(--yellow);
        }

        .title {
            grid-column: 1 / 2;
            padding: 8px;
            // background-color: lightblue;
            /* TEXT */
            color: var(--dark);
        }

        .content {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-column: 2 / 3;
            padding: 8px;
            // background-color: lightcoral;
        }

        @media (max-width: 700px) {
            .title {
                grid-column: 2 / 3;
                padding: 8px;
                // background-color: lightblue;
            }

            .content {
                display: grid;
                grid-template-columns: auto;
                grid-column: 2 / 3;
                padding: 8px;
                // background-color: lightcoral;
            }
        }
    `;
}

