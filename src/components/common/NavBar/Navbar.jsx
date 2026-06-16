import { useNavigate } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Logout, Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1a1a2e", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4, md: 8 } }}>
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/content")}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#f9a825",
              fontFamily: "cursive",
              fontSize: { xs: "18px", sm: "22px" },
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

        {/* Desktop logout */}
        <Button
          variant="contained"
          size="small"
          onClick={handleLogout}
          startIcon={<Logout />}
          sx={{
            backgroundColor: "#4dabf5",
            display: { xs: "none", sm: "flex" },
            textTransform: "none",
            fontFamily: "cursive",
          }}
        >
          Log Out
        </Button>

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
        <Box sx={{ display: { xs: "block", sm: "none" }, px: 2, pb: 2, backgroundColor: "#1a1a2e" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogout}
            startIcon={<Logout />}
            sx={{ backgroundColor: "#4dabf5", textTransform: "none", fontFamily: "cursive" }}
          >
            Log Out
          </Button>
        </Box>
      )}
    </AppBar>
  );
}
