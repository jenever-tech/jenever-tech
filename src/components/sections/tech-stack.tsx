"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Flutter", "Tailwind CSS", "MUI"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Python", "Node.js", "GraphQL", "WebSocket", "REST API"],
  },
  {
    title: "Database & Cache",
    items: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "SQLAlchemy", "Prisma"],
  },
  {
    title: "AI & ML",
    items: ["LLM 整合", "Computer Vision", "NLP", "TensorFlow", "Ollama", "RAG"],
  },
  {
    title: "Cloud & Infra",
    items: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
  {
    title: "DevOps & Tools",
    items: ["GitHub Actions", "GitLab CI", "Prometheus", "Grafana", "Nginx", "MQTT"],
  },
];

export function TechStack() {
  return (
    <Box
      component="section"
      id="tech"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="overline" color="primary">
            Tech Stack
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: "2rem", md: "2.75rem" } }}>
            技術能力
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            20+ 技術棧涵蓋從前端到 AI、從雲端到 DevOps 的完整能力
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {categories.map((cat, catIdx) => (
            <Grid key={cat.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <motion.div

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                style={{ height: "100%" }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    height: "100%",
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "primary.main",
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {cat.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        variant="outlined"
                        sx={{
                          transition: "all 0.25s",
                          cursor: "default",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            borderColor: "primary.main",
                            transform: "scale(1.08)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
