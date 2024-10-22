// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;  //Do not change the solidity version as it negativly impacts submission grading

import "hardhat/console.sol";
import "./ExampleExternalContract.sol";

contract Staker {

  // Instance of the ExampleExternalContract
  ExampleExternalContract public exampleExternalContract;

  // Mapping to track individual balances
  mapping(address => uint256) public balances;

  // Threshold for staking
  uint256 public constant threshold = 1 ether;

  // Deadline for staking
  uint256 public deadline = block.timestamp + 3 minutes;

  // Flag to indicate if withdrawals are open
  bool public openForWithdraw = false;

  // Event to log staking activity
  event Stake(address indexed staker, uint256 amount);

  // Constructor to initialize the ExampleExternalContract
  constructor(address exampleExternalContractAddress) {
      exampleExternalContract = ExampleExternalContract(exampleExternalContractAddress);
  }

  // Function to allow users to stake Ether
  function stake() public payable {
      require(block.timestamp < deadline, "Staking period is over");
      balances[msg.sender] += msg.value;
      emit Stake(msg.sender, msg.value);
  }

  // Modifier to check if the ExampleExternalContract is not completed
  modifier notCompleted() {
      require(!exampleExternalContract.completed(), "Contract already completed");
      _;
  }

  // Function to execute the contract logic after the deadline
  function execute() public notCompleted {
      require(block.timestamp >= deadline, "Deadline not reached");
      if (address(this).balance >= threshold) {
          exampleExternalContract.complete{value: address(this).balance}();
      } else {
          openForWithdraw = true;
      }
  }

  // Function to allow users to withdraw their staked Ether if the threshold is not met
  function withdraw() public notCompleted {
      require(openForWithdraw, "Withdrawals are not open");
      uint256 balance = balances[msg.sender];
      require(balance > 0, "No balance to withdraw");
      balances[msg.sender] = 0;
      (bool success, ) = msg.sender.call{value: balance}("");
      require(success, "Withdraw failed");
  }

  // View function to return the time left before the deadline
  function timeLeft() public view returns (uint256) {
      if (block.timestamp >= deadline) {
          return 0;
      } else {
          return deadline - block.timestamp;
      }
  }

  // Special function to receive Ether and call the stake function
  receive() external payable {
      stake();
  }
}
