const ImgStore = artifacts.require("ImgStore");

module.exports = function(deployer) {
  deployer.deploy(ImgStore);
};
