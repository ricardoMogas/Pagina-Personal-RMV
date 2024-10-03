import {css, html} from "lit";


export class ContactsBar {

    render(){
        return html`
            <div class="contacts-bar">
                <span>👩‍🦰</span>
                <span>👩‍🦰</span>
                <span>👩‍🦰</span>
                <span>👩‍🦰</span>
            </div>
        `
    }

    static styles = css`
        .contacts-bar {
            
        }
    `;
}