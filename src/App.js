import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Countries from './components/Countries/Countries';
import CountryDetatails from './components/CountryDetail/CountryDetatails';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header handleThemeChange={handleThemeChange} darkState={darkState} />
        <Switch>
          {/* <Route exact path='/'>
            <Countries darkState={darkState} />
          </Route> */}
          <Route
            exact
            path='/'
            render={(props) => <Countries {...props} darkState={darkState} />}
          />

          <Route exact path='/country/:name'>
            <CountryDetatails />
          </Route>

          <Route exact path='*'>
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
