import { makeStyles } from '@mui/styles';

const styles = (theme) => {
  return {
    navBar: {
      backgroundColor: 'white !important',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important',
    },
    generalContainer: {
      paddingLeft: '56px !important',
      paddingRight: '56px !important',
      [theme.breakpoints.down('md')]: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
      },
    },
    headerContainer: {
      paddingLeft: '56px !important',
      paddingRight: '0 !important',
       [theme.breakpoints.down('md')]: {
        paddingLeft: '0 !important',
      },
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
        paddingLeft: 10,
        paddingRight: 10,
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
    imageBar:{
      
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
    },
    card: {
      borderRadius: '0 !important',
    },
    content: {
      padding: '0 !important',
      position: 'relative',
    },
    imageContainer: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: '5px !important'
      },
    },
    image1:{
      height: 400, 
      width: '100%',
    },
    image2:{
      height: 400, 
      width: '100%',
      objectPosition: 'top',
    },
    image3:{
      height: 400, 
      width: '100%',
      objectFit: 'fill !important',
      objectPosition: 'right',
      [theme.breakpoints.down('md')]: {
        objectFit: 'cover !important',
      },
    },
    top_button_box: {
      display: 'flex', 
      justifyContent: 'flex-end', 
      padding: '30px 10px'
    },
    bottom_button_box: {
      display: 'flex', 
      justifyContent: 'center', 
      paddingTop: '150px'
    },
    top_button1: {
      padding: '5px 55px !important', 
      fontSize: '16px !important', 
      borderRadius: '0 !important',
      backgroundColor: '#C00000 !important',
      textTransform: 'none !important',
    },
    top_button2: {
      padding: '5px 55px !important', 
      fontSize: '16px !important', 
      borderRadius: '0 !important',
      backgroundColor: '#2E75B6 !important',
      textTransform: 'none !important',
    },
    top_button3: {
      padding: '5px 55px !important',
      fontSize: '16px !important',  
      borderRadius: '0 !important',
      backgroundColor: '#548235 !important',
      textTransform: 'none !important',
    },
    bottom_button: {
      fontSize: '16px !important', 
      fontWeight: '800 !important', 
      padding: '10px 70px !important', 
      borderRadius: '0 !important', 
      backgroundColor: '#D0CECE !important', 
      color: '#000 !important', 
      textTransform: 'none !important',
    },
    TextBox1: {
      width: '31%',
      height: '100%',
      position: 'absolute', 
      color: '#fff',
      top: '25%', 
      left: '10%',
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        left: '30px !important',
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
      [theme.breakpoints.down('lg')]: {
        width: 200,
        left: '128px !important',
      },
      [theme.breakpoints.down('sm')]: {
        width: 200,
        left: '30px !important',
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
      width: '440px',
      height: '100%',
      position: 'absolute', 
      color: '#fff',
      top: '20%', 
      left: '3%',
      textAlign: 'left',
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        width: 200,
        left: '30px !important',
      },
    },
    main_bar_button: {
      padding: '15px 130px !important',
      textTransform: 'none !important', 
      fontSize: '22px !important',
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        padding: '15px 80px !important', 
      },
    },
    ImageHeading1: {
      fontSize: 60,
      lineHeight: 1.1,
      textTransform: 'uppercase',
      fontFamily: 'cooper black',
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
    ImageHeading4: {
      fontSize: 26,
      lineHeight: 1.4,
      textTransform: 'uppercase',
      paddingBottom: 15,
      color: '#000',
      fontFamily: 'cooper black',
      [theme.breakpoints.down('sm')]: {
        fontSize: 23,
      },
    },
    imageSubheadng: {
      fontFamily: 'Verdana',
      fontSize: 24, 
      lineHeight: 1.5, 
      paddingTop: 50,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    buttonBox: {
      color: '#fff',
      paddingTop: 50,
      [theme.breakpoints.down('sm')]: {
        padding: '',
      },
    },
    buttonBox4: {
      color: '#fff',
    },
    ImageCardButton: {
      textTransform: 'none',
      padding: '10px 30px 10px 30px'
    },
    textContent: {
      position: 'absolute',
      width: 452,
      height: '100%',
      top: 0,
      left: 0,
      background: 'rgb(255, 255, 255, 1)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      [theme.breakpoints.down('sm')]: {
        width: 0,
      },
    },
    StatisticsBar: {
      backgroundImage: 'url(https://static.wixstatic.com/media/82fcd3_7a9abf1cf93845128c7233ec2618ee98~mv2.jpg/v1/fill/w_1423,h_540,al_c,q_85,enc_auto/82fcd3_7a9abf1cf93845128c7233ec2618ee98~mv2.jpg)',
      paddingTop: 65,
      backgroundRepeat: 'round',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      '& img': {
        width: 64,
        height: 64,
      },
    },
    StatisticsTitileBar: {
      textAlign: 'center',
      color: '#0c0145',
      textTransform: 'uppercase',
      fontSize: '36px !important',
      padding: '30px 0px',
    },
    svgIcon: {
      fill: '#0c0145',
      height: 49,
    },
    statisticsInfoHeader: {
      textAlign: 'center',
      color: '#0c0145',
      paddingTop: 19,
      paddingBottom: 19,
      fontWeight: '700 !important',
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
    emojiIcon: {
      '&:hover': {
        color: '#0C0145',
      },
    },
    fileIcon: {
      width: 50,
      height: 50,
      padding: 0,
      '&:hover': {
        color: '#0C0145',
      },
    },
    file_input_label: {
      position: 'relative',
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
    },
    file_input: {
      display: 'none',
      position: 'absolute',
      cursor: 'pointer !important',
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
    footer: {
      backgroundColor: '#181818',
    },
    footer_menu_box: {
      color: '#fff',
      padding: '70px 100px 50px 100px',
      [theme.breakpoints.down('sm')]: {
        padding: '35px 20px 0px 20px',
      },
    },
    footer_menu_item: {
      paddingBottom: 10,
      fontSize: 14,
      fontWeight: '300 !important',
    },
    footer_input: {
      width: '68%',
      height: 38,
      border: 'none',
      borderBottom: '2px solid #fff !important',
      background: 'transparent',
      paddingLeft: 10,
      paddingRight: 10,
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      '& ::placeholder': {
        color: '#fff',
      },
      '&:focus': {
        outline: 'none',
        borderBottom: '3px solid #D32F2F !important',
      },
    },
    subscribe_button: {
      position: 'absolute !important',
      right: '0px',
      padding: '0px 15px 0px 15px',
      height: 40,
      color: '#181818 !important',
      fontWeight: '300 !important',
      fontSize: '15px !important',
      backgroundColor: '#fff !important',
      borderRadius: '0 !important',
      [theme.breakpoints.only('md')]: {
        right: -18
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        top: 65,
        right: 0,
      },
      '&:hover': {
        backgroundColor: '#181818 !important',
        color: '#fff !important',
        border: '1px solid #fff !important',
      },
    },
    footer_input_label: {
      fontSize: '15px !important',
      fontWeight: '200 !important',
    },
    footer_index: {
      backgroundColor: '#2E2D2D',
      [theme.breakpoints.down('sm')]: {
        marginTop: '65px ',
      },
    },
    footer_index_text: {
      color: '#fff',
      padding: '15px 100px',
      fontSize: '12px !important',
      fontWeight: '200 !important',
      [theme.breakpoints.down('sm')]: {
        padding: '15px 60px',
        textAlign: 'center',
      },
    },
    footer_link_bar: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: 35,
      paddingBottom: 20,
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        paddingTop: 80,
        paddingBottom: 20,
      },
      '& p': {
        marginLeft: 12,
      },
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;