// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract TreasuryManagement is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    AggregatorV3Interface internal priceFeed;
    address public admin;
    uint256 public funds;
    bytes32 public jobId;
    uint256 public fee;

    mapping(bytes32 => bool) public fulfilledRequests;
    event FundsDeposited(uint256 amount);
    event FundsWithdrawn(uint256 amount);
    event PriceRequested();
    event ExternalDataRequested(string url, string path);
    event ExternalDataFulfilled(bytes32 requestId, string data);

    constructor(address _priceFeed, address _linkToken, bytes32 _jobId, uint256 _fee) {
        priceFeed = AggregatorV3Interface(_priceFeed);
        _setChainlinkToken(_linkToken);
        jobId = _jobId;
        fee = _fee;
        admin = msg.sender;
    }

    function depositFunds() public payable onlyAdmin {
        funds += msg.value;
        emit FundsDeposited(msg.value);
    }

    function withdrawFunds(uint _amount) public onlyAdmin {
        require(_amount <= funds, "Not enough funds");
        payable(admin).transfer(_amount);
        funds -= _amount;
        emit FundsWithdrawn(_amount);
    }

    function getLatestPrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }

    function requestExternalData(string memory _url, string memory _path) public onlyAdmin {
        Chainlink.Request memory req = _buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        bytes32 requestId = _sendChainlinkRequest(req, fee);
        fulfilledRequests[requestId] = false;
        emit ExternalDataRequested(_url, _path);
    }

    function fulfill(bytes32 _requestId, bytes32 _data) public recordChainlinkFulfillment(_requestId) {
        require(fulfilledRequests[_requestId] == false, "Request already fulfilled");
        fulfilledRequests[_requestId] = true;

        string memory dataString = bytes32ToString(_data);
        emit ExternalDataFulfilled(_requestId, dataString);
    }

    function bytes32ToString(bytes32 _bytes32) internal pure returns (string memory) {
        uint8 i = 0;
        while(i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
}
