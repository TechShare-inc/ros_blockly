Blockly.JavaScript['limo_linear'] = function(block, generator) {
    var number_x = block.getFieldValue('x');
    var code = "";
    code += "var linear_vel = " + number_x + ";\n" +
        "var cmd_vel = new ROSLIB.Topic({\n" +
        "    ros : ros,\n" +
        "    name : '/cmd_vel',\n" +
        "    messageType : 'geometry_msgs/Twist'\n" +
        "});\n" +

        // if angular_vel already defined
        "try {\n" +
        "    angular_vel;\n" +
        "} catch {\n" +
        "    var angular_vel = 0.0;\n" +
        "}\n" +
        
        "var msg1 = new ROSLIB.Message({\n" +
        "    linear : {\n" +
        "        x : linear_vel,\n" +
        "        y : 0.0,\n" +
        "        z : 0.0\n" +
        "    },\n" +
        "      angular : {\n" +
        "        x : 0.0,\n" +
        "        y : 0.0,\n" +
        "        z : angular_vel\n" + // keep turning
        "    }\n" +
        "});\n" +
        
        "console.log('linear cmd_vel');\n" +
        "cmd_vel.publish(msg1);\n" +
        "var startTime = Date.now();\n" +
        "while( Date.now() - startTime < 400 );\n";  

    return code;
};
  
Blockly.JavaScript['limo_angular'] = function(block, generator) {
    var dropdown_direction = block.getFieldValue('direction');
    var number_angular_vel = block.getFieldValue('angular_vel');
    if (dropdown_direction == 'right') {
        number_angular_vel *= -1
    };

    var code = "";
    code += "var angular_vel = " + number_angular_vel + ";\n" +
        "var cmd_vel = new ROSLIB.Topic({\n" +
        "    ros : ros,\n" +
        "    name : '/cmd_vel',\n" +
        "    messageType : 'geometry_msgs/Twist'\n" +
        "});\n" +
        
        // if linear_vel already defined
        "try {\n" +
        "    linear_vel;\n" +
        "} catch {\n" +
        "    var linear_vel = 0.0;\n" +
        "}\n" +
        
        "var msg2 = new ROSLIB.Message({\n" +
        "    linear : {\n" +
        "        x : linear_vel,\n" + // keep moving
        "        y : 0.0,\n" +
        "        z : 0.0\n" +
        "    },\n" +
        "      angular : {\n" +
        "        x : 0.0,\n" +
        "        y : 0.0,\n" +
        "        z : angular_vel\n" +
        "    }\n" +
        "});\n" +
        
        "console.log('angular cmd_vel');\n" +
        "cmd_vel.publish(msg2);\n";
        "var startTime = Date.now();\n" +
        "while( Date.now() - startTime < 500 );\n";  

    return code;
};
  
Blockly.JavaScript['limo_stop'] = function(block, generator) {
    var code = 
        "var cmd_vel = new ROSLIB.Topic({\n" +
        "    ros : ros,\n" +
        "    name : '/cmd_vel',\n" +
        "    messageType : 'geometry_msgs/Twist'\n" +
        "});\n" +
        
        "var msg3 = new ROSLIB.Message({\n" +
        "    linear : {\n" +
        "        x : 0.0,\n" +
        "        y : 0.0,\n" +
        "        z : 0.0\n" +
        "    },\n" +
        "      angular : {\n" +
        "        x : 0.0,\n" +
        "        y : 0.0,\n" +
        "        z : 0.0\n" +
        "    }\n" +
        "});\n" +
        
        "console.log('Stopping motion');\n" +
        "cmd_vel.publish(msg3);\n" +
        "var startTime = Date.now();\n" +
        "while( Date.now() - startTime < 500 );\n";     
    return code;
};