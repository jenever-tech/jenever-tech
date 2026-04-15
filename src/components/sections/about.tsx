"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BusinessIcon from "@mui/icons-material/Business";
import LayersIcon from "@mui/icons-material/Layers";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const stats = [
  { icon: CalendarTodayIcon, value: 2019, suffix: "", label: "成立年份", isYear: true },
  { icon: BusinessIcon, value: 10, suffix: "+", label: "覆蓋產業" },
  { icon: LayersIcon, value: 20, suffix: "+", label: "技術棧" },
  { icon: ThumbUpIcon, value: 100, suffix: "%", label: "客戶滿意" },
];

function CountUp({ target, suffix, isYear }: { target: number; suffix: string; isYear?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(isYear ? target : 0);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = isYear ? 2015 : 0;
          const steps = 40;
          const increment = (target - start) / steps;
          let current = start;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            current += increment;
            if (step >= steps) {
              current = target;
              clearInterval(timer);
            }
            setCount(Math.round(current));
          }, 1500 / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isYear]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          {/* Left: Text */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div

              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="overline" color="primary">
                About Us
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: "2rem", md: "2.75rem" } }}>
                關於晴玖科技
              </Typography>
              <Box sx={{ mt: 3, "& p": { color: "text.secondary", lineHeight: 1.8, mb: 2 } }}>
                <Typography>
                  晴玖科技成立於 2019 年，由一群熱愛技術的工程師組建。我們鍾情於自身專業技能的精進，更熱衷於將資訊技術應用至各個領域。
                </Typography>
                <Typography>
                  從系統整合、行動應用到 AI 基礎設施，我們以模組化的規劃與開發模式執行專案，降低成本並控管風險。整合 AWS、GCP 等雲端服務方案，讓客戶專注於營運端和商業佈局。
                </Typography>
                <Typography>
                  未來，我們持續整合 AI、容器化部署、邊緣運算等新技術，為客戶提供嶄新的資訊應用服務。
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Stats */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div

              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Grid container spacing={2.5}>
                {stats.map((stat) => (
                  <Grid key={stat.label} size={{ xs: 6 }}>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 3.5,
                        textAlign: "center",
                        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "default",
                        "&:hover": {
                          transform: "translateY(-6px) scale(1.02)",
                          borderColor: "primary.main",
                          boxShadow: (t) => `0 12px 40px ${t.palette.primary.main}22`,
                        },
                        "&:hover .stat-icon": {
                          transform: "scale(1.2) rotate(10deg)",
                          color: "primary.main",
                        },
                      }}
                    >
                      <stat.icon
                        className="stat-icon"
                        sx={{
                          fontSize: 28,
                          color: "text.secondary",
                          mb: 1.5,
                          transition: "all 0.35s",
                        }}
                      />
                      <Typography variant="h3" sx={{ fontSize: "2.2rem" }}>
                        <CountUp target={stat.value} suffix={stat.suffix} isYear={stat.isYear} />
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
