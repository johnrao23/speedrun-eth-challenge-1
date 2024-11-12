import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/5b9baaed340845f688c515a9a9f157ec");
  const wallet = new ethers.Wallet("0x21eedd41240af674b5ce618c50583b7aefaebdadf508be093f5c0a1a79adeb23", provider);

  const recipientAddress = "0xF1C031e5615D213A18A4E97B1a4cf01e6EDaD13D";
  const amountInEth = "0.098";

  const tx = {
    to: recipientAddress,
    value: ethers.parseEther(amountInEth),
  };

  try {
    const transactionResponse = await wallet.sendTransaction(tx);
    console.log("Transaction sent:", transactionResponse.hash);

    const receipt = await transactionResponse.wait();
    console.log("Transaction mined:", receipt.transactionHash);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

main().catch(console.error);
