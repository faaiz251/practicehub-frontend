import { Typography, Button } from "@mui/material";
import { Navbar } from "../../common/NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Content.css";

export function Content() {
  return (
    <div>
    <div className ='header'>
      <Navbar />
      </div>
      <br />
      <div  className="container">
      <Problems />
      </div>
      </div>
   
  );
}

function Problems() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="problem-header">
        <Typography variant="h5">Title</Typography>
        <Typography variant="h5">Description</Typography>
      </div>
      <div className="problem-row">
        <Button
          variant="text"
          onClick={async () => {
            navigate("/content1");
          }}
        >
          Two Sum
        </Button>
        <Typography variant="h5" className="difficulty" style={{ color: "green" }}>
          Easy
        </Typography>
      </div>
      <div className="problem-row">
        <Button
          variant="text"
          onClick={async () => {
            navigate("/content2");
          }}
        >
          Longest Substring Without Repeating Characters
        </Button>
        <Typography variant="h5" className="difficulty" style={{ color: "yellow" }}>
          Medium
        </Typography>
      </div>
      <div className="problem-row">
        <Button
          variant="text"
          onClick={async () => {
            navigate("/content3");
          }}
        >
          Regular Expression Matching
        </Button>
        <Typography variant="h5" className="difficulty" style={{ color: "red" }}>
          Hard
        </Typography>
      </div>
    </div>
  );
}
