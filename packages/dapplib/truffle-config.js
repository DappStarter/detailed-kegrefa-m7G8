require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember hole guess nasty flower senior'; 
let testAccounts = [
"0x809b3bab013de8f342fd5a03d69da9c7823872954f0650bc7761009c89ea042e",
"0x4655dc9bd18475caf23d70e6c71ca467c99b6c7799fc72d16eba2325c49424cf",
"0x8826357bc5c6b15d477cb41bb08dbb22a768a095d1059fea6b13ab020fb7ee63",
"0xabceb354524f9801cb46fe7ff6a71feaa7b799a03d67244d366a833ec031a055",
"0x32bf4a98e272950e4623b4c9949ec0e03a8aeeecadfae7fbe2a0362714da8452",
"0xe2c48766238881959851a51b1907df4553c798df509dfa11477d533656a699db",
"0x918e997c30aacd365a76f4f64d9da0467251c981120057e8da9b942c99675ca0",
"0xe3daf36318a19fc3056c41761583aa4834c54385b559eea152a487c5bafe92c6",
"0xf7b10b6b0424af0fd8dff9071a43a5612f3303ba1a512950842d24e12fabdbd0",
"0xeb98dc88e8995ccac63ac86c58f862d96c91b76cb803b01db99088e48905c675"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


