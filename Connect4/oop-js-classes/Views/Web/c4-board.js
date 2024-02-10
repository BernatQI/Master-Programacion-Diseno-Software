import { LitElement, html, css } from 'lit';
import { Board } from '../../Models/Board';

export class C4Board extends LitElement {
  static styles = [
    css`
      :host {
        max-width: 460px;
        margin: 1rem;
        display: grid;
        grid-template-columns: repeat(${Board.NUMBER_COLUMNS}, auto);
        column-gap: 0.4rem;
        row-gap: 0.6rem;
      }
    `
  ];

  render() {
    return html`
      <p>Board</p>
    `;
  }
}
customElements.define('c4-board', C4Board);
