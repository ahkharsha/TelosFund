import { ethers } from "ethers";
import Web3Modal from "web3modal";
import crowdFunding from "./CrowdFunding.json";

export const CrowdFundingAddress = "0x73641118e93Be1Ed8cE170E17E564Fa76b43a8fb";

export const CrowdFundingABI = crowdFunding.abi;

// NETWORK
const networks = {
  telos_mainnet: {
    chainId: `0x${Number(40).toString(16)}`,
    chainName: "Telos EVM Mainnet",
    nativeCurrency: {
      name: "TLOS",
      symbol: "TLOS",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.telos.net"],
    blockExplorerUrls: ["https://www.teloscan.io/"],
  },
  telos_testnet: {
    chainId: `0x${Number(41).toString(16)}`,
    chainName: "Telos EVM Testnet",
    nativeCurrency: {
      name: "TLOS",
      symbol: "TLOS",
      decimals: 18,
    },
    rpcUrls: ["https://testnet.telos.net/evm"],
    blockExplorerUrls: ["https://testnet.teloscan.io/"],
  },
  localhost: {
    chainId: `0x${Number(5003).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "TLOS",
      symbol: "TLOS",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://testnet.teloscan.io/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "telos_testnet";
  await changeNetwork({ networkName });
};
