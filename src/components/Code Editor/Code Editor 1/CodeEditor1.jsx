import { useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../Language/LanguageSelector";
import { CODE_SNIPPETS } from "../../../constants";
import Output from "../Output/Output";

export function CodeEditor() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box className="editor-container" sx={{ p: 2 }}>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 2, lg: 4 }}>
        <Box className="editor-box" sx={{ flex: 1, minWidth: 0 }}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              readOnly: false,
            }}
            height="60vh"
            width="100%"
            theme="vs-dark"
            language={language}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Output editorRef={editorRef} language={language} />
        </Box>
      </Stack>
    </Box>
  );
}
