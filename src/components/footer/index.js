import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Link,
  // styled,
} from "@mui/material";
import useStyles from "../../styles/home_styles";
import { PAGES } from "../../auth/auth_url";

// const StyledLink = styled(Link)({
//   textDecoration: "none",
//   color: "white",
// });

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Box className={classes.footer_menu_box}>
          <Grid container spacing={3}>
            <Grid item md={2} sm={6}>
              <Link
                href="https://order-form-bdb98.web.app"
                underline="none"
                style={{ color: "#fff" }}
              >
                <Typography
                  variant="body2"
                  className={classes.footer_menu_item}
                >
                  Shop
                </Typography>
              </Link>
              <Link
                href={PAGES.ABOUT}
                underline="none"
                style={{ color: "#fff" }}
              >
                <Typography
                  variant="body2"
                  className={classes.footer_menu_item}
                >
                  About Us
                </Typography>
              </Link>

              <Typography variant="body2" className={classes.footer_menu_item}>
                Contact
              </Typography>
            </Grid>
            <Grid item md={5} sm={6}>
              <Link
                href={PAGES.POLICY}
                underline="none"
                style={{ color: "#fff" }}
              >
                <Typography
                  variant="body2"
                  className={classes.footer_menu_item}
                >
                  Shipping & Runtime
                </Typography>
              </Link>
              <Link
                href={PAGES.TEAMS}
                underline="none"
                style={{ color: "#fff" }}
              >
                <Typography
                  variant="body2"
                  className={classes.footer_menu_item}
                >
                  Store Policy
                </Typography>
              </Link>
            </Grid>
            <Grid item xl={5} md={5} sm={8} className={classes.footer_form_box}>
              <Box
                component="form"
                sx={{
                  position: "relative",
                  "& .MuiTextField-root": { width: "24ch", height: "62px" },
                  "& .MuiInput-root": {
                    height: "68%",
                    margin: "5px",
                    paddingLeft: 1,
                    color: "#fff",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                {/* <label htmlFor="" className={classes.footer_input_label}>
                  Enter your email here*
                </label> */}
                <input
                  type="email"
                  name="email"
                  className={classes.footer_input}
                ></input>
                <Button
                  variant="contained"
                  className={classes.subscribe_button}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
