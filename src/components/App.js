import React, { useState } from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <div style={{ height: '2000px' }}>Home</div>}
          />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path='/mobileapps'
            component={() => <div>Mobile Apps</div>}
          />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>The Revolution</div>}
          />
          <Route exact path='/about' component={() => <div>About Us</div>} />
          <Route exact path='/contact' component={() => <div>Contact</div>} />
          <Route
            exact
            path='/estimate'
            component={() => <div>Estimates</div>}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
