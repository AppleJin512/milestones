import { Button, InputBase, } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";


export const ColorButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    color: "white",
    backgroundColor: "#3c336a",
    borderRadius: "0px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#3c336a",
    },
}));
  
export  const OutlinedButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    width: "100%",
    color: theme.palette.grey["800"],
    borderColor: theme.palette.grey["400"],
    fontSize: "16px",
    "&:hover": {
      borderColor: theme.palette.grey["500"],
    },
}));
  
export  const UploadButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    background: theme.palette.grey["700"],
    border: `1px solid ${theme.palette.grey["900"]}`,
    color: "white",
    "&:hover": {
      background: theme.palette.grey["700"],
      border: `1px solid ${theme.palette.grey["900"]}`,
      outline: "none",
    },
}));
  
export  const StyledTextField = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      "&::placeholder": {
        textAlign: "center",
      },
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
}));