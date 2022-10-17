// https://eth-goerli.g.alchemy.com/v2/UwleiIj3_exLYoRpJrbcMyEeJkDdKhZF

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/UwleiIj3_exLYoRpJrbcMyEeJkDdKhZF",
      accounts: ['cc591d5ab9c2ac4a5a7c4db73f14512195aca0cbd3a1d73c96695a2d693cff43']
    }
  }
};

export default config;
