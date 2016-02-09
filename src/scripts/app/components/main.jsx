import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import DarkRawTheme from 'material-ui/lib/styles/raw-themes/dark-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import Avatar from 'material-ui/lib/avatar';
import Paper from 'material-ui/lib/paper';

const containerStyle = {
    textAlign: 'center',
    paddingTop: 5
};


const style = {
  height: 100,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const standardActions = [
    {
        text: 'Okay'
    }
];

const Main = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getInitialState () {
        return {muiTheme: ThemeManager.getMuiTheme(DarkRawTheme)};
    },

    getChildContext () {
        return {muiTheme: this.state.muiTheme};
    },

    componentWillMount () {
        let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
            accent1Color: Colors.deepOrange500
        });

        this.setState({muiTheme: newMuiTheme});
    },

    _handleTouchTap () {
        this.setState({open: true});
    },

    render () {
        return (
            <div style={containerStyle}>
            <img src="images/christoffee.png" />
                <h1>christoffee</h1>
                 <Paper style={style} zDepth={1} rounded={false}/>
                 <Paper style={style} zDepth={1} rounded={false}/>
                 <Paper style={style} zDepth={1} rounded={false}/>
                 <Paper style={style} zDepth={1} rounded={false}/>
            </div>
        );
    }
});

export default Main;
