import React, { useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme, CssBaseline, Container, Grid, Card, CardContent, makeStyles } from '@material-ui/core';
import { Cards, Chart, CountryPicker, AppHeader, AppFooter, BackToTop } from './components';
import { fetchData } from './api';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 12,
    padding: 12,
    textAlign: 'center',
    height: '100%',
    boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
  },
  firstItem: {
    marginTop: 0,
  },
}));

export const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchAPI = async country => {
      setData(await fetchData(country));
      setCountry(country);
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async country => {
    setData(await fetchData(country));
    setCountry(country);
  };

  const themeObject = {
    palette: {
      type: 'dark',
      primary: red,
    },
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    },
  }
  const [theme, setTheme] = useState(themeObject);

  const toggleTheme = () => {
    if (theme.palette.type === 'dark') {      
      window.localStorage.setItem('rc19dThemePaletteType', 'light');
      const updatedTheme = {
        ...theme,
        palette: {
          ...theme.palette,
          type: 'light'
        }
      }
      setTheme(updatedTheme);
    } else {
      window.localStorage.setItem('rc19dThemePaletteType', 'dark'); 
      setTheme(themeObject);
    }
  }

  useEffect(() => {
    const localThemePaletteType = window.localStorage.getItem('rc19dThemePaletteType');
    if (localThemePaletteType) {
      const updatedTheme = {
        ...theme,
        palette: {
          ...theme.palette,
          type: localThemePaletteType
        }
      }
      setTheme(updatedTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const muiTheme = createMuiTheme(theme);
  let toggleThemeIcon = muiTheme.palette.type === 'light' ? 'dark' : 'light';

  const classes = useStyles();

  return(
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppHeader toggleTheme={toggleTheme} toggleThemeIcon={toggleThemeIcon} />
      <Container maxWidth="lg">
        <Grid container spacing={ 4 } className={ classes.firstItem }>
          <Grid item xs={ 12 }>
            <Card className={ classes.card}>
              <CountryPicker handleCountryChange={ handleCountryChange }/>
            </Card>
          </Grid>
        </Grid>        
        <Cards data={ data } />        
        <Grid container spacing={ 4 }>
          <Grid item xs={ 12 }>
            <Card className={ classes.card}>
              <CardContent>
                <Chart data={ data } country={ country } />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
      <AppFooter />
    </MuiThemeProvider>      
  );

};