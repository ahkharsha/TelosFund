require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.sepolia.mantle.xyz";
const NEXT_PUBLIC_PRIVATE_KEY =
  "fe22e08c4c07b0542221677f3af0d9450525cef20a15b2b65754262375fe8e03";
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "mantle",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
