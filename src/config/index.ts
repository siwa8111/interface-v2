import polygon from './polygon.json';
import dogechain from './dogechain.json';
import zktestnet from './zktestnet.json';
import { ChainId } from '@uniswap/sdk';
const configs: any = {
  /**[ChainId.MATIC]: polygon,
  [ChainId.DOGECHAIN]: dogechain,*/
  [ChainId.ZKTESTNET]: zktestnet,
};

export const getConfig = (network: ChainId | undefined) => {
  return configs[ChainId.ZKTESTNET];
};
