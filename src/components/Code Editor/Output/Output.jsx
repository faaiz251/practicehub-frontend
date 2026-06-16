/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { executeCode } from "../Compiler_API/api1";
import { toast } from "react-hot-toast";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      toast.error("Please write some code first!", { duration: 3000 });
      return;
    }
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
      if (result.stderr) {
        toast.error("Code execution returned errors", { duration: 3000 });
      } else {
        toast.success("Code executed successfully!", { duration: 2000 });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Unable to run code", { duration: 4000 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output-box">
      <div className="output" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Typography
          variant="h6"
          gutterBottom
          style={{ color: "gray", margin: 0 }}
        >
          Output
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{ textTransform: "none", fontFamily: "cursive" }}
          onClick={runCode}
          disabled={isLoading}
          startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <PlayArrow />}
        >
          {isLoading ? "Running..." : "Run Code"}
        </Button>
      </div>
      <Box
        sx={{
          height: "60vh",
          width: "100%",
          padding: 2,
          border: 1,
          borderRadius: 1,
          borderColor: isError ? "error.main" : "grey.800",
          color: isError ? "error.main" : "white",
          overflowY: "auto",
          backgroundColor: "#1e1e1e",
          fontFamily: "monospace",
        }}
      >
        {output ? (
          output.map((line, i) => (
            <Typography key={i} variant="body2" sx={{ wordWrap: "break-word", fontFamily: "monospace" }}>
              {line}
            </Typography>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: "gray.500", fontFamily: "monospace" }}>
            Click "Run Code" to see the output here
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Output;
