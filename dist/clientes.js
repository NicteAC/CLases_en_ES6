"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(cliente, impuestos) {
    _classCallCheck(this, Cliente);

    this._cliente = function () {
      return cliente;
    };

    this._impuestos = function () {
      return impuestos;
    };
  }

  _createClass(Cliente, [{
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return "El impuesto total a pagar es: ".concat((this._impuestos()._monto_bruto_anual() - this._impuestos()._deducciones()) * 0.21);
    }
  }, {
    key: "cliente",
    get: function get() {
      return this._cliente();
    },
    set: function set(cliente_nuevo) {
      return this._cliente = function () {
        return cliente_nuevo;
      };
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;