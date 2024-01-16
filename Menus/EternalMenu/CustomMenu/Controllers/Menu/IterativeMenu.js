const { QuitMenu } = require('./QuitMenu');

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

module.exports.IterativeMenu = IterativeMenu;