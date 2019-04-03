"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Test =
/*#__PURE__*/
function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, [{
    key: "hello",
    value: function hello() {
      var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
      console.log("hello, world", height);
      console.log("hello, template ".concat(height));
    }
  }]);

  return Test;
}();

var x = new Test();
x.hello();

var fsPromises = require("fs").promises;

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var _ref2, content;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.resolve({
            aaa: 123
          });

        case 2:
          _ref2 = _context.sent;
          content = _ref2.aaa;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZXN0IiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsIngiLCJoZWxsbyIsImZzUHJvbWlzZXMiLCJyZXF1aXJlIiwicHJvbWlzZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFhYSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixrQkFBYztBQUFBO0FBQUU7Ozs7NEJBRUc7QUFBQSxVQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFDakJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJGLE1BQTVCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUiwyQkFBK0JGLE1BQS9CO0FBQ0Q7Ozs7OztBQUVILElBQU1HLENBQUMsR0FBRyxJQUFJSixJQUFKLEVBQVY7QUFDQUksQ0FBQyxDQUFDQyxLQUFGOztBQUNBLElBQU1DLFVBQVUsR0FBR0MsT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUFjQyxRQUFqQzs7QUFDQTtBQUFBO0FBQUEsd0JBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ2dDQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFBQ0MsWUFBQUEsR0FBRyxFQUFFO0FBQU4sV0FBaEIsQ0FEaEM7O0FBQUE7QUFBQTtBQUNlQyxVQUFBQSxPQURmLFNBQ1VELEdBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRlc3Qge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaGVsbG8oaGVpZ2h0ID0gNTApIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvLCB3b3JsZFwiLCBoZWlnaHQpO1xuICAgIGNvbnNvbGUubG9nKGBoZWxsbywgdGVtcGxhdGUgJHtoZWlnaHR9YCk7XG4gIH1cbn1cbmNvbnN0IHggPSBuZXcgVGVzdCgpO1xueC5oZWxsbygpO1xuY29uc3QgZnNQcm9taXNlcyA9IHJlcXVpcmUoXCJmc1wiKS5wcm9taXNlcztcbihhc3luYygpID0+IHtcbiAgICBjb25zdCB7YWFhOiBjb250ZW50fSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZSh7YWFhOiAxMjN9KTtcbn0pKCk7XG4iXX0=