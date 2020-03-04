const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory } = require("react-router");

const TodoApp = require('TodoApp');
// load Foundation
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
<TodoApp/>,
document.getElementById("app"));

//webpack -w se queda escuchando cambios
