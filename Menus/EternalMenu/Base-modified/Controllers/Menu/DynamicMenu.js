const { IterativeMenu } = require('./IterativeMenu');

class DynamicMenu extends IterativeMenu {

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

module.exports.DynamicMenu = DynamicMenu;