import React, { useState, useEffect } from "react";
import { AppBar, Typography, Box, Toolbar, List, ListItem, ListItemText, IconButton, Drawer, Container, Hidden,} from "@mui/material";
import { Close } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import useStyles from "../../styles/home_styles";
import { Link, useNavigate, useLocation } from "react-router-dom"

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const links = [
    {
      id: "1",
      route: "HOME",
      url: "/",
      className: classes.link,
      resposiveClassName: classes.resposiveNavBar,
    },
    {
      id: "2",
      route: "SHOP",
      url: "/shop",
      className: classes.link,
      resposiveClassName: classes.resposiveNavBar,
    },
    {
      id: "3",
      route: "ABOUT",
      url: "/about-us",
      className: classes.link,
      resposiveClassName: classes.resposiveNavBar,
    },
    {
      id: "4",
      route: "CONTACT",
      className: classes.link,
      resposiveClassName: classes.resposiveNavBar,
    },
  ];
  
  const [linkData, setLinkData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    right: false,
  });
  let current_location = useLocation();

  links.forEach((link) => {
    if (link.url === current_location.pathname) {
      link.resposiveClassName = classes.activeResposiveNavButton;
      link.className = classes.activeNavButton;
    }
  })
 
  useEffect(() => {
    setLinkData(links);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => {
          return (
            <ListItem key={link.id} className={classes.resposiveNavBar}  button onClick={(e) => goToOtherPagesOnMobile({url:link.url, id: link.id})}>
              <ListItemText primary={link.route}  style={{  display: "flex",  justifyContent: "center",  }}/>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );


  const setActiveEffect = (e) => {
    if (e.type === "mouseover") {
      if (e.target.id === "2") {
        if (anchorEl !== e.currentTarget) {
          setAnchorEl(e.currentTarget);
        }
      }
    }
    if (e.type === "click") {
      links.forEach((item) => {
        if (item.id === e.target.id) {
          if (item.className === classes.link)
            item.className = classes.activeNavButton;
          else item.className = classes.link;
        } else {
          item.className = classes.link;
        }
        if (e.target.id === "1") {
          if (item.id === e.target.id) {
            item.className = classes.activeNavButton;
          } else item.className = classes.link;
        }
      });
      setLinkData(links);
      if (e.target.id === "4") {
        window.scrollTo({
          top: (0, document.body.scrollHeight),
          behavior: "smooth",
      });
      }
    }
  };

  const trigger = useScrollTrigger({
    target: document.body,
    disableHysteresis: true,
    threshold: 100,
  });

  const goToOtherPagesOnMobile = (data) => {
    links.forEach((item) => {
      if (item.id === data) {
        if (item.className === classes.resposiveNavBar)
          item.className = classes.activeResposiveNavButton;
        else item.className = classes.resposiveNavBar;
      } else {
        item.className = classes.resposiveNavBar;
      }
    });
    setLinkData(links);
    if (data.id === "4") {
      setState({right: false});
      window.scrollTo({
        top: (0, document.body.scrollHeight),
        behavior: "smooth",
      });
    } else {
      navigate(data.url);
      setState({right: false});
    }
  };

  return (
    <Box sx={{ marginBottom: "80px" }}>
      <ElevationScroll {...props}>
        <AppBar className={classes.navBar}>
          <Container className={classes.headerContainer} maxWidth="xl">
            <Hidden mdDown>
              <Toolbar className={classes.toolBar}>
                <Link to={'/'} className={classes.logoBox}>
                  <img src="/image/logo2.png" className={classes.logoImage} alt="" />
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexGrow: "0.4",
                  }}
                >
                  <Box
                    className="navBar"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexGrow: "0.4",
                    }}
                  >
                    {linkData.map((link) => (
                      <Link
                        key={link.id}
                        to={link.url}
                      >
                        <Typography
                          aria-owns={anchorEl ? "menu" : undefined}
                          aria-haspopup="true"
                          className={link.className}
                          id={link.id}
                          onClick={(e) => setActiveEffect(e)}
                          onMouseOver={(e) => setActiveEffect(e)}
                          in={trigger.toString()}
                        >
                          {link.route}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Toolbar>
            </Hidden>

            <Hidden mdUp>
              <Box className={classes.resposiveLogoBox}>
                <Link to={'/'}>
                  <img src="/image/logo2.png" className={classes.logoImage} alt="" />
                </Link>
                <Box>
                  <IconButton
                    size="large"
                    edge={false}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer("right", true)}
                  >
                    <Box
                      component="div"
                      className={classes.drawerButton}
                      id="drawerButton"
                    >
                      <Typography
                        component="span"
                        className={classes.drawerIcon1}
                        id="drawerButton1"
                      ></Typography>
                      <Typography
                        component="span"
                        className={classes.drawerIcon2}
                        id="drawerButton2"
                      ></Typography>
                      <Typography
                        component="span"
                        className={classes.drawerIcon3}
                        id="drawerButton3"
                      ></Typography>
                    </Box>
                  </IconButton>
                  <Drawer
                    classes={{
                      paper: `${classes.Drawer}`,
                    }}
                    anchor="right"
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        padding: "50px 0px 50px 0px",
                        transition: "all .25s ease-in-out",
                      },
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingRight: 20,
                      }}
                    >
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={toggleDrawer("right", false)}
                      >
                        <Close fontSize="inherit" />
                      </IconButton>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      {list("right")}
                    </Box>
                  </Drawer>
                </Box>
              </Box>
            </Hidden>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Header;
