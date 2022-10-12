const addMaticToMetamask: () => void = () => {
  const { ethereum } = window as any;
  if (ethereum) {
    ethereum
      .request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x57A',
            chainName: 'ZKEVM Testnet',
            rpcUrls: ['https://public.zkevm-test.net:2083'],
            iconUrls: [
              'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
            ],
            blockExplorerUrls: ['https://public.zkevm-test.net:8443'],
            nativeCurrency: {
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
          },
        ], // you must have access to the specified account
      })
      .catch((error: any) => {
        if (error.code === 4001) {
          console.log('We can encrypt anything without the key.');
        } else {
          console.error(error);
        }
      });
  }
};

export default addMaticToMetamask;
