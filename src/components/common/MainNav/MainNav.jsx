import { useNavigate } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";

export function MainNav() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4, md: 8 } }}>
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#f9a825",
              fontFamily: "cursive",
              fontSize: { xs: "20px", sm: "26px" },
            }}
          >
            Practice
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "cursive",
              fontSize: { xs: "14px", sm: "16px" },
              ml: 0.5,
            }}
          >
            Hub
          </Typography>
        </Box>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate("/signup")}
            sx={{ color: "#fff", borderColor: "#fff", textTransform: "none", fontFamily: "cursive" }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/signin")}
            sx={{ backgroundColor: "#4dabf5", textTransform: "none", fontFamily: "cursive" }}
          >
            Sign In
          </Button>
        </Box>

        {/* Mobile hamburger */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" }, color: "#fff" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile menu */}
      {menuOpen && (
        <Box sx={{ display: { xs: "flex", sm: "none" }, flexDirection: "column", gap: 1, px: 2, pb: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => { navigate("/signup"); setMenuOpen(false); }}
            sx={{ color: "#fff", borderColor: "#fff", textTransform: "none", fontFamily: "cursive" }}
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => { navigate("/signin"); setMenuOpen(false); }}
            sx={{ backgroundColor: "#4dabf5", textTransform: "none", fontFamily: "cursive" }}
          >
            Sign In
          </Button>
        </Box>
      )}
    </AppBar>
  );
}
