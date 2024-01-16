const { Option } = require('./Controllers/Option/Option');
const { Model } = require('./Models/Model');
const { ModelIterativeHomeMenu } = require('./Models/Menu/ModelIterativeHomeMenu');

Option.console.writeln('***');
new ModelIterativeHomeMenu(new Model()).interact();