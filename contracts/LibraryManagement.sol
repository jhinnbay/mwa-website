// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract LibraryManagement is AutomationCompatibleInterface, ChainlinkClient {
    using Chainlink for Chainlink.Request;

    struct Resource {
        string ipfsHash;
        string metadata;
        bool approved;
        uint256 timestamp;
    }

    mapping(uint => Resource) public resources;
    uint public resourceCount;
    address public admin;
    uint256 public approvalTimeframe;

    event ResourceAdded(uint resourceId, string ipfsHash, string metadata);
    event ResourceApproved(uint resourceId);
    event ResourceRemoved(uint resourceId);

    constructor(uint256 _approvalTimeframe) {
        _setPublicChainlinkToken();
        admin = msg.sender;
        approvalTimeframe = _approvalTimeframe;
    }

    function addResource(string memory _ipfsHash, string memory _metadata) public {
        resources[resourceCount] = Resource(_ipfsHash, _metadata, false, block.timestamp);
        emit ResourceAdded(resourceCount, _ipfsHash, _metadata);
        resourceCount++;
    }

    function approveResource(uint _resourceId) public onlyAdmin {
        require(!resources[_resourceId].approved, "Resource already approved");
        resources[_resourceId].approved = true;
        emit ResourceApproved(_resourceId);
    }

    function checkUpkeep(bytes calldata) external view override returns (bool upkeepNeeded, bytes memory) {
        upkeepNeeded = (block.timestamp >= nextUpkeepTime());
    }

    function performUpkeep(bytes calldata) external override {
        if (block.timestamp >= nextUpkeepTime()) {
            for (uint i = 0; i < resourceCount; i++) {
                if (!resources[i].approved && (block.timestamp - resources[i].timestamp > approvalTimeframe)) {
                    removeResource(i);
                }
            }
        }
    }

    function removeResource(uint _resourceId) internal {
        delete resources[_resourceId];
        emit ResourceRemoved(_resourceId);
    }

    function nextUpkeepTime() public view returns (uint256) {
        return (block.timestamp - (block.timestamp % 1 weeks)) + 1 weeks;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
}
