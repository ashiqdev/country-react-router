import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Country from '../Country/Country';
import { Container } from '@material-ui/core';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Countries = ({ darkState }) => {
  const [countries, setCountries] = useState([]);
  const [spacing, setSpacing] = useState(2);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#9013FE');
  const classes = useStyles();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const url = 'https://restcountries.eu/rest/v2/all';
      const res = await axios.get(url);
      const data = res.data.slice(0, 27);
      setCountries(data);
    };

    loadData()
      .then(() => setLoading(false))
      .catch((e) => setLoading(false));
  }, []);

  return (
    <Container maxWidth='lg'>
      <Grid container className={classes.root} spacing={2}>
        <Box m={6} />
        <Grid item xs={12}>
          <Grid container justify='center' spacing={spacing}>
            {loading && (
              <GridLoader
                loading={loading}
                color={color}
                css={override}
                size={15}
              />
            )}
            {countries.map((country) => (
              <Grid xs={12} sm={6} lg={4} key={country.numericCode} item>
                <Country {...country} darkState={darkState} />
                <Box m={4} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Countries;
