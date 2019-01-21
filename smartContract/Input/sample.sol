pragma solidity ^0.5.2;

contract SampleContract {
    string name ;
    uint256 age;

    function getAge() public view returns (uint256) {
        return age;
    }
    function getName() public pure returns ( string memory) {
        string memory actualName = 'tungduong';
        return actualName;
    }
    function setAge(uint256 age1, uint age2) public {
        age = age1 - age2;
    }
}



