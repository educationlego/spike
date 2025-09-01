
import React, { useEffect, useRef } from "react";
import Blockly from "blockly";
import "blockly/blocks";
import "blockly/javascript";

export default function BlocklyEditor() {
  const blocklyDiv = useRef(null);
  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      { kind: "block", type: "controls_repeat_ext" },
      { kind: "block", type: "math_number" },
      { kind: "block", type: "text" },
      { kind: "block", type: "text_print" },
    ],
  };

  useEffect(() => {
    const workspace = Blockly.inject(blocklyDiv.current, { toolbox });
    workspace.addChangeListener(() => {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      console.log(code);
    });
  }, []);

  return (
    <div
      ref={blocklyDiv}
      style={{ height: "500px", width: "100%", background: "white" }}
    ></div>
  );
}
