const { Menu } = require('./Menu');
const { QuitOption } = require('../Option/QuitOption');

class QuitMenu extends Menu {

  #quitOption;

  constructor(title) {
    super(title);
    this.#quitOption = new QuitOption();
  }

  showTitles() {
    if(!this.hasOption(this.#quitOption)) {
      this.add(this.#quitOption);
    }
    super.showTitles();
  }

  isExecutedQuitOption() {
    return this.#quitOption.isExecuted();
  }

}

module.exports.QuitMenu = QuitMenu;