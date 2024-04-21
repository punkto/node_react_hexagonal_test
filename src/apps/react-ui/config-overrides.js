const { aliasWebpack } = require("react-app-alias-ex");

const aliasMap = {
  "@controllers": "../../controllers",
  "@data_model": "../../data_model",
};

module.exports = aliasWebpack({
  alias: aliasMap,
});
