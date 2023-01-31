// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EthSwap {
    ERC20 public token;

    uint256 public rate = 10000;

    constructor(ERC20 _token) {
        token = _token;
    }

    function getToken() public view returns (address) {
        return address(token);
    }

    function getSwapBalance() public view returns (uint256) {
        return token.balanceOf(msg.sender);
    }

    function getThisAddress() public view returns (address) {
        return address(this);
    }

    function getMsgSender() public view returns (address) {
        return msg.sender;
    }

    // function getTokenOwner() public view returns (address) {
    //     return token._owner();
    // }

    function buyToken() public payable {
        uint256 tokenAmount = msg.value * rate;
        require(token.balanceOf(address(this)) > tokenAmount, "error [1]");
        token.transfer(msg.sender, tokenAmount);
    }

    function sellToken(uint256 _amount) public payable {
        require(token.balanceOf(msg.sender) > _amount);
        uint256 etherAmount = _amount / rate;

        require(address(this).balance > etherAmount);
        token.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
    }
}
