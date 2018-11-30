
var React = require('react'); //required for webpack to understand
var ReactDOM = require('react-dom'); //required for webpack to understand
var WelcomeMain = require('WelcomeMain');

ReactDOM.render(
    <WelcomeMain />,
    document.getElementById('app')
);