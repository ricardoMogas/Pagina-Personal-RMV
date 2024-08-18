import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("simple-card")
export class CardComponent extends LitElement {
    render() {
        return html`
        <div class="card">
            <div class="card-title">Card Title</div>
            <div class="card-content">
                <slot></slot>
            </div>
        </div>
        `;
    }

    static styles = css`
    .card {
        width: 20em;
        height: 16em;
        background: var(--dark);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 20px var(--secondary);
    }

    .card-title {
        color: var(--light);
        font-size: 1.5em;
        padding: 10px;
    }
    `;
}