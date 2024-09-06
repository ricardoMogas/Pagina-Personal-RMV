import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-card")
export class CardComponent extends LitElement {

    @property({ type: String }) srcimg = "default"; // Corregido a "default"
    @property({ type: String }) color = "defautl";

    render() {
        return html`
            <div class="contour">
                <header></header>
                <div class="card">
                    <div class="card-title">Card Title</div>
                    <!-- Comillas añadidas alrededor de src -->
                    <img src="${this.srcimg}" alt="">
                    <hr>
                    <div class="card-scontent">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }

    static styles = css`
        .contour {
            margin: 12px;
            box-shadow: 0 0 8px var(--secondary);
            border-radius: 8px;
        }
        
        header {
            /* POSITION AND SIZE */
            height: 24px;
            width: 100%;
            border-radius: 8px 8px 0 0;
            /* BACKGROUND and EFECTS */
            background-color: var(--dark-transparent);
        }
        
        
        
        .card {
            /* POSITION AND SIZE */
            display: flex;
            padding: 16px;
            min-height: 100px;
            min-width: 100px;
            border-radius: 0 0 8px 8px;
            /* BACKGROUND and EFECTS */
            background: var(--dark);
            flex-direction: column;
        }
        
        .card-title {
            color: var(--light);
            font-size: 1.5em;
            padding: 10px;
            text-align: center;
        }
        .card img {
            width: 100%;
            height: auto;
            border-radius: 4px;
        }
        
        hr {
            color: var(--light);
            width: 100%;
        }
    `;
}
