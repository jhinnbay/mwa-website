const { ethers, upgrades } = require("hardhat");

async function main() {
  const BookStorageDAO = await ethers.getContractFactory("BookStorageDAO");
  console.log("Deploying BookStorageDAO...");

  // Deploying the contract
  const bookStorageDAO = await BookStorageDAO.deploy();
  await bookStorageDAO.deployed();

  console.log("BookStorageDAO deployed to:", bookStorageDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
