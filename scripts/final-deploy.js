const hre = require("hardhat");

async function main() {
    const BuyChai = await hre.ethers.getContractFactory("BuyChai");
    const contract = await BuyChai.deploy();
  
    await contract.deployed();
    console.log("Address of contract:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });