import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('simple-button')
export class SimpleButton extends LitElement {
    @property({ type: String })
    color = "";

    @property({ type: String})
    type = "";

    render() {
        return html`
        <button class=${this.color + "-" + this.type}>
            <slot></slot>
        </button>
        `;
    }

    static styles = css`
        button {
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.0);
        }
        
        button:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    
        .primary { background-color: var(--primary); }
        .secondary { background-color: var(--secondary); }
        .success { background-color: var(--success); }
        .warning { background-color: var(--warning); }
        .danger { background-color: var(--danger); }
        .info { background-color: var(--info); }
        .light { background-color: var(--light); }
        .dark { background-color: var(--dark); }

        .primary-outline { 
            color: var(--primary);
            /* border: 1px solid var(--primary); */
        }
        .secondary-outline { 
            color: var(--secondary);
            /* border: 1px solid var(--secondary); */
        }
        .success-outline { 
            color: var(--success);
            /* border: 1px solid var(--success); */
        }
        .warning-outline { 
            color: var(--warning);
            /* border: 1px solid var(--warning); */
        }
        .danger-outline { 
            color: var(--danger);
            /* border: 1px solid var(--danger); */
        }
        .info-outline { 
            color: var(--info);
            /* border: 1px solid var(--info); */
        }
        .light-outline { 
            color: var(--light);
            /* border: 1px solid var(--light); */	
        }
        .dark-outline { 
            color: var(--dark);
            /* border: 1px solid var(--dark); */
        }
    `;
}