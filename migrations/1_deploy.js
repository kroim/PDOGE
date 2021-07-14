// let IterableMapping = artifacts.require("IterableMapping");
let PDOGEDividendTracker = artifacts.require("PDOGEDividendTracker");
let PDOGE = artifacts.require("PDOGE");

// module.exports = async function(deployer) {
//     await deployer.deploy(IterableMapping);
//     await deployer.link(IterableMapping, [PDOGEDividendTracker, PDGOE]);
//     await deployer.deploy(PDOGEDividendTracker);
//     await deployer.deploy(PDGOE);
// }

module.exports = async function(deployer) {
    // IterableMapping.address = "0x8dcb4E25AA5856116CB28848e14cb85F9A5D3020";
    // await deployer.recordDeployed(IterableMapping, "0x8dcb4E25AA5856116CB28848e14cb85F9A5D3020");
    // await deployer.link(IterableMapping, PDGOE);
    await deployer.deploy(PDOGEDividendTracker);
    await deployer.deploy(PDOGE);
}