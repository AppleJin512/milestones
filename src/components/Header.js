import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Link, Box, Toolbar, List, ListItem, ListItemText, 
        IconButton, Drawer, Container, Hidden, Menu, MenuItem, Collapse 
        } from '@mui/material';
import { ExpandLess, ExpandMore, Close, AccountCircle } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import useStyles from '../styles/styles';


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
    { id: '1', route: 'HOME', url: 'aa', className: classes.activeNavButton, resposiveClassName: classes.activeResposiveNavButton },
    { id: '2', route: 'SHOP', url: 'ass', className: classes.link, resposiveClassName: classes.resposiveNavBar},
    { id: '3', route: 'BLOG', url: 'aa' , className: classes.link, resposiveClassName: classes.resposiveNavBar},
    { id: '4', route: 'ABOUT', url: 'aa', className: classes.link, resposiveClassName: classes.resposiveNavBar},
    { id: '5', route: 'ASK US', url: 'aa' , className: classes.link, resposiveClassName: classes.resposiveNavBar},
    { id: '6', route: 'CONTACT', url: 'aa', className: classes.link, resposiveClassName: classes.resposiveNavBar},
    { id: '7', route: 'MEMBERS', url: 'aa' , className: classes.link, resposiveClassName: classes.resposiveNavBar},
  ];

  const [ linkData, setLinkData ] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    right: false,
  });
  const [openSubListMenu, setOpenSubListMenu] = useState(false);

  const handleSubListMenu = () => {
    setOpenSubListMenu(!openSubListMenu);
  };


  const handleCloseNavbarMenu = () => {
    setAnchorEl(null);
  }

  useEffect(() => {
    setLinkData(links);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={classes.resposiveNavBar} button onClick={()=>goToOtherPagesOnMobile(1)}>
          <ListItemText primary="HOME" style={{display: 'flex', justifyContent: 'center'}}/>
        </ListItem>
        <ListItem className={classes.resposiveNavBar} button onClick={()=>goToOtherPagesOnMobile(2)}>
          <ListItemText primary="SHOP" style={{display: 'flex', justifyContent: 'center', marginLeft: 24}} onClick={handleSubListMenu}/>
          {openSubListMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSubListMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.resposiveNavBar} button>
              <ListItemText primary="Tents" style={{display: 'flex', justifyContent: 'center'}} />
            </ListItem>
            <ListItem className={classes.resposiveNavBar} button>
              <ListItemText primary="Jackets & Vests" style={{display: 'flex', justifyContent: 'center'}} />
            </ListItem>
            <ListItem className={classes.resposiveNavBar} button>
              <ListItemText primary="Sleeping Bags" style={{display: 'flex', justifyContent: 'center'}} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem className={classes.resposiveNavBar} button onClick={()=>goToOtherPagesOnMobile(3)}>
          <ListItemText primary="BLOG" style={{display: 'flex', justifyContent: 'center'}}/>
        </ListItem>
        <ListItem className={classes.resposiveNavBar} button onClick={()=>goToOtherPagesOnMobile(4)}>
          <ListItemText primary="ABOUT" style={{display: 'flex', justifyContent: 'center'}}/>
        </ListItem>
        <ListItem className={classes.resposiveNavBar} button onClick={()=>goToOtherPagesOnMobile(5)}>
          <ListItemText primary="ASK US" style={{display: 'flex', justifyContent: 'center'}}/>
        </ListItem>
        <ListItem className={classes.resposiveNavBar} button onClick={()=>goToOtherPagesOnMobile(6)}>
          <ListItemText primary="CONTACT" style={{display: 'flex', justifyContent: 'center'}}/>
        </ListItem>
        <ListItem className={classes.resposiveNavBar} button onClick={()=>goToOtherPagesOnMobile(7)}>
          <ListItemText primary="MEMBERS" style={{display: 'flex', justifyContent: 'center'}}/>
        </ListItem>
      </List>
    </Box>
  );

  const goToOtherPages = (e) => {
    if (e.target.id === '2') {
      if (anchorEl !== e.currentTarget) {
        setAnchorEl(e.currentTarget);
      }
    }
    links.forEach((item)=>{
      if(item.id === e.target.id) {
        if (item.className === classes.link) item.className = classes.activeNavButton;
        else item.className = classes.link;
      } else {
        item.className = classes.link;
      }
      if (e.target.id === '1') {
        if (item.id === e.target.id) {
          item.className = classes.activeNavButton;
        } else item.className = classes.link;
      }
    })
    setLinkData(links);
  }
  const goToOtherPagesOnMobile = (data) => {
    links.forEach((item)=>{
      if(item.id === data) {
        if (item.className === classes.resposiveNavBar) item.className = classes.activeResposiveNavButton;
        else item.className = classes.resposiveNavBar;
      } else {
        item.className = classes.resposiveNavBar;
      }
    })
    setLinkData(links);
  }
  
  return (
    <Box sx={{ marginBottom: '80px' }}>
      <ElevationScroll {...props}>
        <AppBar className={classes.navBar}>
          <Container className={classes.headerContainer}>

            <Hidden mdDown>
              <Toolbar className={classes.toolBar}>
                <Link href="#" underline="none" className={classes.logoBox}>
                  <svg style={{fill: 'white', height: '25px', width: '25px'}} preserveAspectRatio="xMidYMid meet" data-bbox="1.412 12.526 197.637 168.15" viewBox="1.412 12.526 197.637 168.15" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true">
                    <g>
                      <path d="M100.849 12.526L1.412 180.676h25.073l74.247-125.555 73.331 125.555h24.986l-98.2-168.15z"></path>
                      <path d="M52.296 180.676h25.071l23.658-40.007 23.368 40.007h24.988l-48.238-82.602-48.847 82.602z"></path>
                    </g>
                  </svg>
                  <Typography variant='span' className={classes.logoText}>
                    MADAGASKAR
                  </Typography>
                </Link>
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexGrow: '0.4',}}>
                  <Box className="navBar" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: '0.8'}}>
                    {linkData.map((link) => (
                      <Link href={link.url} underline="none" key={link.id}>
                        <Typography 
                          aria-owns={anchorEl ? "menu" : undefined}
                          aria-haspopup="true" 
                          className={link.className} 
                          id={link.id} 
                          onClick={(e)=>goToOtherPages(e)} 
                          onMouseOver={(e)=>goToOtherPages(e)}
                        >
                          {link.route}
                        </Typography>
                      </Link>
                    ))}
                    <Menu
                      id="menu"
                      elevation={0}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseNavbarMenu}
                      MenuListProps={{ onMouseLeave: handleCloseNavbarMenu, id: "menuItem" }}
                      disableScrollLock={ true }
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                      }}
                    >
                      <MenuItem className={classes.menuItem} selected classes={{ selected: classes.selected }} onClick={handleCloseNavbarMenu}>TENTS</MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleCloseNavbarMenu}>JACKETS & VESTS</MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleCloseNavbarMenu}>SLEEPING BAGS</MenuItem>
                    </Menu>
                    <Link href="" target="_blank" underline='none' style={{display: 'flex'}}>
                      <AccountCircle style={{color: 'green', fontSize: 26}}  />
                      <Typography className={classes.loginButton}>Log In</Typography>
                    </Link>
                  </Box>
                  <Link href="" target="_blank" underline='none' style={{display: 'flex', alignItems:'center', justifyContent:'center', position: 'relative', marginRight: 10}}>
                    <svg style={{fill: '#DB163A', width: 20, height: 24}} xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="5.7 0 105.5 126.1" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-1">
                      <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path><path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
                      <text x="58.5" y="77" dy=".35em" textAnchor="middle" className="bGBBgJ" data-hook="items-count">0</text>
                    </svg>
                    <Typography variant='span' className={classes.cartValue}>0</Typography>
                  </Link>
                </Box>      
              </Toolbar>
            </Hidden>

            <Hidden mdUp>
              <Box className={classes.resposiveLogoBox}>
                <Link href="#" underline="none">
                  <svg style={{fill: 'white', height: '25px', width: '25px'}} preserveAspectRatio="xMidYMid meet" data-bbox="1.412 12.526 197.637 168.15" viewBox="1.412 12.526 197.637 168.15" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true">
                    <g>
                      <path d="M100.849 12.526L1.412 180.676h25.073l74.247-125.555 73.331 125.555h24.986l-98.2-168.15z"></path>
                      <path d="M52.296 180.676h25.071l23.658-40.007 23.368 40.007h24.988l-48.238-82.602-48.847 82.602z"></path>
                    </g>
                  </svg>
                  <Typography variant='span' className={classes.logoText}>
                    MADAGASKAR
                  </Typography>
                </Link>
                <Box style={{display: 'flex', alignItems:'center'}}>
                  <Link href="" target="_blank" underline='none' style={{position: 'relative'}}>
                    <svg style={{fill: '#DB163A', width: 20, height: 24}} xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="5.7 0 105.5 126.1" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-1">
                      <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path><path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
                      <text x="58.5" y="77" dy=".35em" textAnchor="middle" className="bGBBgJ" data-hook="items-count">0</text>
                    </svg>
                    <Typography variant='span' className={classes.cartValue}>0</Typography>
                  </Link>
                </Box>
                <Box>
                  <IconButton
                    size="large"
                    edge={false}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer('right', true)}
                  >
                    <Box component="div" className={classes.drawerButton} id="drawerButton">
                      <Typography component="span" className={classes.drawerIcon1} id="drawerButton1"></Typography>
                      <Typography component="span" className={classes.drawerIcon2} id="drawerButton2"></Typography>
                      <Typography component="span" className={classes.drawerIcon3} id="drawerButton3"></Typography>
                    </Box>
                  </IconButton>
                  <Drawer
                    classes={{
                      paper: `${classes.Drawer}`,
                    }}
                    anchor="right"
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    PaperProps={{
                      sx: { width: "100%", padding: "50px 0px 50px 0px", transition: 'all .25s ease-in-out', },
                    }}
                  >
                    <Box style={{display: 'flex', justifyContent: 'flex-end', paddingRight: 20}}>
                      <IconButton aria-label="delete" size="large" onClick={toggleDrawer('right', false)}>
                        <Close fontSize="inherit" />
                      </IconButton>
                    </Box>
                    <Link href="" target="_blank" underline='none' style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                      <AccountCircle style={{color: 'green', fontSize: 26}} />
                      <Typography className={classes.loginButton}>Log In</Typography>
                    </Link>
                    <Box style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                      {list('right')}
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