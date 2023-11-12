const { Console } = require("./console");
const { QuitOption } = require("./Option");

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

  addOptions(){};

  interact_() {
      this.showTitles();
      this.execChoosedOption();
  }

  showTitles() {
      this.#showTitle();
      for (let i = 0; i < this.#options.length; i++) {
          this.#options[i].showTitle(i + 1);
      }
  }

  #showTitle() {
      let string = "\n" + this.#title + "\n";
      for (let i = 0; i < this.#title.length; i++) {
          string += "-";
      }
      Menu.console.writeln(string);
  }

  execChoosedOption() {
      let answer;
      let ok;
      do {
          answer = this.#readInt("Opción? [1-" + this.#options.length + "]: ") - 1;
          ok = 0 <= answer && answer <= this.#options.length - 1;
          if (!ok) {
              Menu.console.writeln("Error!!!");
          }
      } while (!ok);
      this.#options[answer].interact();
  }

  #readInt(prompt){
      return Number.parseInt(Menu.console.readNumber(prompt));
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
      if (!this.hasOption(this.#quitOption)) {
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

class DynamicMenu extends IterativeMenu {

  constructor(title) {
      super(title);
  }

  interact() {
      do {
          this.removeOptions();
          this.addOptions();
          this.interact_();
      } while (!this.isExecutedQuitOption());
  }

}

module.exports.Menu = Menu;
module.exports.QuitMenu = QuitMenu;
module.exports.IterativeMenu = IterativeMenu;
module.exports.DynamicMenu = DynamicMenu;