import React from "react";
import CodeEditor from "./CodeEditor";
import DslEditor from "./DSLEditor";
import MermaidEditor from "./MermaidEditor";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const EditorSection = ({
  code1,
  mermaidCode,
  editor1Height,
  leftWidth,
  handleEditor1Change,
  setEditor1Height,
  setMermaidCode,
  dslEditorEditable,
  setDslEditorEditable
}) => {

  const handleClickLock = () => {
    setDslEditorEditable(dslEditorEditable => !dslEditorEditable);
  };

  return (
    <div
      className="CodeEditorsContent"
      style={{
        width: leftWidth,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
        <Typography variant="overline">Code Editor</Typography>
        <Tooltip title={dslEditorEditable ? "Lock Editor" : "Unlock Editor"}>
          <IconButton onClick={handleClickLock} size="small">
            {dslEditorEditable ? (
              <LockOpenIcon sx={{ fontSize: 18 }} />
            ) : (
              <LockIcon sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <ResizableBox
        height={editor1Height}
        width={Infinity}
        resizeHandles={["s"]}
        onResizeStop={(e, data) => setEditor1Height(data.size.height)}
        minConstraints={[Infinity, 100]}
        maxConstraints={[Infinity, window.innerHeight - 100]}
        handle={
          <span
            style={{
              width: "100%",
              height: "4px",
              borderTop: "1px solid #444",
              cursor: "row-resize",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          />
        }
      >
        <div style={{ height: "100%", margin: 0, padding: 0 }}>
          <DslEditor value={code1} onChange={handleEditor1Change}/>
        </div>
      </ResizableBox>
      <div
        style={{
          height: `calc(100% - ${editor1Height}px)`,
          overflow: "hidden",
        }}
      >
        <Typography variant="overline" sx={{ pl: 2 }}>Mermaid Editor</Typography>
        <MermaidEditor value={mermaidCode} onChange={setMermaidCode} />
      </div>
    </div>
  );
};

export default EditorSection;
