"use client";
import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  defaultColorScheme: "dark",
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#0891b2" },
        secondary: { main: "#7c3aed" },
        background: {
          default: "#fafafa",
          paper: "#ffffff",
        },
        text: {
          primary: "#0f172a",
          secondary: "#64748b",
        },
        divider: "#e2e8f0",
      },
    },
    dark: {
      palette: {
        primary: { main: "#06b6d4" },
        secondary: { main: "#8b5cf6" },
        background: {
          default: "#0f172a",
          paper: "#1e293b",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
        },
        divider: "#334155",
      },
    },
  },
  typography: {
    fontFamily: "var(--font-inter), 'Noto Sans TC', system-ui, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    overline: {
      fontWeight: 700,
      letterSpacing: "0.15em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 10,
          padding: "10px 24px",
        },
        colorPrimary: {
          variants: [
            {
              props: { variant: "contained" },
              style: ({ theme: t }) => ({
                background: `linear-gradient(135deg, ${t.palette.primary.main}, ${alpha(t.palette.secondary.main, 0.8)})`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${t.palette.primary.dark}, ${t.palette.secondary.main})`,
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 25px ${alpha(t.palette.primary.main, 0.4)}`,
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }),
            },
          ],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "0.75rem",
        },
      },
    },
  },
});

export default theme;
