import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('resources-page')
export class ResourcesPage extends LitElement {
    render() {
        return html`
            <div class="container-resources">
                <h1>Resources Page</h1>
                <p>
                    Welcome to the home page, here you can see all the information about the page.
                </p>
            </div>
            <div class="glass">asf</div>
        `;
    }

    static styles = css`
        .container-resources {
            background-color: var(--green   );
        }
    `;
}

