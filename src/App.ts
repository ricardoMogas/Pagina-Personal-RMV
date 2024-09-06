import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './pages/HomePage';
import "./pages/ProyectsPage";
import "./pages/InfoPage"
import './Components/NavBar';

@customElement('app-router')
class AppRouter extends LitElement {

    render() {
        return html`
        <header>
            <nav-bar></nav-bar>
        </header>
        <main class="content">
            <info-page></info-page>
            <proyects-page></proyects-page>
        </main>
        <footer>
            <p>Este es el footer</p>
        </footer>
    `;
    }
    static styles = css`
        :host {
            display: grid;
            grid-template-rows: auto 1fr auto;
            
        }
        main {
            
        }
        footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: var(--dark);
            color: white;
            text-align: center;
            padding: 1rem;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'app-router': AppRouter;
    }
}
