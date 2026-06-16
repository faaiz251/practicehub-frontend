import { Typography, Button, Card, CardContent, Chip } from "@mui/material";
import { Navbar } from "../../common/NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import { ArrowForward, Code, Speed, Construction } from "@mui/icons-material";
import "./Content.css";

export function Content() {
  return (
    <div>
      <Navbar />
      <div className="problem-container">
        <Problems />
      </div>
    </div>
  );
}

function Problems() {
  const navigate = useNavigate();

  const problems = [
    { id: "content1", title: "Two Sum", difficulty: "Easy", color: "success", icon: <Code /> },
    { id: "content2", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", color: "warning", icon: <Speed /> },
    { id: "content3", title: "Regular Expression Matching", difficulty: "Hard", color: "error", icon: <Construction /> },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          fontFamily: "cursive",
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Problem List
      </Typography>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {problems.map((problem) => (
          <Card
            key={problem.id}
            sx={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "translateX(4px)",
              },
              cursor: "pointer",
            }}
            onClick={() => navigate(`/${problem.id}`)}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 0 },
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ color: "#4dabf5" }}>{problem.icon}</div>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontFamily: "cursive",
                    fontSize: { xs: "16px", sm: "20px" },
                  }}
                >
                  {problem.title}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Chip
                  label={problem.difficulty}
                  color={problem.color}
                  size="small"
                  sx={{ fontFamily: "cursive", fontWeight: "bold" }}
                />
                <ArrowForward sx={{ color: "#4dabf5", fontSize: "20px" }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
