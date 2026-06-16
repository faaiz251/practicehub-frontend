import { TextField, Button, Typography, Card, CircularProgress } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignin = async () => {
    if (!username || !password) {
      toast.error("Please fill in both username and password fields.", { duration: 3000 });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signin`,
        { username, password },
        { headers: { "Content-type": "application/json" } }
      );
      const data = res.data;
      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful!", { duration: 3000 });
        navigate("/content");
      } else {
        toast.error("Login failed. No token received.", { duration: 4000 });
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Invalid username or password.";
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
          onClick={handleSignin}
          sx={{
            backgroundColor: "#4dabf5",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            fontWeight: "bold",
            width: "50%",
            "&:disabled": { backgroundColor: "#90caf9" },
          }}
        >
          {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Sign in"}
        </Button>
        <Typography variant="body2" sx={{ color: "black", marginTop: "20px", textAlign: "center" }}>
          Not a User?{" "}
          <Link to="/signup" style={{ color: "#4dabf5" }}>
            Signup
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
