Promise.all(
    ["workspace.xml", "toolbox.xml"].map(async file => {
        return fetch(file).then(
            (res) => {
                return res.text();
            }
        );
    })
).then((xmls) => {
    xmls.forEach((xml) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(xml, "application/xml");
        document.body.appendChild(doc.documentElement);
    });
}).then(() => {
	var toolbox = document.getElementById("toolbox");

	var options = { 
		toolbox : toolbox, 
		collapse : true, 
		comments : true, 
		disable : true, 
		maxBlocks : Infinity, 
		trashcan : true, 
		horizontalLayout : false, 
		toolboxPosition : 'start', 
		css : true, 
		media : 'https://blockly-demo.appspot.com/static/media/', 
		rtl : false, 
		scrollbars : true, 
		sounds : true, 
		oneBasedIndex : true, 
		grid : {
			spacing : 20, 
			length : 1, 
			colour : '#888', 
			snap : false
		}, 
		zoom : {
			controls : true, 
			wheel : true, 
			startScale : 1, 
			maxScale : 3, 
			minScale : 0.3, 
			scaleSpeed : 1.2
		}
	};

	/* Inject your workspace */ 
	var workspace = Blockly.inject('blocklyDiv', options);

	/* Remove all code below if no blocks to load */
	workspace.addChangeListener(Blockly.Events.disableOrphans);

	/* Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
	var workspaceBlocks = document.getElementById("workspaceBlocks"); 

	/* Load blocks to workspace. */
	Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

	function showCode() {
		window.LoopTrap = 1000;
		Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
		const pre = document.getElementById('jsCode');
		pre.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
	}
	document.getElementById('showCode').addEventListener('click', showCode, false);

	function execCode() {
		window.LoopTrap = 1000;
		Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
		var code = Blockly.JavaScript.workspaceToCode(workspace);
		try {
			eval(code);
		} catch (e) {
			alert(e);
		}
	}
	document.getElementById('execCode').addEventListener('click', execCode, false);
});