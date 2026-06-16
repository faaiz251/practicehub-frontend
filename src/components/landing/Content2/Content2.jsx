/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "../../common/NavBar/Navbar";
import { Typography } from "@mui/material";
import { Code1 } from "../../Code Editor/Code1/Code1";

export function Content2() {
  return (
    <div style={{ minHeight: "100vh", overflow: "auto" }}>
      <Navbar />
      <Problem2 />
    </div>
  );
}

function Problem2() {
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
            Longest Substring Without Repeating Characters
          </Typography>
          <p style={{ lineHeight: 1.6, fontSize: "15px" }}>
            Given a string s, find the length of the longest substring without
            repeating characters.
          </p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 1:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: s = "abcabcbb"
            <br />
            Output: 3
          </p>
          <p>Explanation: The answer is "abc", with the length of 3.</p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 2:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: s = "bbbbb"
            <br />
            Output: 1
          </p>
          <p>Explanation: The answer is "b", with the length of 1.</p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 3:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: s = "pwwkew"
            <br />
            Output: 3
          </p>
          <p>Explanation: The answer is "wke", with the length of 3.</p>
          <p style={{ marginTop: "10px" }}>
            Notice that the answer must be a substring, "pwke" is a subsequence
            and not a substring.
          </p>
        </div>
      </div>
      <div className="coder">
        <Code1 />
      </div>
    </div>
  );
}
