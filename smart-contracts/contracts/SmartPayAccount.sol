// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;
import "./SmartPay.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IERC20.sol";
import "./Counters.sol";
contract SmartPayAccount {
    // Structs
    struct Transaction{
        uint256 _transactionId;
        uint256 _amount; 
        bool _status;
        bool _active;
    } 
    using Counters for Counters.Counter;
    Counters.Counter public transactionIdTracker;
    address private ownerWallet;
    string public emailAccount;
    bool public aadharVerified;
    address public smartPayAddress;
    mapping(uint256=>Transaction) public transactions;
    // Events
    event receivedPayment(address from, address tokenAddress, uint256 amount, uint256 transactionId);
    event sentPayment(address to, address tokenAddress, uint256 amount, uint256 transactionId);

    // Storage
    constructor(address creator, string memory _email, address _smartPayAddress){
        ownerWallet=creator;
        emailAccount= _email;
        aadharVerified= false;
        smartPayAddress=_smartPayAddress;
    }

    /**
     * @dev Create a new SmartPayWallet
     * @param receiver receiver of funds
     * @param tokenAddress Address of token to be sent
     * @param amount Amount of tokens to be sent
     * @param transactionId transaction Id provided by payment links, 0 if manual transaction
     */
    function sendERC20(address receiver, address tokenAddress,uint256 amount, uint256 transactionId )external{
        require(msg.sender==ownerWallet,"Access Denied");
        SmartPay smartPay= SmartPay(smartPayAddress);
        IERC20 token= IERC20(tokenAddress);
        address selfAddress=address(this);
        uint256 allowance=token.allowance(ownerWallet,selfAddress);
        require(allowance>=amount, "please increase allowance");
        if(smartPay.accountExistance(receiver)){
            SmartPayAccount receiverContract= SmartPayAccount(receiver);
            if(transactionId!=0){
                bool _Tstatus;
                (,,_Tstatus,)=receiverContract.transactions(transactionId);
                require(!_Tstatus,"double payments");
                }
            token.transferFrom(ownerWallet,receiver,amount);
            receiverContract.transferReceived(address(this),tokenAddress,amount,transactionId);
            emit sentPayment(receiver, tokenAddress, amount, transactionId);
        }else{
            token.transferFrom(ownerWallet,receiver,amount);
            emit sentPayment(receiver, tokenAddress, amount, transactionId);
        }
    }


    function transferReceived( address from, address tokenAddress, uint256 amount, uint256 transactionId) public{
            
        SmartPay smartPay= SmartPay(smartPayAddress);
        require(smartPay.accountExistance(from));
        if(transactionId!=0){
            Transaction memory newTransaction = Transaction(
                transactionId,
                amount,
                true,
                false
            );
            transactions[transactionId]=newTransaction;
        }
        
        IERC20 token= IERC20(tokenAddress);
        token.transfer(ownerWallet,amount);
        emit receivedPayment(from, tokenAddress, amount, transactionId);
    }

    function generateTransactionId( uint256 amount) external returns(uint256 transactionId){
        require(msg.sender==ownerWallet,"Access Denied");
        uint256 tracker =transactionIdTracker.current();
        Transaction memory newTransaction = Transaction(
            tracker,
            amount,
            false,
            true
        );
        transactions[tracker]= newTransaction;
        return tracker;      
    }
    
}
