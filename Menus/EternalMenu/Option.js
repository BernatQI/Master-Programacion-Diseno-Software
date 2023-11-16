const { Console } = require('./console');

class Option {

  static console = new Console();
  #title;

  constructor(string) {
      this.#title = string;
  }

  interact() {}

  showTitle(index) {
      Option.console.writeln(index + ". " + this.getTitle());
  }

  getTitle() {
      return this.#title;
  }
}

class QuitOption extends Option {

  #executed;

  constructor() {
      super('Exit');
      this.#executed = false;
  }

  interact() {
    this.#executed = true;
  }

  isExecuted() {
      return this.#executed;
  }
}

module.exports.Option = Option;
module.exports.QuitOption = QuitOption;