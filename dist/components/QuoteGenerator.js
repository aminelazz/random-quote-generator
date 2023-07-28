"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function QuoteGenerator() {
  const [quote, setQuote] = (0, _react.useState)("");
  const [author, setAuthor] = (0, _react.useState)("");
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random?maxLength=110", {
        method: "GET"
      });
      const data = await response.json();
      const {
        content,
        author
      } = data[0];
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  (0, _react.useEffect)(() => {
    fetchQuote();
  }, []);
  const ButtonContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: end;\n    "])));
  const Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        padding-inline: 20px;\n        padding-block: 14px;\n        margin-inline: 40px;\n        background-color: #eeddc7;\n        border: 0;\n        border-radius: 8px;\n        &:hover {\n            background-color: #ddbc91;\n            cursor: pointer;\n        }\n    "])));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "quote-container"
  }, quote ? /*#__PURE__*/_react.default.createElement("blockquote", null, /*#__PURE__*/_react.default.createElement("p", null, quote), /*#__PURE__*/_react.default.createElement("cite", null, author)) : /*#__PURE__*/_react.default.createElement("p", null, "Loading quote..."), /*#__PURE__*/_react.default.createElement(ButtonContainer, null, /*#__PURE__*/_react.default.createElement(Button, {
    className: "regenerate",
    onClick: fetchQuote
  }, "Regenerate")));
}
var _default = QuoteGenerator;
exports.default = _default;