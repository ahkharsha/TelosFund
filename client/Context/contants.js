import { ethers } from "ethers";
import Web3Modal from "web3modal";
import crowdFunding from "./CrowdFunding.json";

export const CrowdFundingAddress = "0xF859e215A276EC632Fb46DCca4EbccF99C8993D2";

export const CrowdFundingABI = crowdFunding.abi;

//NETWORK
const networks = {
  flow_mainnet: {
    chainId: `0x${Number(747).toString(16)}`,
    chainName: "Flow Mainnet",
    nativeCurrency: {
      name: "FLOW",
      symbol: "FLOW",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.evm.nodes.onflow.org/"],
    blockExplorerUrls: ["https://evm.flowscan.io/"],
  },
  flow_testnet: {
    chainId: `0x${Number(545).toString(16)}`,
    chainName: "Flow Testnet",
    nativeCurrency: {
      name: "FLOW",
      symbol: "FLOW",
      decimals: 18,
    },
    rpcUrls: ["https://testnet.evm.nodes.onflow.org/"],
    blockExplorerUrls: ["https://evm-testnet.flowscan.io/"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "FLOW",
      symbol: "FLOW",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://evm-testnet.flowscan.io/"],
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
  const networkName = "flow_testnet";
  await changeNetwork({ networkName });
};
