// SPDX-License-Identifier: UNLICENSED
//Contract address : 0x7752C0AA728fdDa33F5807293779C6D3f707ccD5
pragma solidity ^0.8.9;

contract BuyChai {

    address payable owner;
    constructor() {
        owner = payable(msg.sender);
    }

    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memos;

    function buyChai(string memory name, string memory message) public payable {
        require(msg.value > 0, "Chai does not come for free :(");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}