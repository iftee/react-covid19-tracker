import React from 'react';
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { formatDate } from '../../helpers';
import CountUp from 'react-countup';
import cx from 'classnames';

const useStyles = makeStyles(theme => ({  
  card: {
    borderRadius: 12,
    padding: 12,
    textAlign: 'center',
    height: '100%',
    boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
  },
  subtitle1: {
    textTransform: 'uppercase',
    fontSize: '.75rem',
    letterSpacing: 2,
    margin: '0',
  },
  h5: {
    fontSize: '2.5rem',
    fontWeight: 300,
    margin: '12px 0 24px',
  },
  loading: {
    textAlign: 'center',
    paddingTop: 16,
  },
  colorInfected: {
    color: '#ffc107',
  },
  colorRecovered: {
    color: '#4caf50',
  },
  colorDied: {
    color: '#f44336',
  },
}));

export const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();  

  return (
    (!confirmed) ?
      <p className={ classes.loading }>Loading...</p>
      :
    <Grid container spacing={ 4 }>
      <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
        <Card className={ classes.card }>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" className={ cx(classes.subtitle1, classes.colorInfected) }>Infected</Typography>
            <Typography className={ cx(classes.h5, classes.colorInfected) }>
              <CountUp start={ 0 } end={ confirmed.value } duration={ 1 } separator="," />
            </Typography>
            <Typography color="textSecondary"><small>Last updated on:<br/>{ formatDate(lastUpdate) }</small></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
        <Card className={ classes.card }>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" className={ cx(classes.subtitle1, classes.colorRecovered) }>Recovered</Typography>
            <Typography className={ cx(classes.h5, classes.colorRecovered) }>
              <CountUp start={ 0 } end={ recovered.value } duration={ 1 } separator="," />
            </Typography>
            <Typography color="textSecondary"><small>Last updated on:<br/>{ formatDate(lastUpdate) }</small></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
        <Card className={ classes.card }>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" className={ cx(classes.subtitle1, classes.colorDied) }>Died</Typography>
            <Typography className={ cx(classes.h5, classes.colorDied) }>
              <CountUp start={ 0 } end={ deaths.value } duration={ 1 } separator="," />
            </Typography>
            <Typography color="textSecondary"><small>Last updated on:<br/>{ formatDate(lastUpdate) }</small></Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}