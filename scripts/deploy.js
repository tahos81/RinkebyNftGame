const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Eren", "Silco", "DIO"],
        ["https://i.imgur.com/e4fT66h.jpeg",
         "https://i.imgur.com/S2pPPh5.jpeg",
         "https://i.imgur.com/8jOwokO.jpeg"],
        [100, 200, 300],
        [100, 50, 25],
        "Edward Elric",
        "https://i.imgur.com/Z94JKxo.png",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();