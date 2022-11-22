import * as React from 'react';
import { Box, Typography, Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    openBackdrop : state.Backdrop,
    percent : state.PercentCounter
  }
}

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '16px !important',
        }}
      >
        <Typography variant="caption" component="div">
          {`${props.value}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function PageBackdrop(props) {

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.openBackdrop}
    >
      <CircularProgressWithLabel value={props.percent} color={"inherit"} />
    </Backdrop>
  );
}

export default connect(mapStateToProps)(PageBackdrop);