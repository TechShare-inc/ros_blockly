Blockly.Blocks['walking'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Walk at initial velocity")
          .appendField(new Blockly.FieldNumber(0, -1, 1), "vel");
      this.appendDummyInput()
          .appendField("m/s");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['stand_up'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Stand Up");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['stand_down'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Stand Down");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};