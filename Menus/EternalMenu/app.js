const { Option } = require('./Controllers/Option/Option');
const { Model } = require('./Models/Model');
const { ModelMenu } = require('./Models/Menu/ModelMenu');
const { ModelQuitMenu } = require('./Models/Menu/ModelQuitMenu');
const { ModelIterativeMenu } = require('./Models/Menu/ModelIterativeMenu');
const { ModelIterativeDynamicMenu } = require('./Models/Menu/ModelIterativeDynamicMenu');

Option.console.writeln("***");
new ModelMenu(new Model()).interact();

Option.console.writeln("***");
new ModelQuitMenu(new Model()).interact();

Option.console.writeln("***");
new ModelIterativeMenu(new Model()).interact();

Option.console.writeln("***");
new ModelIterativeDynamicMenu(new Model()).interact();