pragma solidity ^0.4.7;
contract SimpleStorage {
  string public storedData;

  function SimpleStorage(string initialValue) public {
    storedData = initialValue;
  }

  function set(string x) public {
    storedData = x;
  }

  function get() public view returns (string retVal) {
    return storedData;
  }

}