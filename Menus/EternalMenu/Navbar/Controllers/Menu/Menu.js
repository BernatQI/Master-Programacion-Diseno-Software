const { Console } = require('../../console');

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

  addOptions() { }

  interact_() {
    this.showTitles();
    this.execChooseOption();
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
    for (let i = 0; i < this.#options.length; i++) {
      this.#options[i].showTitle(i + 1);
    }
  }

  execChooseOption() {
    let answer;

    do {
      answer = this.#readInt(`Option? [1-${this.#options.length}]: `) - 1;
    } while (!this.isValidAnswer(answer));

    this.#options[answer].interact();
  }

  #readInt(prompt) {
    return Number.parseInt(Menu.console.readNumber(prompt));
  }

  isValidAnswer(answer) {
    const ok = 0 <= answer && answer < this.#options.length;

    if (!ok) {
      Menu.console.writeln('Error: Number not valid!!!');
    }
    return ok;
  }

  add(option) {
    this.#options.push(option);
  }

  removeOptions() {
    this.#options = [];
  }

  hasOption(option) {
    return this.#options.includes(option);
  }
}

module.exports.Menu = Menu;