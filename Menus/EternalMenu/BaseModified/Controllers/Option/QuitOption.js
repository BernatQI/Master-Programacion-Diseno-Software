const { Option } = require('./Option');

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

module.exports.QuitOption = QuitOption;