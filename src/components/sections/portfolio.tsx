"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StorageIcon from "@mui/icons-material/Storage";
import FlightIcon from "@mui/icons-material/Flight";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const projects = [
  {
    icon: TrendingUpIcon,
    category: "金融科技",
    filter: "fintech",
    title: "AI 智慧投資儀表板",
    desc: "多交易所即時行情整合，搭載獨創六維信心指標系統，支援回測實驗室與自動化交易策略執行。",
    tags: ["Next.js", "FastAPI", "WebSocket", "PostgreSQL", "Redis", "DDD"],
    color: "#06b6d4",
  },
  {
    icon: ShoppingBagIcon,
    category: "電商 AI",
    filter: "ecommerce",
    title: "虛擬試衣間",
    desc: "結合 Instagram 情境照片的 AI 換裝體驗，讓消費者在真實生活場景中預覽穿搭效果。",
    tags: ["Flutter", "FastAPI", "Fal.ai", "Computer Vision", "LINE Pay"],
    color: "#8b5cf6",
  },
  {
    icon: StorageIcon,
    category: "企業 AI 基礎設施",
    filter: "enterprise",
    title: "私有 AI 基礎設施平台",
    desc: "12 層模組化架構的企業級 AI 部署方案，支援 GPU 多租戶管理、離線治理與即時監控儀表板。",
    tags: ["Kubernetes", "Docker", "React", "FastAPI", "GPU", "Prometheus"],
    color: "#10b981",
  },
  {
    icon: FlightIcon,
    category: "旅遊展示",
    filter: "travel",
    title: "國際賽事行程平台",
    desc: "10 天跨國行程展示網站，含航班資訊、每日行程時間軸、60+ 張圖庫與簡報模式切換。",
    tags: ["HTML/CSS/JS", "Tailwind", "RWD", "Lightbox", "SPA"],
    color: "#f59e0b",
  },
  {
    icon: SportsEsportsIcon,
    category: "教育科技",
    filter: "education",
    title: "象棋教學互動遊戲",
    desc: "為幼兒設計的 4 款簡化象棋對弈遊戲，支援 AI 對手與雙人模式，部署於 Google Cloud Run。",
    tags: ["SPA", "AI Opponent", "GCP Cloud Run", "Responsive"],
    color: "#ec4899",
  },
];

const filters = [
  { key: "all", label: "全部" },
  { key: "fintech", label: "金融科技" },
  { key: "ecommerce", label: "電商" },
  { key: "enterprise", label: "企業 AI" },
  { key: "travel", label: "旅遊" },
  { key: "education", label: "教育" },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="overline" color="primary">
            Portfolio
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: "2rem", md: "2.75rem" } }}>
            精選作品
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            橫跨金融、電商、企業 AI、旅遊、教育的實戰經驗
          </Typography>
        </Box>

        {/* Filters */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "center", mb: 6, flexWrap: "wrap", gap: 1 }}
        >
          {filters.map((f) => (
            <Chip
              key={f.key}
              label={f.label}
              onClick={() => setActiveFilter(f.key)}
              variant={activeFilter === f.key ? "filled" : "outlined"}
              color={activeFilter === f.key ? "primary" : "default"}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          ))}
        </Stack>

        {/* Project Grid */}
        <Grid container spacing={3}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <Grid key={p.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                <motion.div

                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "default",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, ${p.color}, ${alpha(p.color, 0.4)})`,
                        opacity: 0,
                        transition: "opacity 0.3s",
                      },
                      "&:hover::before": { opacity: 1 },
                      "&:hover .portfolio-icon": {
                        background: `linear-gradient(135deg, ${p.color}, ${alpha(p.color, 0.7)})`,
                        color: "#fff",
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3.5, flex: 1, display: "flex", flexDirection: "column" }}>
                      <Box
                        className="portfolio-icon"
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 2.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: alpha(p.color, 0.1),
                          color: p.color,
                          mb: 2.5,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <p.icon />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: p.color,
                          mb: 1,
                        }}
                      >
                        {p.category}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {p.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, flex: 1 }}
                      >
                        {p.desc}
                      </Typography>

                      <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.8, mt: 2.5 }}>
                        {p.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: "0.7rem",
                              height: 24,
                              transition: "all 0.25s",
                              "&:hover": {
                                borderColor: p.color,
                                color: p.color,
                                transform: "translateY(-1px)",
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
}
