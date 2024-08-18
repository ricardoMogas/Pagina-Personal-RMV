import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('home-page')
export class HomePage extends LitElement {
    render() {
        return html`
            <h1>Home Page</h1>
            <p>
                Welcome to the home page, here you can see all the information about the page.
            </p>
        `;
    }

    static styles = css`
    h1 {
        margin: 20px;
    }
    p {
        margin: 20px;
    }
    `;
}

