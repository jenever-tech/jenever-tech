"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { useColorScheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const navLinks = [
  { href: "#services", label: "服務" },
  { href: "#portfolio", label: "作品集" },
  { href: "#about", label: "關於我們" },
  { href: "#tech", label: "技術" },
];

function ThemeToggle() {
  const { setMode } = useColorScheme();
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  if (!mounted) return <Box sx={{ width: 40, height: 40 }} />;

  const handleToggle = () => {
    const next = isDark ? "light" : "dark";
    setMode(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    setIsDark(!isDark);
  };

  return (
    <IconButton
      onClick={handleToggle}
      aria-label={isDark ? "切換為淺色模式" : "切換為深色模式"}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        transition: "all 0.3s",
        "&:hover": { transform: "rotate(30deg)", bgcolor: "action.hover" },
      }}
    >
      {isDark ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </IconButton>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? "rgba(var(--mui-palette-background-defaultChannel) / 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? 1 : 0,
          borderColor: "divider",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundImage: "none",
        }}
      >
        <Toolbar sx={{ maxWidth: "lg", width: "100%", mx: "auto", px: { xs: 2, md: 3 } }}>
          <Box
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt=""
              sx={{
                height: 30,
                display: "block",
                ".light &": { display: "none" },
              }}
            />
            <Box
              component="img"
              src="/logo_black.png"
              alt=""
              sx={{
                height: 30,
                display: "none",
                ".light &": { display: "block" },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "text.primary",
                lineHeight: 1,
              }}
            >
              Jenever
              <Box component="span" sx={{ color: "primary.main" }}>
                Tech
              </Box>
            </Typography>
          </Box>

          {/* Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 6,
                    left: "50%",
                    width: 0,
                    height: 2,
                    bgcolor: "primary.main",
                    transition: "all 0.3s",
                    transform: "translateX(-50%)",
                    borderRadius: 1,
                  },
                  "&:hover": {
                    color: "text.primary",
                    bgcolor: "transparent",
                    "&::after": { width: "60%" },
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <ThemeToggle />
            <Button
              variant="contained"
              href="#contact"
              size="small"
              sx={{ ml: 1 }}
            >
              聯絡我們
            </Button>
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
            <ThemeToggle />
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="開啟選單">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: { sx: { width: 280, bgcolor: "background.paper" } },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
          <Button
            variant="contained"
            fullWidth
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            sx={{ mt: 2 }}
          >
            聯絡我們
          </Button>
        </List>
      </Drawer>

      {/* Spacer */}
      <Toolbar />
    </>
  );
}
