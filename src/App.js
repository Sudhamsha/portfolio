import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import './App.css';

class App extends Component {
  render() {
    const style     = {margin: 10};
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
                <Card className="home-card">
                <CardTitle title="About me" />
                <CardText className="home-content">
                    <div>
                        <p>Experienced Senior Software Engineer with a demonstrated history of working in the information technology and services industry.</p>
                        <p>Skilled in PHP, MySQL, AngularJS, MongoDB, NodeJS, Symfony, CodeIgniter, and Content Management Systems (CMS).</p>
                        <p>Strong professional graduated from Dublin Business School.</p>
                        <p><strong>Moving into JS Full Stack development - MERN, MEAN</strong></p>
                    </div>
                    <div>
                        <RaisedButton href={'mailto:sudhamshareddy@gmail.com'} label="Contact" />
                    </div>


                </CardText>
            </Card>

            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
