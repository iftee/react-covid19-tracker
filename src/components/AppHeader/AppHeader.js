import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles, useScrollTrigger } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4Outlined';
import Brightness7Icon from '@material-ui/icons/Brightness7Outlined';

const appHeaderStyles = makeStyles({
  root: {
    backgroundImage: 'linear-gradient(90deg, #b71c1c 0%, #d50000 75%)',
    '&.MuiPaper-elevation4': {
      boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
    },
  },
  toolBar: {
    margin: '0 auto',
    width: '100%',
    maxWidth: 1280,    
    display: 'flex',
    justifyContent: 'space-between',
  },
  brandTitle: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
});

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const AppHeader = ({ toggleTheme, toggleThemeIcon }) => {
  const classes = appHeaderStyles();

  return (
    <>     
      <ElevationScroll>
        <AppBar className={classes.root}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.brandTitle}>
              COVID-19 UPDATES
            </div>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Switch Light/Dark Theme"
              onClick={toggleTheme}
            >
              {toggleThemeIcon === 'dark' ? 
                <Brightness4Icon />
                :
                <Brightness7Icon />
              }                
            </IconButton>        
          </Toolbar>          
        </AppBar>
      </ElevationScroll> 
      <Toolbar id="back-to-top-anchor" />     
    </>
  );
}