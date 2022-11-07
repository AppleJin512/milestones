import { makeStyles } from '@mui/styles';

const styles = (theme) => {
  return {
    root: {

    },
    navBar: {
      backgroundColor: 'white !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important',
    },
    generalContainer: {
      maxWidth: '1423px !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
    headerContainer: {
      maxWidth: '100% !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
    toolBar: {
      height: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
    logoBox: {
      backgroundColor: '#0C0145',
      height: '100% !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '261px !important',
      marginLeft: '80px !important',
      [theme.breakpoints.between('xl', 'lg')]: {
        marginLeft: '0px !important',
      },
    },
    resposiveLogoBox: {
      height: 80,
      width: '100% !important',
      backgroundColor: '#0C0145',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    logoImage: {
      height: 25,
      width: '25px !important',
      fill: 'white',
    },
    logoText: {
      letterSpacing: '0.02em',
      color: 'white',
      cursor: 'pointer',
      fontSize: '24px',
      fontWeight: '600 !important',
      paddingLeft: 5,
      marginBottom: '-5px !important',
    },
    link: {
      color: "#B5B5B5",
      fontSize: '13px !important',
      fontWeight: '500 !important',
      '&:hover': {
        color: "#4F4778",
      },
    },
    activeNavButton: {
      color: "#4F4778",
      fontSize: '13px !important',
      fontWeight: '500 !important',
    },
    resposiveNavBar: {
      color: '#282828',
      fontWeight: 400,
      '&:hover': {
        color: '#DB163A',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important',
      },
    },
    activeResposiveNavButton: {
      color: '#DB163A !important',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important',
    },
    homeLink: {
      color: "#4F4778",
      fontSize: '13px !important',
      fontWeight: '500 !important',
      '&:hover': {
        color: "#4F4778",
      },
      '&.active': {
        color: "#4F4778",
      },
    },
    menu: {
      boxShadow: 'none !important',
    },
    menuItem: {
      display: 'flex !important',
      justifyContent: 'center !important',
      color: '#B5B5B5 !important',
      fontSize: '13px !important',
      fontWeight: '500 !important',
      '&:hover': {
        backgroundColor: '#fff !important',
        color: '#4F4778 !important',
      },
      '&:active': {
        backgroundColor: '#fff !important',
      }
    },
    selected: {
      backgroundColor: '#fff !important',
    },
    loginButton: {
      color: '#DB163A',
      paddingLeft: 10,
      fontSize: '14px !important' ,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cartValue: {
      color: 'white',
      position: 'absolute',
      right: 7.5,
      top: 8,
      fontSize: 10,
    },
    drawerButton: {
      position: 'relative',
      width: 22,
      height: 20,
    },
    drawerIcon1: {
      width: '100%',
      height: 2,
      backgroundColor: '#fff',
      borderRadius: 2,
      position: 'absolute',
      left: 0,
      transition: 'all .25s ease-in-out',
      // transform: 'translateY(10px) translateY(-50%) rotate(-45deg)',
    },
    drawerIcon2: {
      width: '100%',
      height: 2,
      top: 9,
      bottom: 0,
      backgroundColor: '#fff',
      borderRadius: 2,
      position: 'absolute',
      left: 0,
      margin: 'auto',
      transition: 'all .25s ease-in-out',
    },
    drawerIcon3: {
      width: '100%',
      height: 2,
      backgroundColor: '#fff',
      borderRadius: 2,
      position: 'absolute',
      left: 0,
      bottom: 0,
      transition: 'all .25s ease-in-out',
      // transform: 'translateY(-10px) translateY(50%) rotate(45deg)',
    },
    card: {
      borderRadius: '0 !important',
    },
    content: {
      padding: '0 !important',
    },
    TextBox1: {
      width: 297,
      height: '100%',
      position: 'absolute', 
      color: '#0c0145',
      top: '10%', 
      left: 220,
      transform: 'translateX(-50%)',
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        left: '175px !important',
      },
    },
    TextBox2: {
      width: 313,
      height: '100%',
      position: 'absolute', 
      top: '15%', 
      left: 220,
      transform: 'translateX(-50%)',
      textAlign: 'left',
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        width: 200,
        left: '128px !important',
      },
    },
    TextBox3: {
      width: 393,
      height: '100%',
      position: 'absolute', 
      top: '20%', 
      left: '35%',
      transform: 'translateX(-50%)',
      textAlign: 'left',
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        left: '220px !important',
      },
    },
    TextBox4: {
      width: '32%',
      height: '100%',
      position: 'absolute', 
      top: '20%', 
      left: '18%',
      transform: 'translateX(-50%)',
      textAlign: 'left',
      color: '#fff',
      [theme.breakpoints.down('md')]: {
        left: '155px !important',
        width: 200,
      },
      [theme.breakpoints.down('sm')]: {
        left: '125px !important',
        width: 200,
      },
    },
    ImageHeading1: {
      fontSize: 60,
      lineHeight: 1.1,
      textTransform: 'uppercase',
      fontWeight: 300,
      [theme.breakpoints.down('sm')]: {
        fontSize: 37,
      },
    },
    ImageHeading2: {
      fontSize: 36,
      lineHeight: 1.1,
      textTransform: 'uppercase',
      paddingBottom: 15,
      [theme.breakpoints.down('sm')]: {
        fontSize: 23,
      },
    },
    ImageHeading3: {
      fontSize: 36,
      lineHeight: 1.1,
      textTransform: 'uppercase',
      width: 242,
      [theme.breakpoints.down('sm')]: {
        fontSize: 23,
      },
    },
    imageSubheading: {
      fontSize: 18, 
      lineHeight: 1.5, 
      paddingTop: 15,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    ImageCardButton: {
      textTransform: 'none',
      padding: '10px 30px 10px 30px'
    },
    StatisticsBar: {
      backgroundImage: 'url(/images/map.jpg)',
      paddingTop: 70,
    },
    StatisticsTitileBar: {
      textAlign: 'center',
      color: '#0c0145',
      textTransform: 'uppercase',
      fontSize: '36px !important',
    },
    svgIcon: {
      fill: '#0c0145',
      height: 49,
    },
    statisticsInfo: {
      color: '#0c0145',
      textAlign: 'center',
      fontSize: '14px !important',
      lineHeight: '1.8em !important',
      margin: '0px 50px 20px 50px !important',
    },
    moreInfoButton: {
      color: '#fff',
      backgroundColor: '#0c0145 !important',
      borderRadius: '0 !important',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important',
      padding: '0px 32px 0px 32px !important',
      height: 40,
      textTransform: 'none !important',
      '&:hover': {
        backgroundColor: '#120C75 !important',
      }
    },
    chattingCard: {
      borderColor: '#E6E5EC',
      position: 'fixed',
      right: 20,
      bottom: 0,
      width: 340,
      borderRadius: '0 !important',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        right: 0,
      },
    },
    chattingHistoryBox: {
      backgroundColor: '#E6E5EC',
      height: 340,
    },
    textField: {
      borderColor: 'white !important',
      outline: 'none',
      width: '100%',
      padding: 10,
    },
    statusDot: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: 'red',
      marginRight: 5
    },
    chattingButton: {
      position: 'fixed !important',
      right: 20,
      bottom: 0,
      color: 'rgb(255, 255, 255) !important',
      backgroundColor: 'rgb(12, 1, 69) !important',
      padding: '15px 40px 15px 40px !important',
      fontSize: '19px !important',
      fontWeight: '300 !important',
      borderRadius: '0 !important',

    },
    chattingAvatar: {
      backgroundColor: 'rgb(12, 1, 69) !important', 
      width: 50, 
      height: 50,
      position: 'fixed !important',
      right: 20,
      bottom: 10,
    },
    back_to_top: {
      display: 'none',
      position: 'fixed !important',
      zIndex: 20,
      bottom: 87,
      width: '44px !important',
      height: 44,
      right: 0,
      offset: 100,
      opacity: '100%',
      fade: 500,
      mask: 'linear-gradient(#0000 100vh, #000 calc(100vh + var(--fade)))',
      cursor: 'pointer',
      animation: 'movebtn 3s ease-in-out infinite',
      transition: 'all .5s ease-in-out',
    },
    Drawer: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;