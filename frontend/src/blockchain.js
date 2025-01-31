import web3 from './web3';
import TaskContract from './contracts/TaskContract.json';

const address = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address
const abi = TaskContract.abi;

const contract = new web3.eth.Contract(abi, address);

export default contract;