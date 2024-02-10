import { LitElement, html, css } from 'lit';

export class C4Footer extends LitElement {
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
      <footer>
        Footer
      </footer>
    `;
  }
}
customElements.define('c4-footer', C4Footer);
