Blockly.JavaScript['start_block'] = function(block) {
  return '';
};

Blockly.JavaScript['wait'] = function(block) {
  var seconds = block.getFieldValue('WAIT_SECS');
  var code = 
    "var startTime = Date.now();\n" +
    "while( Date.now() - startTime < " + seconds + " * 1000 );\n";  
  return code;
};

Blockly.JavaScript['for_time'] = function(block) {
  var seconds = block.getFieldValue('SECONDS_WHILE');
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  if (!branch) throw "There is no statement inside!";
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  var code = 
    "var start = Date.now();\n" +
    "while(Date.now() - start < " + seconds + " * 1000 ) {\n" +
      branch +
    // Need to slow down to prevent infinite loop 
    "  var startTime = Date.now();\n" +
    "  while( Date.now() - startTime < 100 );\n" +
    "};\n" +
    "console.log('while loop finished');";  
  return code;
};

Blockly.JavaScript['console_print'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_COMMA);
  var code = "console.log(" + value_message + ")\n";
  return code;
};