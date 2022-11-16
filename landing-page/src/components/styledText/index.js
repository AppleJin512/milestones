import { Typography, styled, Link } from "@mui/material";

export const TextContent = styled(Typography)(({ theme }) => ({
  color: "#3c3c3c",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "26px",
  fontFamily: "Poppins",
  marginBottom: "2rem",
}));

export const TextContentList = styled(Typography)(({ theme }) => ({
  color: "#3c3c3c",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "26px",
  fontFamily: "Poppins",
}));

export const SubTitle = styled(Typography)({
  color: "#3c3c3c",
  fontWeight: "bolder",
  fontSize: "14px",
  lineHeight: "26px",
  fontFamily: "Poppins",
  marginBottom: "2rem",
});

export const Title = styled(Typography)({
  color: "#232323",
  fontSize: "18px",
  lineHeight: "26px",
  fontFamily: "Poppins",
  fontWeight: 700,
  marginTop: 10,
  marginBottom: 70,
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#0688e2",
  "&:hover": {
    color: "#232323 !important",
  },
});
