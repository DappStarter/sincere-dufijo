require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note mushroom proud harvest fat slot gasp'; 
let testAccounts = [
"0x3de6939b89d1b3c81626414ef121fa8fdac1f837d16411972e55aa1b316eba2b",
"0xb759d899d699971302cd462ef84a3903533df5ff5ab9d9005387ef15b6989cdc",
"0x30882d705493bc30072938e9abde2e6331177eaaef319c64c4ccebbbe2111e6e",
"0x64b288b507a35ed4d141bd818ecfaab49700a07da7cd2debac2889490f18f48c",
"0x39ca47bf70f5f218571ffc2a3e7db82c8dabc2d1530e1cca7e5d370635194eee",
"0x6de546a5833f1b681445a4b4a6ede5011fb4350026f5bd1266cd25abb5c98d24",
"0xc7003bc57146377b70b01cae37f0de71087edb82859382898fd72a8b6957e2de",
"0x6214de7c9ed54bcffc925439904678faf95faefcbef5b8069e0e574168d475ff",
"0xbeb89eb25f9f21411d116775bdca15df9ec5e9903375c689fac3ec943756fcc5",
"0x6c12c0b3511c848aaabc97718fd4c533492ca0dfab47baa84deb551f5157664f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
