var tool_vector_actual = new ROSLIB.Topic({
    ros : ros,
    name : '/mg400_bringup/msg/ToolVectorActual',
    messageType : 'mg400_bringup/ToolVectorActual'
  });
  
var msg = new ROSLIB.Message({
    x : 100,
    y : 100,
    z : 100,
    r : 50
  });
  
console.log("Publishing toolVectorActual");
tool_vector_actual.publish(msg);

var request = new ROSLIB.ServiceRequest({
    x : x_val,
    y : y_val,
    z : z_val,
    r : r_val
});



var high_cmd = new ROSLIB.Topic({
    ros : ros,
    name : '/high_cmd',
    messageType : 'unitree_legged_msgs/HighCmd'
});
      
var msg = new ROSLIB.Message({
    head : [0xFE, 0xEF],
    levelFlag : HIGHLEVEL,
    mode : 6, 
    gaitType : 0,
    speedLevel : 0,
    footRaiseHeight : 0,
    bodyHeight : 0,
    euler : [0.0, 0.0, 0.0],
    velocity : [0.0, 0.0],
    yawSpeed : 0.0,
    reserve : 0,
});
      
console.log('Stand Up');
high_cmd.publish(msg);

// For velocity walking      
var msg = new ROSLIB.Message({
    head : [0xFE, 0xEF],
    levelFlag : HIGHLEVEL,
    mode : 2, 
    gaitType : 1,
    speedLevel : 0,
    footRaiseHeight : 0,
    bodyHeight : 0.1,
    euler : [0.0, 0.0, 0.0],
    velocity : [vel, 0.0],
    yawSpeed : 0.0,
    reserve : 0,
});

// For limo's cmd_vel
var cmd_vel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
});
  
var msg = new ROSLIB.Message({
    linear : {
        x : x_val,
        y : 0.0,
        z : 0.0
    },
      angular : {
        x : 0.0,
        y : 0.0,
        z : 0.0
    }
});
  
console.log("Publishing cmd_vel");
const promise = new Promise((resolve))
cmd_vel.publish(msg);      


do {
    status_listener.unsubscribe();
    status_listener.subscribe(function(message) {
        enable_status = message.is_enable
    });
    var startTime = Date.now()
    while( Date.now() - startTime < 100 )
    console.log(enable_status)
} while (!enable_status);