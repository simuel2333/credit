import React, { Component } from 'react'
import { Card } from 'antd'
import Web3 from 'web3'
import ImgStore from '../../../abis/ImgStore.json'
const IpfsHttpClient = require('ipfs-http-client')
const ipfs = IpfsHttpClient('http://localhost:5001')


export class UploadFile extends Component {
    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }
    captureFile = (event) => {
        event.preventDefault()
        console.log("capture file...")
        console.log(event.target.files[0])
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) })
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            buffer: null,
            contract: null,
            imgHash: "",
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
    async loadBlockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        console.log(accounts)
        const networkId = await web3.eth.net.getId()
        const networkData = ImgStore.networks[networkId]
        if (networkData) {
            const abi = ImgStore.abi
            const address = networkData.address
            //Fetch contract
            const contract = web3.eth.Contract(abi, address)
            console.log(contract)
            this.setState({ contract: contract })
            const imgHash = await contract.methods.get().call()
            this.setState({ imgHash })
        }
        else {
            window.alert("smart not deployed")
        }

    }
    onSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitting the form...")
        let result = await ipfs.add(this.state.buffer);
        console.log(result)
        // Step: store file on blockchain
        this.state.contract.methods.set(result.path).send({ from: this.state.account }).once('confirmation', async () => {
            const imgHash = await this.state.contract.methods.get().call()
            this.setState({ imgHash })
        })

    }
    render() {
        return (
            <Card title="上传IPFS">
                <img src={`http://127.0.0.1:8080/ipfs/${this.state.imgHash}`} style={{ width: 320, height: 180 }} alt="logo" />
                <form onSubmit={this.onSubmit}>
                    <input type="file" onChange={this.captureFile} />
                    <input type="submit" />
                </form>
            </Card>
        )
    }
}

export default UploadFile
