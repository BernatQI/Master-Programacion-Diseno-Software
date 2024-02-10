import { LitElement, html, css } from 'lit';
import './c4-header';
import './c4-main';
import './c4-footer';

export class C4App extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        color: white;
      }
    `
  ];

  render() {
    return html`
      <c4-header></c4-header>
      <c4-main></c4-main>
      <c4-footer></c4-footer>
    `;
  }
}
customElements.define('c4-app', C4App);
