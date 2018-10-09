import React, { Component } from 'react';
import './App.css';
import MiniDrawer from './layout/side-nav.layout';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: purple
  }
});

class App extends Component {

  componentDidMount() {
    
  };

  render() {

    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <MiniDrawer></MiniDrawer>
        </MuiThemeProvider>
      </div>
    );
    
  }
}

export default App;
