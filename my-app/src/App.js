import abi from "./contract/BuyChai.json"
import {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import Memos from "./components/Memos";
import Buy from "./components/Buy";

import './index.css';

export default function App() {
  const [state, setState] = useState({
    provider : null,
    signer : null,
    contract : null
  })
  const [account, setAccount] = useState("None")
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x7752C0AA728fdDa33F5807293779C6D3f707ccD5"
      const contractAbi = abi.abi
      try{
        const {ethereum} = window

        if(ethereum){
        const account = await ethereum.request({method:"eth_requestAccounts",})

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, contractAbi, signer)
        setAccount(account)
        setState({provider, signer, contract})
      }
      else{
        alert("Please install Metamask")
      }
    }
      catch(error){
        console.log(error)
      }
    }
    connectWallet()
  } )
  console.log(state)
  return (
    <div>
      <p>Connected Account - {account}</p>
      <div className="App"></div>
      <Buy state={state} />
      <Memos state={state}/>
    </div>
  );
}