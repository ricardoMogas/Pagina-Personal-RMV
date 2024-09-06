import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./SimpleButton";

@customElement('nav-bar')
export class NavBar extends LitElement {
    render() {
        return html`
        <nav>
            <div class="nav-logo">
                <a href="#">
                    <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 11L17.6965 12.5268C19.239 13.9151 20.0103 14.6093 20.0103 15.5C20.0103 16.3907 19.239 17.0849 17.6965 18.4732L16 20" stroke="var(--light)" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M13.9868 5L11.9934 12.5L10 20" stroke="var(--light)" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M8.00005 4.82959L6.30358 6.35641C4.76102 7.74471 3.98975 8.43886 3.98975 9.32959C3.98975 10.2203 4.76102 10.9145 6.30358 12.3028L8.00005 13.8296" stroke="var(--light)" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </a>
            </div>
            <div class="nav-body"> 
                <ul class="list">
                    <li><a href="#">👨‍💻About Me</a></li>
                    <li><a href="#">🛠️Proyects</a></li>
                    <li><a href="#">🥇Certificates and recognitions</a></li>
                </ul>
            </div>
            <div class="nav-right"> 
                <simple-button color="green" type="simple">
                    menu
                </simple-button>
            </div>
        </nav>
        `;
    }

    static styles = css`
        
        nav {
            display: flex;
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            background-color: var(--dark);
            border-radius: 8px;
            align-items: center;
            overflow: hidden; /* Asegura que el fondo no se desborde */
        }

        .nav-logo {
            margin-left: 12px;
        }
        
        .nav-body {
            margin-left: 12px;
        }

        .nav-right {
            margin-left: auto;
            padding: 12px;
        }


        .list {
            list-style: none;
            display: none;
            padding: 0;
            @media (min-width: 700px) {
                display: flex;
            }
            li a {
                color: var(--green);
                margin-left: 8px;
                text-decoration: none;
            }
        }




        .nav-logo a:hover {
            color: var(--primary);
        }

        .list li a:hover {
            color: var(--primary);
        }
    `;
}