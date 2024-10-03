import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-card")
export class CardComponent extends LitElement {

    @property({ type: String }) srcimg = "default"; // Corregido a "default"
    @property({ type: String }) color = "defautl";

    render() {
        return html`
            <div class="contour">
                <div class="card">
                    <div class="card-title">
                        Card Title
                    </div>
                    <div class="card-scontent">
                        <slot></slot>
                    </div>
                </div>
                <div class="footer-image">
                    <img 
                        src="https://picsum.photos/200/300"
                        alt=""
                    >
                </div>
            </div>
        `;
    }

    static styles = css`
        .contour {
            // margin: 12px 0;
            // border-radius: 8px;
        }
        
        .card {
            /* POSITION AND SIZE */
            display: flex;
            padding: 16px;
            border-radius: 8px 8px 0 0;
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
        
        .footer-image {
            border-radius: 0 0 8px 8px;
            overflow: hidden;
        }
        .footer-image img {
            object-fit: cover;
            max-height: 124px;
            width: 100%;
            filter: blur(2px);
            border-radius: 0 0 8px 8px;
            transition: filter 0.3s ease, max-height 0.3s ease; /* Transición suave */
        }
        
        hr {
            color: var(--light);
            width: 100%;
        }
        
        /* HOVERS AND ANIMATED */
        .footer-image img:hover {
            filter: none;
            max-height: 200px;
        }
    `;
}
