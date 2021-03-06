import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
    
  },
  media: {
    height: 140,
  },
});

const Country = (props) => {
  const history = useHistory();
  const { flag, name, population, region, capital, darkState } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={flag} title='country' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography gutterBottom variant='subtitle2' component='h3'>
            Popultation: {population}
          </Typography>

          <Typography gutterBottom variant='subtitle2' component='h5'>
            Region: {region}
          </Typography>

          {capital && (
            <Typography gutterBottom variant='subtitle2' component='h3'>
              Capital: {capital}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          color={!darkState ? 'primary' : 'secondary'}
          onClick={() => history.push(`/country/${name}`)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Country;
