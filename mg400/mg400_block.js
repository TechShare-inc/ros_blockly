Blockly.Blocks['movj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move to x")
        .appendField(new Blockly.FieldNumber(0), "x");
    this.appendDummyInput()
        .appendField("y")
        .appendField(new Blockly.FieldNumber(0), "y");
    this.appendDummyInput()
        .appendField("z")
        .appendField(new Blockly.FieldNumber(0), "z");
    this.appendDummyInput()
        .appendField("r")
        .appendField(new Blockly.FieldNumber(0), "r");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['enable_robot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EnableRobot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['disable_robot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DisableRobot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clear_error'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ClearError");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['reset_robot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ResetRobot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
