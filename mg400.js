Blockly.JavaScript['movj'] = function(block, generator) {
  var value_x = block.getFieldValue('x');
  var value_y = block.getFieldValue('y');
  var value_z = block.getFieldValue('z');
  var value_r = block.getFieldValue('r');

  var code = "";
  code += "x_val = " + value_x + ";\n";
  code += "y_val = " + value_y + ";\n";
  code += "z_val = " + value_z + ";\n";
  code += "r_val = " + value_r + ";\n";
  code +=
    "var movJ = new ROSLIB.Service({\n" +
    "  ros: ros,\n" + 
    "  name: '/mg400_bringup/srv/MovJ',\n" +
    "  serviceType: 'mg400_bringup/MovJ',\n" +
    "});\n" +

    "var request = new ROSLIB.ServiceRequest({\n" +
    "  x : x_val,\n" +
    "  y : y_val,\n" +
    "  z : z_val,\n" +
    "  r : r_val\n" +
    "});\n" +
    "movJ.callService(request, result => {\n" +
    "  console.log('MovJ: res ' + result.res)});\n" +
    "var startTime = Date.now();\n" +
    "while( Date.now() - startTime < 500 );\n"; 
  return code;
};

Blockly.JavaScript['enable_robot'] = function(block, generator) {
  var code = 
    "const enableRobot = new ROSLIB.Service({\n" +
    "  ros: ros,\n" + 
    "  name: '/mg400_bringup/srv/EnableRobot',\n" +
    "  serviceType: 'mg400_bringup/EnableRobot',\n" +
    "});\n" +

    // "var status_listener = new ROSLIB.Topic({\n" +
    // "    ros : ros,\n" +
    // "    name : '/mg400_bringup/msg/RobotStatus',\n" +
    // "    messageType : 'mg400_bringup/RobotStatus'\n" +
    // "});\n" +    

    "var request = new ROSLIB.ServiceRequest();\n" +
    "enableRobot.callService(request, result => {\n" +
    "  console.log('Enable Robot: res ' + result.res)});\n";

    // "var enable_status = false;\n" +
    // "while (!enable_status) {\n" +
    // "  status_listener.subscribe(function(message) {\n" +
    // "    enable_status = message.is_enable;\n" +
    // "  });\n" +
    // "}\n" +
    // "status_listener.unsubscribe();\n";
  return code;
};

Blockly.JavaScript['disable_robot'] = function(block) {
  // failed to read a javascript file to generate the code
  // var code = "";
  // fetch("./test.js").then(response => response.text())
  //   .then(data => {
  //       code += data;
  //       console.log(code);
  //       return code;
  //   }); 

  var code = 
    "const disableRobot = new ROSLIB.Service({\n" +
    "  ros: ros,\n" + 
    "  name: '/mg400_bringup/srv/DisableRobot',\n" +
    "  serviceType: 'mg400_bringup/DisableRobot',\n" +
    "});\n" +

    "var request = new ROSLIB.ServiceRequest();\n" +
    "disableRobot.callService(request, result => {\n" +
    "  console.log('Disable Robot: res ' + result.res)});\n";
  return code;
};

Blockly.JavaScript['clear_error'] = function(block, generator) {
  var code = 
    "const clearError = new ROSLIB.Service({\n" +
    "  ros: ros,\n" + 
    "  name: '/mg400_bringup/srv/ClearError',\n" +
    "  serviceType: 'mg400_bringup/ClearError',\n" +
    "});\n" +

    "var request = new ROSLIB.ServiceRequest();\n" +
    "clearError.callService(request, result => {\n" +
    "  console.log('Clear Error: res ' + result.res)});\n";
  return code;
};

Blockly.JavaScript['reset_robot'] = function(block, generator) {
  var code = 
    "const resetRobot = new ROSLIB.Service({\n" +
    "  ros: ros,\n" + 
    "  name: '/mg400_bringup/srv/ResetRobot',\n" +
    "  serviceType: 'mg400_bringup/ResetRobot',\n" +
    "});\n" +

    "var request = new ROSLIB.ServiceRequest();\n" +
    "resetRobot.callService(request, result => {\n" +
    "  console.log('Reset Robot: res ' + result.res)});\n";
  return code;
};