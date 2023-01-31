// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LuxToken is ERC20 {
    string public _name = "LuxToken";
    string public _symbol = "LUX";
    uint256 public _totalSupply = 5000 * (10**decimals());

    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, _totalSupply);
    }
}
