Blockly.Blocks['start_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start program");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['wait'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Wait ")
          .appendField(new Blockly.FieldTextInput("1"), "WAIT_SECS")
          .appendField("seconds");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(330);
      this.setTooltip('');
      this.setHelpUrl('');
    }
};

Blockly.Blocks['for_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For")
        .appendField(new Blockly.FieldTextInput("2"), "SECONDS_WHILE")
        .appendField("seconds");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['console_print'] = {
  init: function() {
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("print to console");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};