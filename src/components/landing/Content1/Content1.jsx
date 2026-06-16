import { Typography } from "@mui/material";
import { Navbar } from "../../common/NavBar/Navbar";
import { Code1 } from "../../Code Editor/Code1/Code1";
import "./Content1.css";

export function Content1() {
  return (
    <div style={{ minHeight: "100vh", overflow: "auto" }}>
      <Navbar />
      <Problem1 />
    </div>
  );
}

function Problem1() {
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
            Two Sum
          </Typography>
          <p style={{ lineHeight: 1.6, fontSize: "15px" }}>
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target. You may
            assume that each input would have exactly one solution, and you may
            not use the same element twice. You can return the answer in any
            order.
          </p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 1:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: nums = [2,7,11,15], target = 9<br />
            Output: [0, 1]
          </p>
          <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 2:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: nums = [3,2,4], target = 6<br />
            Output: [1,2]
          </p>
          <h3 style={{ marginTop: "20px", color: "#4dabf5" }}>Example 3:</h3>
          <p style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
            Input: nums = [3,3], target = 6<br />
            Output: [0,1]
          </p>
          <p style={{ marginTop: "20px" }}>
            Only one valid answer exists.
            <br />
            <strong style={{ color: "#f9a825" }}>Follow-up:</strong> Can you come up with an algorithm that is less than O(n²) time complexity?
          </p>
        </div>
      </div>
      <div className="coder">
        <Code1 />
      </div>
    </div>
  );
}
