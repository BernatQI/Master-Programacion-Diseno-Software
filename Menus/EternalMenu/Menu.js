const { Console } = require('./console');
const { QuitOption } = require('./Option');

class Menu {

  static console = new Console();
  #title;
  #options;

  constructor(title) {
    this.#title = title;
    this.#options = [];
  }

  interact() {
    this.addOptions();
    this.interact_();
  }

  addOptions() {}

  interact_(model) {
    this.showTitles();
    this.execChoosedOption(model);
  }

  #showTitle() {
    let string = `\n` + this.#title + `\n`;
    for (let i = 0; i < this.#title.length; i++) {
      string += `-`;
    }
    Menu.console.writeln(string);
  }

  showTitles() {
    this.#showTitle();
    for (let i= 0; i < this.#options.length; i++) {
      this.#options[i].showTitle(i + 1);
    }
  }

  execChooseOption(model) {
    // TODO: implement
  }
}