import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import './App.css';

class App extends Component {
  render() {
    const style = {margin: 10};
    const appBarStyle = {textAlign: 'left'};
    let overwrites = {
          "palette": {
              "primary3Color": "#757575"
          },
          "appBar": {
              "color": "#424242",
              "textColor": "#ffffff"
          }
      };
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(baseTheme, overwrites)}>
            <div className="App">
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementLeft={<Avatar
                        src="sud.jpg"
                        size={30}
                        style={style}
                    />}
                    style={appBarStyle}
                    title="Sud Reddy"
                />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <RaisedButton label="Material UI" />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
