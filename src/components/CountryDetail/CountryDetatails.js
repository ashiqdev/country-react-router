import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Container, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CountryDetatails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#9013FE');
  const {
    name: countryName,
    capital,
    region,
    subregion,
    population,
    currencies,
    flag,
  } = country;

  useEffect(() => {
    const loadCountry = async () => {
      setLoading(true);
      const url = ` https://restcountries.eu/rest/v2/name/${name}`;
      const res = await axios.get(url);
      setCountry(res.data[0]);
    };

    loadCountry()
      .then(() => setLoading(false))
      .catch((e) => setLoading(false));
  }, [name]);

  return (
    <Container maxWidth='sm'>
      <Box m={12} />

      {loading ? (
        <GridLoader loading={loading} color={color} css={override} size={15} />
      ) : (
        <>
          {country.name && (
            <>
              <Typography variant='h4' component='h2'>
                {countryName}
                <Box m={4} />
              </Typography>
              <Paper
                elevation={3}
                style={{
                  backgroundImage: ` linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.4)), url(${flag})`,
                  backgroundPosition: 'center',
                  color: '#2c3e50',
                }}
              >
                <Box p={4} fontWeight='fontWeightMedium' fontSize='h6.fontSize'>
                  <Typography variant='inherit' component='p'>
                    Name:{countryName}
                  </Typography>
                  <Typography variant='inherit' component='p'>
                    Capital:{capital}
                  </Typography>
                  <Typography variant='inherit' component='p'>
                    Region:{region}
                  </Typography>
                  <Typography variant='inherit' component='p'>
                    Subregion:{subregion}
                  </Typography>
                  <Typography variant='inherit' component='p'>
                    Population:{population}
                  </Typography>
                  <Typography variant='inherit' component='p'>
                    Currency Name: {currencies && currencies[0]?.name}
                  </Typography>
                  <Typography variant='inherit' component='p'>
                    Currency Name: {currencies && currencies[0]?.code}
                  </Typography>
                  <Typography variant='inherit' component='p'>
                    Currency Name: {currencies && currencies[0]?.symbol}
                  </Typography>
                </Box>
              </Paper>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default CountryDetatails;
