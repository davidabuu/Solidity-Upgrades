const { deployments,network, getNamedAccounts } = require("hardhat");

module.exports = async () => {
  const { deploy,  log } = deployments;
  const { deployer } = await getNamedAccounts();
  log('-----------------------')
  const box = await deploy('Box', {
    from:deployer,
    args: [],
    log:true,
    waitConfirmations: network.config.blockConfirmations || 1,
    proxy:{
      proxyContract: "OpenZeppelinTransparentProxy",
      viaAdminContract: {
        name:"BoxProxyAdmin",
        artifact: "BoxProxyAdmin"
      }
    }
  })
  log('----------------------------------------')
  log('Contract Deployed');
};
