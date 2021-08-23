"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuestos["default"](100000, 2000);
var cliente1 = new _clientes["default"]('Juan', impuesto1);
console.log(cliente1.calcularImpuesto());