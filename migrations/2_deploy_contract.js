const CryptoMeetup = artifacts.require("CryptoMeetup");

module.exports = function (deployer) {
  deployer.deploy(CryptoMeetup);
};
