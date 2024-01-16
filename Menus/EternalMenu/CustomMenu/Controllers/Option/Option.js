const { Console } = require('../../console');

class Option {

  static console = new Console();
  #title;

  constructor(title) {
      this.#title = title;
  }

  interact() {}

  showTitle(index) {
      Option.console.writeln(index + ". " + this.getTitle());
  }

  getTitle() {
      return this.#title;
  }
}



module.exports.Option = Option;