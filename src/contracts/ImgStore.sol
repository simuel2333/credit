pragma solidity >=0.4.21 <0.6.0;

contract ImgStore {
    string imgHash;

    // Write FUnction
    function set(string memory _imgHash) public {
        imgHash = _imgHash;
    }
    // Read Function
    function get() public view returns (string memory) {
        return imgHash;
    }
}
