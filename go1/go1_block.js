Blockly.Blocks['walking'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("Walk at velocity")
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

Blockly.Blocks['turning'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("Turn ")
          .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "direction")
          .appendField("at speed")
          .appendField(new Blockly.FieldNumber(0, 0, 4), "angular_vel");
        this.appendDummyInput()
          .appendField("rad/s");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['go1_stop'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("Stop moving");
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

Blockly.Blocks['damping'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Damping mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};