Blockly.JavaScript['walking'] = function(block, generator) {
    var number_vel = block.getFieldValue('vel');
    var code = "vel = " + number_vel + ";\n";
    code += 
        "var high_cmd = new ROSLIB.Topic({\n" +
        "    ros : ros,\n" +
        "    name : '/high_cmd',\n" +
        "    messageType : 'unitree_legged_msgs/HighCmd'\n" +
        "});\n" +

        "var msg = new ROSLIB.Message({\n" +
        "    head : [0xFE, 0xEF],\n" +
        "    mode : 2, \n" +
        "    gaitType : 1,\n" +
        "    speedLevel : 0,\n" +
        "    footRaiseHeight : 0,\n" +
        "    bodyHeight : 0.1,\n" +
        "    euler : [0.0, 0.0, 0.0],\n" +
        "    velocity : [vel, 0.0],\n" +
        "    yawSpeed : 0.0,\n" +
        "    reserve : 0,\n" +
        "});\n" +

        "console.log('Walking');\n" +
        "high_cmd.publish(msg);\n";        
    return code;
};

Blockly.JavaScript['stand_up'] = function(block, generator) {
    var code = 
        "var high_cmd = new ROSLIB.Topic({\n" +
        "    ros : ros,\n" +
        "    name : '/high_cmd',\n" +
        "    messageType : 'unitree_legged_msgs/HighCmd'\n" +
        "});\n" +
            
        "var msg = new ROSLIB.Message({\n" +
        "    head : [0xFE, 0xEF],\n" +
        "    mode : 6, \n" +
        "    gaitType : 0,\n" +
        "    speedLevel : 0,\n" +
        "    footRaiseHeight : 0,\n" +
        "    bodyHeight : 0,\n" +
        "    euler : [0.0, 0.0, 0.0],\n" +
        "    velocity : [0.0, 0.0],\n" +
        "    yawSpeed : 0.0,\n" +
        "    reserve : 0,\n" +
        "});\n" +
            
        "console.log('Stand Up');\n" +
        "high_cmd.publish(msg);\n";

    return code;
};

Blockly.JavaScript['stand_down'] = function(block, generator) {
    var code = 
        "var high_cmd = new ROSLIB.Topic({\n" +
        "    ros : ros,\n" +
        "    name : '/high_cmd',\n" +
        "    messageType : 'unitree_legged_msgs/HighCmd'\n" +
        "});\n" +
            
        "var msg = new ROSLIB.Message({\n" +
        "    head : [0xFE, 0xEF],\n" +
        "    mode : 5, \n" +
        "    gaitType : 0,\n" +
        "    speedLevel : 0,\n" +
        "    footRaiseHeight : 0,\n" +
        "    bodyHeight : 0,\n" +
        "    euler : [0.0, 0.0, 0.0],\n" +
        "    velocity : [0.0, 0.0],\n" +
        "    yawSpeed : 0.0,\n" +
        "    reserve : 0,\n" +
        "});\n" +
            
        "console.log('Stand Down');\n" +
        "high_cmd.publish(msg);\n";
    return code;
};