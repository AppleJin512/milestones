import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  Container,
  Hidden,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, Close } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import useStyles from "../../styles/home_styles";
import { PAGES } from "../../auth/auth_url";
// import { useAppPath } from "../../hooks/useAppPath";
import { Link } from "react-router-dom"

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
  const links = [
    {
      id: "1",
      route: "HOME",
      url: "/",
      className: classes.activeNavButton,
      resposiveClassName: classes.activeResposiveNavButton,
    },
    {
      id: "2",
      route: "SHOP",
      url: PAGES.SHOP,
      className: classes.link,
      resposiveClassName: classes.resposiveNavBar,
    },
    {
      id: "3",
      route: "ABOUT",
      url: PAGES.ABOUT,
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
  const [openSubListMenu, setOpenSubListMenu] = useState(false);

  const handleSubListMenu = () => {
    setOpenSubListMenu(!openSubListMenu);
  };

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

  // const currentPath = useAppPath();

  // const isSelfPage = (path) => {
  //   console.log("currentPage", currentPath);
  //   console.log("realpath", path);
  //   if (currentPath === path) return true;
  //   else return false;
  // };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          className={classes.resposiveNavBar}
          button
          onClick={() => goToOtherPagesOnMobile(1)}
        >
          <ListItemText
            primary="HOME"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </ListItem>
        <ListItem
          className={classes.resposiveNavBar}
          button
          onClick={() => goToOtherPagesOnMobile(2)}
        >
          <ListItemText
            primary="SHOP"
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: 24,
            }}
            onClick={handleSubListMenu}
          />
          {openSubListMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openSubListMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.resposiveNavBar} button>
              <ListItemText
                primary="Tents"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ListItem>
            <ListItem className={classes.resposiveNavBar} button>
              <ListItemText
                primary="Jackets & Vests"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ListItem>
            <ListItem className={classes.resposiveNavBar} button>
              <ListItemText
                primary="Sleeping Bags"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.resposiveNavBar}
          button
          onClick={() => goToOtherPagesOnMobile(4)}
        >
          <ListItemText
            primary="ABOUT"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </ListItem>
        <ListItem
          className={classes.resposiveNavBar}
          button
          onClick={() => goToOtherPagesOnMobile(6)}
        >
          <ListItemText
            primary="CONTACT"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ListItem>
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
    }
  };

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
