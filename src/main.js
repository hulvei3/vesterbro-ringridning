var React = require('react');
var App = require('babel!./app.jsx');

var fb = require('./facebook');

React.render(React.createElement(App), document.body, fb.init);

global.require = require;
