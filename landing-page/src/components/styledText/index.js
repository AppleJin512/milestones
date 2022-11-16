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
  "&::before": {
    content: '""',
    width: "6px",
    height: "6px",
    backgroundColor: "#8c8c8c",
    borderRadius: "50%",
    border: "none",
    margin: "8.5px 11px 10px 0",
    float: "left",
  },
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
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#0688e2",
  "&:hover": {
    color: "#232323 !important",
  },
});
