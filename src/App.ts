import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import "./index.css"
import './pages/HomePage';
import "./pages/ProyectsPage";
import './Components/NavBar';

@customElement('app-router')
class AppRouter extends LitElement {

    render() {
        return html`
      <nav-bar></nav-bar>
      <main class="">
        <proyects-page></proyects-page>
      </main>
    `;
    }

    static styes = css`
    
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'app-router': AppRouter;
    }
}
