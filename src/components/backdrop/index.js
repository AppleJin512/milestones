import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    openBackdrop : state.Backdrop
  }
}

function PageBackdrop(props) {

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.openBackdrop}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
export default connect(mapStateToProps)(PageBackdrop);