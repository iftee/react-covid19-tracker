import React from 'react';
import { makeStyles, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const backTopStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),    
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = backTopStyles();
  const trigger = useScrollTrigger({   
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = document.querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return(
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={ classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export const BackToTop = props => {
  return (
    <ScrollTop {...props}>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
}