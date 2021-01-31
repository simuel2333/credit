import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3'
import Meme from '../abis/Meme.json'
const IpfsHttpClient = require('ipfs-http-client')
const ipfs = IpfsHttpClient('http://localhost:5001')

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  // get the account
  // get the network
  // get smart contract
  // --->ABI Meme.abi
  // ---> Adress networkData.address
  // get meme hash

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(accounts)
    const networkId = await web3.eth.net.getId()
    const networkData = Meme.networks[networkId]
    if (networkData) {
      const abi = Meme.abi
      const address = networkData.address
      //Fetch contract
      const contract = web3.eth.Contract(abi, address)
      this.setState({ contract: contract })
      const memeHash = await contract.methods.get().call()
      this.setState({memeHash})
    }
    else {
      window.alert("smart not deployed")
    }

  }
  constructor(props) {
    super(props);
    this.state = {
      accont: '',
      buffer: null,
      contract: null,
      memeHash: "",
    };
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert("Please use metamask!")
    }
  }
  captureFile = (event) => {
    event.preventDefault();
    console.log('file captured...');
    //process file for IFPS
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
    }
    console.log(event.target.files[0])
  }
  // Example : QmenpAnWtTCpP6f8FQkTYkSH1Gx4PTaNwbFus3mqZmkxx7
  // Example url : http:127.0.0.1:8080/ipfs/QmenpAnWtTCpP6f8FQkTYkSH1Gx4PTaNwbFus3mqZmkxx7
  onSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting the form...")
    let result = await ipfs.add(this.state.buffer);
    console.log(result)
    // Step: store file on blockchain
    this.state.contract.methods.set(result.path).send({from: this.state.account}).once('confirmation', async ()=>{
      const memeHash = await this.state.contract.methods.get().call()
      this.setState({memeHash})
    })
    
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meme of the Day
          </a>
          <ul className="navbar-nav px-2">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">{this.state.account}</small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`http://127.0.0.1:8080/ipfs/${this.state.memeHash}`} className="App-logo" alt="logo" />
                </a>
                <p>&nbsp;</p>
                <h2>Change Meme</h2>
                <form onSubmit={this.onSubmit}>
                  <input type="file" onChange={this.captureFile} />
                  <input type="submit" />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
