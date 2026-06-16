/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "../../common/NavBar/Navbar";
import { Typography } from "@mui/material";
import { Code1 } from "../../Code Editor/Code1/Code1";

export function Content3() {
  return (
    <div style={{ minHeight: "100vh", overflow: "auto" }}>
      <Navbar />
      <Problem3 />
    </div>
  );
}

function Problem3() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          style={{
            flex: "1 1 100%",
            maxWidth: "100%",
            color: "white",
            padding: "0 20px 20px 0",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
              marginBottom: "10px",
              fontFamily: "cursive",
            }}
          >
            Regular Expression Matching
          </Typography>
          <p style={{ lineHeight: 1.6, fontSize: "15px" }}>
            Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
          </p>
          <ul style={{ lineHeight: 1.8, paddingLeft: "20px" }}>
            <li>'.' Matches any single character.</li>
            <li>'*' Matches zero or more of the preceding element.</li>
          </ul>
          <p>
            The matching should cover the entire input string (not partial).
          </p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 1:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: s = "aa", p = "a"
            <br />
            Output: false
          </p>
          <p>Explanation: "a" does not match the entire string "aa".</p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 2:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: s = "aa", p = "a*"
            <br />
            Output: true
          </p>
          <p>
            Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
          </p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 3:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: s = "ab", p = ".*"
            <br />
            Output: true
          </p>
          <p>
            Explanation: ".*" means "zero or more (*) of any character (.)".
          </p>
        </div>
      </div>
      <div className="coder">
        <Code1 />
      </div>
    </div>
  );
}
