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
    const ok = 0 < answer && answer < this.#options.length;

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

class QuitMenu extends Menu {

  #quitOption;

  constructor(title) {
    super(title);
    this.#quitOption = new QuitOption();
  }

  showTitles() {
    if(!thid.hasOption(this.#quitOption)) {
      this.add(this.#quitOption);
    }
    super.showTitles();
  }

  isExecutedQuitOption() {
    return this.#quitOption.isExecuted();
  }

}

class IterativeMenu extends QuitMenu {

  constructor(title) {
    super(title);
  }

  interact() {
    this.addOptions();
    do {
      this.interact_();
    } while (!this.isExecutedQuitOption());
  }

}

class DinayicMenu extends IterativeMenu {

  constructor(title) {
    super(title);
  }

  interact() {
    do{
      this.removeOptions();
      this.addOptions();
      super.interact_();
    }while(!this.isExecutedQuitOption());
  }

}

module.exports.Menu = Menu;
module.exports.QuitMenu = QuitMenu;
module.exports.IterativeMenu = IterativeMenu;
module.exports.DinayicMenu = DinayicMenu;