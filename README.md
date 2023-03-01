# Hardhat events logs

This project demonstrates a basic Hardhat setup to listen to a simple contract with emitted events.

[Sample contract](https://goerli.etherscan.io/address/0x579256fac03b767C6fd1979e5F651E636cDC406E#events)


```shell
# gas report on test
REPORT_GAS=true npx hardhat test
# view hardhat local network with sample 20 accounts
npx hardhat node
# deploy contract
npx hardhat run scripts/deploy.ts
# sample etherscan contract code
https://goerli.etherscan.io/address/0x579256fac03b767C6fd1979e5F651E636cDC406E#events
```
