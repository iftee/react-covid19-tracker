import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const appFooterStyles = makeStyles({
  root: {
    paddingTop: 24,
    paddingBottom: 24,
    textAlign: 'center',
  },
  a: {
    color: '#f44336',
  },
});

export const AppFooter = () => {
  const classes = appFooterStyles();

  return(
    <Container maxWidth="lg" className={classes.root}>
      <p>A React based project to view worldwide COVID-19 data using <a href="https://mathdro.id" target="_blank" rel="noopener noreferrer" className={classes.a}>mathdroid</a>'s <a href="https://covid19.mathdro.id/api" target="_blank" rel="noopener noreferrer" className={classes.a}>COVID-19 API</a>. <br/>View repository on <a href="https://github.com/iftee/react-covid19-tracker" target="_blank" rel="noopener noreferrer" className={classes.a}>GitHub</a>.</p>
    </Container>
  );
}