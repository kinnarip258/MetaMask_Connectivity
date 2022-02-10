const supportedChains = [
    {
      name: "Binance Smart Chain MainNet",
      chain_id: "0x38",
      network_id: 56,
      rpc_url: "https://bsc-dataseed.binance.org/",
      currency_symbol: "BNB",
    },
    {
        name: "Avalanche MainNet",
        chain_id: "0xa86a",
        network_id: 43114,
        rpc_url: "https://api.avax.network/ext/bc/C/rpc",
        currency_symbol: "AVAX",
    },
    {
        name: "xDai MainNet",
        chain_id: "0x64",
        network_id: 100,
        rpc_url: "https://rpc.xdaichain.com/",
        currency_symbol: "xDai",
    },
    {
        name: "Ethereum Mainnet",
        chain_id: "0x1",
        network_id: 1,
        rpc_url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency_symbol: "ETH",
    },
    {
        name: "Ropsten Test Network",
        chain_id: "0x3",
        network_id: 3,
        rpc_url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency_symbol: "ETH",
    },
    {
        name: "Rinkeby Test Network",
        chain_id: "0x4",
        network_id: 4,
        rpc_url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency_symbol: "ETH",
    },
    {
        name: "Goerli Test Network",
        chain_id: "0x5",
        network_id: 5,
        rpc_url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency_symbol: "ETH",
    },
    {
        name: "Kovan Test Network",
        chain_id: "0x2a",
        network_id: 42,
        rpc_url: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency_symbol: "ETH",
    },
]

export default supportedChains;