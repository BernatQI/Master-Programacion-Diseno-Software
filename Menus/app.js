const { Option } = require("./Option");
const { Model } = require("./Model");
const { ModelMenu, ModelQuitMenu, ModelIterativeMenu, ModelIterativeDynamicMenu } = require("./ModelMenu");

Option.console.writeln("***");
new ModelMenu(new Model()).interact();

Option.console.writeln("***");
new ModelQuitMenu(new Model()).interact();

Option.console.writeln("***");
new ModelIterativeMenu(new Model()).interact();

Option.console.writeln("***");
new ModelIterativeDynamicMenu(new Model()).interact();