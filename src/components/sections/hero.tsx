"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#0f172a",
      }}
    >
      {/* Banner background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
        }}
      />

      {/* Glow orbs */}
      <Box
        className="animate-glow"
        sx={{
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <Box
        className="animate-float-delayed"
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "15%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center", py: 12 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Chip
            icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />}
            label="AI 驅動的技術解決方案"
            variant="outlined"
            sx={{
              mb: 4,
              py: 2.5,
              px: 1,
              fontSize: "0.85rem",
              color: "#94a3b8",
              borderColor: "#334155",
              backdropFilter: "blur(8px)",
              "& .MuiChip-icon": { color: "#06b6d4" },
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.15,
              mb: 3,
              color: "#f8fafc",
            }}
          >
            打造下一代
            <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              數位產品
            </Box>
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#94a3b8",
              fontWeight: 400,
              maxWidth: 680,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", sm: "1.15rem" },
            }}
          >
            從金融科技、AI 基礎設施到教育平台——跨越 10+ 產業、整合 20+ 技術棧，
            以工程師的深度思維為企業量身打造解決方案。
          </Typography>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center", mt: 5 }}>
            <Button
              variant="contained"
              size="large"
              href="#portfolio"
              endIcon={<ArrowForwardIcon />}
            >
              查看作品集
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              startIcon={<RocketLaunchIcon />}
              sx={{
                borderColor: "#475569",
                color: "#f8fafc",
                "&:hover": {
                  borderColor: "#06b6d4",
                  bgcolor: "rgba(6,182,212,0.08)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s",
              }}
            >
              開始你的專案
            </Button>
          </Stack>
        </motion.div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ marginTop: 64, overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <Box className="animate-marquee" sx={{ display: "flex", gap: 2, width: "max-content" }}>
            {[
              "Next.js", "React", "TypeScript", "FastAPI", "Python",
              "Flutter", "Kubernetes", "Docker", "PostgreSQL", "Redis",
              "AWS", "GCP", "AI / ML", "TensorFlow", "Node.js",
              "GraphQL", "Terraform", "CI/CD", "WebSocket", "MongoDB",
              "Next.js", "React", "TypeScript", "FastAPI", "Python",
              "Flutter", "Kubernetes", "Docker", "PostgreSQL", "Redis",
              "AWS", "GCP", "AI / ML", "TensorFlow", "Node.js",
              "GraphQL", "Terraform", "CI/CD", "WebSocket", "MongoDB",
            ].map((tech, i) => (
              <Chip
                key={`${tech}-${i}`}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  color: "#94a3b8",
                  borderColor: "#334155",
                  flexShrink: 0,
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: "#06b6d4",
                    color: "#06b6d4",
                    transform: "scale(1.1)",
                  },
                }}
              />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
