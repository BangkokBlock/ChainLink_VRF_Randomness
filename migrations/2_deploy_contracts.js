var RandomNumberConsumer = artifacts.require("./RandomNumberConsumer.sol");

module.exports = function (deployer) {
    deployer.deploy(RandomNumberConsumer);
};
