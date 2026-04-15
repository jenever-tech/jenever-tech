"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Language";
import DashboardIcon from "@mui/icons-material/Dashboard";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

const services = [
  {
    icon: WebIcon,
    title: "網站開發",
    desc: "客製化 Landing Page、SPA 單頁應用、響應式網站，從設計到上線一站完成。",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
  },
  {
    icon: DashboardIcon,
    title: "管理後台",
    desc: "CRM、ERP、專屬管理面板，以清晰的資料視覺化提升營運效率。",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    icon: IntegrationInstructionsIcon,
    title: "系統整合",
    desc: "串接第三方 API、SEO 優化、社群整合、IoT 方案，打通企業數據鏈路。",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    icon: PhoneIphoneIcon,
    title: "行動應用",
    desc: "Native 與跨平台 App 開發，支援 iOS / Android，從 MVP 到產品化。",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    icon: PsychologyIcon,
    title: "AI 整合應用",
    desc: "從資料收集、模型訓練到部署，整合 LLM、Computer Vision、NLP 打造智慧化應用。",
    gradient: "linear-gradient(135deg, #ec4899, #db2777)",
  },
  {
    icon: CloudQueueIcon,
    title: "雲端與基礎設施",
    desc: "AWS / GCP 雲端架構、K8s 容器化部署、CI/CD 自動化流程規劃與建置。",
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Services() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="overline" color="primary">
            Services
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: "2rem", md: "2.75rem" } }}>
            我們的服務
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 560, mx: "auto" }}>
            跨領域的技術能力，為不同產業提供最適切的解決方案
          </Typography>
        </Box>

        <motion.div

          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Grid container spacing={3}>
            {services.map((s) => (
              <Grid key={s.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                <motion.div variants={itemVariants} style={{ height: "100%" }}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      cursor: "default",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: s.gradient,
                        opacity: 0,
                        transition: "opacity 0.3s",
                      },
                      "&:hover::before": { opacity: 1 },
                      "&:hover .service-icon": {
                        background: s.gradient,
                        color: "#fff",
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        className="service-icon"
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 2.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: (t) => alpha(t.palette.primary.main, 0.1),
                          color: "primary.main",
                          mb: 2.5,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <s.icon />
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {s.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
