import { makeStyles } from "@mui/styles";

const styles = (theme) => {
  return {
    root: {
      cursor: "pointer !important",
      color: "#B5B5B5 !important",
      fontSize: "13px !important",
      fontWeight: "500 !important",
      "&:hover": {
        color: "#4F4778",
      },
    },
    navBar: {
      backgroundColor: "white !important",
      paddingLeft: "0 !important",
      paddingRight: "0 !important",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important",
    },
    generalContainer: {
      paddingLeft: "112px !important",
      paddingRight: "112px !important",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
      },
    },
    toolBar: {
      height: 80,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "0 !important",
      paddingRight: "0 !important",
    },
    logoBox: {
      backgroundColor: "#0C0145",
      height: "100% !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "240px !important",
    },
    resposiveLogoBox: {
      height: 80,
      width: "240px !important",
      backgroundColor: "#0C0145",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 10,
        paddingRight: 10,
      },
    },
    logoImage: {
      height: 25,
      width: "25px !important",
      fill: "white",
    },
    logoText: {
      letterSpacing: "0.02em",
      color: "white",
      cursor: "pointer",
      fontSize: "24px",
      fontWeight: "600 !important",
      paddingLeft: 5,
      marginBottom: "-5px !important",
    },
    navButton: {
      cursor: "pointer !important",
      color: "#B5B5B5 !important",
      fontSize: "13px !important",
      fontWeight: "500 !important",
      "&:hover": {
        color: "#4F4778 !important",
      },
      "&.active": {
        color: "#4F4778 !important",
      },
    },
    activeNavButtton: {
      cursor: "pointer !important",
      color: "#4F4778 !important",
      fontSize: "13px !important",
      fontWeight: "500 !important",
    },
    resposiveNavBar: {
      cursor: "pointer !important",
      color: "#282828",
      fontWeight: 400,
      "&:hover": {
        color: "#DB163A",
        boxShadow:
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important",
      },
    },
    activeResposiveNavButton: {
      cursor: "pointer !important",
      color: "#DB163A !important",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important",
    },
    homeLink: {
      color: "#4F4778",
      fontSize: "13px !important",
      fontWeight: "500 !important",
      "&:hover": {
        color: "#4F4778",
      },
      "&.active": {
        color: "#4F4778",
      },
    },
    menu: {
      boxShadow: "none !important",
    },
    menuItem: {
      display: "flex !important",
      justifyContent: "center !important",
      color: "#B5B5B5 !important",
      fontSize: "13px !important",
      fontWeight: "500 !important",
      "&:hover": {
        backgroundColor: "#fff !important",
        color: "#4F4778 !important",
      },
      "&:active": {
        backgroundColor: "#fff !important",
      },
    },
    selected: {
      backgroundColor: "#fff !important",
    },
    loginButton: {
      color: "#DB163A",
      paddingLeft: 10,
      fontSize: "14px !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    imageBar: {},
    cartValue: {
      color: "white",
      position: "absolute",
      right: 7.5,
      top: 8,
      fontSize: 10,
    },
    drawerButton: {
      position: "relative",
      width: 22,
      height: 20,
    },
    drawerIcon1: {
      width: "100%",
      height: 2,
      backgroundColor: "#fff",
      borderRadius: 2,
      position: "absolute",
      left: 0,
      transition: "all .25s ease-in-out",
    },
    drawerIcon2: {
      width: "100%",
      height: 2,
      top: 9,
      bottom: 0,
      backgroundColor: "#fff",
      borderRadius: 2,
      position: "absolute",
      left: 0,
      margin: "auto",
      transition: "all .25s ease-in-out",
    },
    drawerIcon3: {
      width: "100%",
      height: 2,
      backgroundColor: "#fff",
      borderRadius: 2,
      position: "absolute",
      left: 0,
      bottom: 0,
      transition: "all .25s ease-in-out",
    },
    customize_button_container: {
      position: "absolute",
      top: "7% !important",
      padding: "0px 15px",
    },
    customize_button_container_hidden: {
      display: "none !important",
      position: "absolute",
      top: "7% !imoportant",
      padding: "0px 15px",
    },
    top_button_box: {
      display: "flex",
      justifyContent: "flex-end !important",
      padding: "10px 0px",
    },
    bottom_button_box: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "100px",
    },
    // vite_top_button1: {
    //     padding: '5px 10px !important',
    //     fontSize: '16px !important',
    //     borderRadius: '0 !important',
    //     backgroundColor: '#F47064 !important',
    //     textTransform: 'none !important',
    // },
    // vite_top_button2: {
    //     padding: '5px 10px !important',
    //     fontSize: '16px !important',
    //     borderRadius: '0 !important',
    //     backgroundColor: '#2E75B6 !important',
    //     textTransform: 'none !important',
    // },
    // vite_top_button3: {
    //     padding: '5px 10px !important',
    //     fontSize: '16px !important',
    //     borderRadius: '0 !important',
    //     backgroundColor: '#548235 !important',
    //     textTransform: 'none !important',
    // },
    top_button: {
      padding: "5px 30px !important",
      fontSize: "16px !important",
      borderRadius: "0 !important",
      backgroundColor: "#F47064 !important",
      textTransform: "none !important",
    },
    vite_top_button: {
      padding: "5px 10px !important",
      fontSize: "16px !important",
      borderRadius: "0 !important",
      backgroundColor: "#F47064 !important",
      textTransform: "none !important",
    },
    bottom_button: {
      fontSize: "16px !important",
      fontWeight: "800 !important",
      padding: "10px 50px !important",
      borderRadius: "0 !important",
      backgroundColor: "#D0CECE !important",
      color: "#000 !important",
      textTransform: "none !important",
    },
    vite_bottom_button: {
      fontSize: "16px !important",
      fontWeight: "800 !important",
      padding: "5px 30px !important",
      borderRadius: "0 !important",
      backgroundColor: "#D0CECE !important",
      color: "#000 !important",
      textTransform: "none !important",
    },
    card: {
      borderRadius: "0 !important",
    },
    content: {
      padding: "0 !important",
      position: "relative",
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
