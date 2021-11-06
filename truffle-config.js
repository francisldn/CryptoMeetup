const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {

  networks: {
    development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 8545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    },

    rinkeby: {
      timeoutBlocks: 200,
      provider: () => new HDWalletProvider(process.env.SEED_PHRASE, process.env.ALCHEMY_RINKEBY_URL),
      network_id: 4,
      skipDryRun: true,
      confirmations:2
    },
  },


  compilers: {
    solc: {
     version:'0.8.0',
     optimizer:{
       enabled:'true',
       runs: 200
     }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }

};
