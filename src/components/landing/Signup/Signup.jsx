import { TextField, Button, Typography, Card, CircularProgress } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async () => {
    if (!username || !password) {
      toast.error("Please fill in both username and password fields.", { duration: 3000 });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signup/`,
        { username, password },
        { headers: { "Content-type": "application/json" } }
      );
      toast.success("Signup successful! Redirecting to login...", { duration: 3000 });
      setTimeout(() => navigate("/signin"), 1000);
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed. Please try again.";
      toast.error(msg, { duration: 4000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        fontFamily: "cursive",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "16px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          width: { xs: "100%", sm: "400px" },
          maxWidth: "400px",
          justifyContent: "center",
          color: "white",
          minHeight: "60vh",
          border: "5px solid white",
          p: 3,
        }}
      >
        <div style={{ marginTop: "-20px" }}>
          <img
            src="https://leetcode.com/favicon-96x96.png"
            alt="Practice-Hub"
            style={{ display: "flex", marginLeft: "auto", marginRight: "auto", width: "48px" }}
          />
          <Typography
            onClick={() => navigate("/")}
            variant="h5"
            sx={{ color: "black", fontFamily: "cursive", cursor: "pointer", textAlign: "center", mt: 1 }}
          >
            Practice Hub
          </Typography>
        </div>
        <div style={{ marginTop: "40px", width: "100%" }}>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            variant="outlined"
            fullWidth
            required
            disabled={isSubmitting}
            sx={{ backgroundColor: "white", borderRadius: "5px", mb: 2 }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            disabled={isSubmitting}
            sx={{ backgroundColor: "white", borderRadius: "5px", mb: 2 }}
          />
        </div>

        <Button
          variant="contained"
          fullWidth
          disabled={isSubmitting}
          onClick={handleSignup}
          sx={{
            backgroundColor: "#4dabf5",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            width: "50%",
            fontWeight: "bold",
            "&:disabled": { backgroundColor: "#90caf9" },
          }}
        >
          {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Signup"}
        </Button>
        <Typography variant="body2" sx={{ color: "black", marginTop: "20px", textAlign: "center" }}>
          Already a User?{" "}
          <Link to="/signin" style={{ color: "#4dabf5" }}>
            Signin
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
