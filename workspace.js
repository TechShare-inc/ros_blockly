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

	// Event Listener
	// Show code corresponding to the current blocks	
	function showCode() {
		window.LoopTrap = 1000;
		Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
		const pre = document.getElementById('jsCode');
		pre.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
	}
	document.getElementById('showCode').addEventListener('click', showCode, false);

	// Execute the code
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

	// Save & Restore when reloading
	window.addEventListener('beforeunload', () => {
		// on reloading
		var xml = Blockly.Xml.workspaceToDom(workspace);
		localStorage.setItem('workspace', Blockly.Xml.domToText(xml)); // save the workspace
	});

	function restore() {
		// start block at any position
		def_workspace =  
			/<xml xmlns="https:\/\/developers.google.com\/blockly\/xml"><block type="start_block" id="\/\)86OVa:iC=\|U9Dti~y\/" x="[0-9]+" y="[0-9]+"><\/block><\/xml>/;

		// if there is any code to restore
		if (localStorage.getItem('workspace') != null) {
			if (localStorage.getItem('workspace').match(def_workspace) == null) { // if not workspace is the same as default
				// get the saved xml as string
				xml_text = localStorage.getItem('workspace'); 
				// remove the start block
				new_text = xml_text.replace(/<block type="start_block" id="\/\)86OVa:iC=\|U9Dti~y\/" x="[0-9]+" y="[0-9]+"><next>/, '');

				const temp = new_text;
				new_text = new_text.replace(/<block type="start_block" id="\/\)86OVa:iC=\|U9Dti~y\/" x="[0-9]+" y="[0-9]+"><\/block>/, '');
				if (new_text == temp) {
					new_text = new_text.replace(/<\/next><\/block>/, '');
				}
				
				// restore
				Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(new_text), workspace); 
				console.log('restored');
				// Delete data
				localStorage.clear();
			}
		} else {
			console.log('Nothing to restore');
		}
	}
	document.getElementById('restore').addEventListener('click', restore, false);

	// Hope to implement an event listener for restoring on reloading, rather than button click
	// window.addEventListener('load', () => {})
});