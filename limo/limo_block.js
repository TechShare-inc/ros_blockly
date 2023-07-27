Blockly.Blocks['limo_linear'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Linear Move at velocity")
            .appendField(new Blockly.FieldNumber(0, -1, 1), "x")
            .appendField("m/s ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['limo_angular'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Turn")
            .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "direction")
            .appendField("at speed")
            .appendField(new Blockly.FieldNumber(0, 0, 3), "angular_vel")
            .appendField("rad/s");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['limo_stop'] = {
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