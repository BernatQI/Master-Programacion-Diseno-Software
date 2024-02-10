import { LitElement, html, css } from 'lit';
import './c4-board';

export class C4Main extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        justify-content: center;
      }
    `
  ];

  render() {
    return html`
      <main>
        <c4-board></c4-board>
      </main>
    `;
  }
}
customElements.define('c4-main', C4Main);
