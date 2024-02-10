import { LitElement, html, css } from 'lit';

export class C4Header extends LitElement {
  static styles = [
    css`
      h1 {
        text-align: center;
      }
    `
  ];

  render() {
    return html`
      <header>
        <h1>Connect4</h1>
      </header>
    `;
  }
}
customElements.define('c4-header', C4Header);
