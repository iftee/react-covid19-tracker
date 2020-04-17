import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, FormHelperText, makeStyles } from '@material-ui/core';
import { fetchCountries } from '../../api';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
    minWidth: 248,
  },
  formHelperText: {
    textAlign: 'center',
  },
  selectWrapper: {
    '&>div': {
      paddingRight: '0 !important',
    },
  },
}));

export const CountryPicker = ({ handleCountryChange }) => {
  const classes = useStyles();
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountryAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchCountryAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={classes.formControl}>
      <Select
        defaultValue="Worldwide"
        onChange={ event => {
          let selectedCountry = event.target.value;
          if(event.target.value === 'Worldwide') {
            selectedCountry = '';
          }
          handleCountryChange(selectedCountry);
        } }
        inputProps={ { 'aria-label': 'Without label' } }
        className={ classes.selectWrapper }
      >
        <MenuItem value="Worldwide">Worldwide</MenuItem>
        { fetchedCountries.map((country, iterator) => <MenuItem key={ iterator } value={ country }>{ country }</MenuItem>) }
      </Select>
      <FormHelperText className={ classes.formHelperText }>Select Country</FormHelperText>
    </FormControl>
  );
}