"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

export function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <motion.div

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            variant="outlined"
            sx={{
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: (t) =>
                  `radial-gradient(ellipse at top left, ${t.palette.primary.main}08, transparent 50%), radial-gradient(ellipse at bottom right, ${t.palette.secondary.main}08, transparent 50%)`,
                pointerEvents: "none",
              },
            }}
          >
            <Grid container>
              {/* Left Info */}
              <Grid size={{ xs: 12, lg: 5 }}>
                <Box sx={{ p: { xs: 4, md: 6 } }}>
                  <Typography variant="overline" color="primary">
                    Contact
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
                    開始你的專案
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                    無論是新產品開發、系統改造或技術諮詢，歡迎與我們聊聊。
                  </Typography>

                  <Stack spacing={3} sx={{ mt: 5 }}>
                    <Box
                      component="a"
                      href="mailto:joseph@jenever-tech.com"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        color: "text.primary",
                        textDecoration: "none",
                        transition: "all 0.3s",
                        "&:hover": { color: "primary.main", transform: "translateX(4px)" },
                      }}
                    >
                      <EmailIcon sx={{ color: "primary.main" }} />
                      joseph@jenever-tech.com
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, color: "text.secondary" }}>
                      <AccessTimeIcon sx={{ color: "primary.main", mt: 0.3 }} />
                      <Box>
                        <Typography variant="body2">週一至週四 10:00 – 19:00</Typography>
                        <Typography variant="body2">週五 10:00 – 18:00</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Grid>

              {/* Right Form */}
              <Grid size={{ xs: 12, lg: 7 }}>
                <Box
                  component="form"
                  onSubmit={(e: React.FormEvent) => e.preventDefault()}
                  sx={{ p: { xs: 4, md: 6 }, display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField label="姓名" fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField label="Email" type="email" fullWidth required />
                    </Grid>
                  </Grid>
                  <TextField label="公司名稱" fullWidth />
                  <TextField label="訊息" multiline rows={4} fullWidth required placeholder="請描述您的需求..." />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    送出訊息
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
