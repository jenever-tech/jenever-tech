import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const footerLinks = [
  { href: "#services", label: "服務" },
  { href: "#portfolio", label: "作品集" },
  { href: "#about", label: "關於我們" },
  { href: "#tech", label: "技術" },
  { href: "#contact", label: "聯絡我們" },
];

export function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
              <Box
                component="img"
                src="/logo.png"
                alt=""
                sx={{
                  height: 26,
                  display: "block",
                  ".light &": { display: "none" },
                }}
              />
              <Box
                component="img"
                src="/logo_black.png"
                alt=""
                sx={{
                  height: 26,
                  display: "none",
                  ".light &": { display: "block" },
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1 }}>
                Jenever
                <Box component="span" sx={{ color: "primary.main" }}>
                  Tech
                </Box>
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
              晴玖科技 — 以工程師的深度思維，打造高品質數位產品。
            </Typography>
          </Grid>

          {/* Links */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              快速連結
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    fontSize: "0.875rem",
                    transition: "all 0.25s",
                    "&:hover": { color: "primary.main", transform: "translateX(4px)" },
                    display: "inline-block",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              聯絡方式
            </Typography>
            <Link
              href="mailto:joseph@jenever-tech.com"
              underline="none"
              color="text.secondary"
              sx={{
                fontSize: "0.875rem",
                display: "block",
                mb: 1,
                transition: "color 0.25s",
                "&:hover": { color: "primary.main" },
              }}
            >
              joseph@jenever-tech.com
            </Link>
            <Typography variant="body2" color="text.secondary">
              週一至週四 10:00 – 19:00
            </Typography>
            <Typography variant="body2" color="text.secondary">
              週五 10:00 – 18:00
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center" }}>
          © {new Date().getFullYear()} JeneverTech 晴玖科技. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
