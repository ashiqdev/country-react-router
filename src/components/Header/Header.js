import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const {darkState, handleThemeChange} = props;
  const history = useHistory();
  const classes = useStyles();

  return (

      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <LanguageIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Button
              onClick={() => history.push('/')}
              style={{ color: 'white' }}
              variant='text'
            >
              Countries
            </Button>
          </Typography>
          <Button color='inherit'>
          <Switch checked={darkState} onChange={handleThemeChange} />
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
