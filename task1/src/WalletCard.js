import React, {useEffect, useState} from 'react'
import {ethers} from "ethers";
import supportedChains from './supportedChains';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


const WalletCard = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [networkDetails, setNetworkDetails] = useState([])
    
    const connectWalletHandler = async () => {
        if(window.ethereum){
            const ID = window.ethereum.chainId;
            const Network = supportedChains.find((network) => network.chain_id === ID);
            setNetworkDetails(Network);
            
            if(ID === "0x1"){
                window.ethereum.request({method: 'eth_requestAccounts'})
                .then(res => {
                    console.log("res",res)
                    accountChangedHandler(res[0]);
                    toast.success(`Connected Successfully! Using ${Network.name} Network`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                });
            }
            else{
                toast.error(`Invalid Network! Using ${Network.name} Network`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                setDefaultAccount(null);
                setConnButtonText("Connect Wallet");
            }
        }
        else{
            setErrorMessage("Install Metamask");
            toast.error("Install Metamask!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());
        setConnButtonText("Wallet Connected");  
    }
    const getUserBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
    }

    const chainChangedHandler = (chainId) => {
        const Network = supportedChains.find((network) => network.chain_id === chainId);
        setNetworkDetails(Network);
        if(chainId !== "0x1"){
            toast.error(`Invalid Network! Using ${Network.name} Network`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            setDefaultAccount(null);
            setConnButtonText("Connect Wallet");
        }
        else{
            connectWalletHandler();
        }
    }
 
   useEffect(() => { 
        window.ethereum.on('chainChanged', chainChangedHandler)
        window.ethereum.on('accountsChanged', accountChangedHandler);
   },[])

  return (
    <div>
    <h1>Connection to Metamask using window.ethereum methods: </h1>
        
        <div>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            {
                defaultAccount === null ? null : (
                    <div>
                        <h3>Address: {defaultAccount}</h3>
                        <h3>Balance: {userBalance}</h3>
                        <h3>Network Name: {networkDetails && networkDetails.name}</h3>
                        <h3>Network Currency Symbol: {networkDetails && networkDetails.currency_symbol}</h3>
                    </div>
                )
            }
        </div>
        {errorMessage}
    </div>
  )
}

export default WalletCard