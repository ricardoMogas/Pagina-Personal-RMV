import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './index.css';
import './pages/ResourcesPage';
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
            <proyects-page></proyects-page>
            <info-page></info-page>
            <resources-page></resources-page>
        </main>
        <footer>
            <p>Este es el footer</p>
        </footer>
    `;
    }
    static styles = css`
        main {
            margin-bottom: 90px;
        }
        footer {
            position: fixed;
            bottom: 0;  
            left: 0;
            width: 100%;
            min-height: 90px;
            background-color: var(--dark);
            color: white;
            text-align: center;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'app-router': AppRouter;
    }
}
