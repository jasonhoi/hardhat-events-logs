import { ethers } from "hardhat";

async function main() {
  const SimpleContract = await ethers.getContractFactory("SimpleStorage");
  const simpleContract = await SimpleContract.deploy();
  await simpleContract.deployed();
  console.log("contract address", simpleContract.address);

  const transactionResponse = await simpleContract.store(12321);
  const transactionRecipt = await transactionResponse.wait();
  // console.log(transactionRecipt);
  // console.log(transactionRecipt.events[0].args.oldNumber.toString());
  // console.log(transactionRecipt.events[0].args.newNumber.toString());
  // console.log(transactionRecipt.events[0].args.addedNumber.toString());
  // console.log(transactionRecipt.events[0].args.sender);
  console.log(transactionRecipt.events[0].args);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
