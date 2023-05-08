const Redapptoken = artifacts.require('Redapptoken');

module.exports = function (deployer) {
    deployer.deploy(Redapptoken);
};
