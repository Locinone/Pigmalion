import * as massa from "@massalabs/massa-as-sdk";
import { balance, transferCoins } from "@massalabs/massa-as-sdk";
import { mint, transfer } from "./NFT/nft";

// CREATE an NFT(either through editing an already existing NFT's image or through uploading an image and start a tree)
export function mintNFT(to: string): string {
    const amount = 5;
    const b = balance();
    transferCoins(to, amount);
    return mint(to);
}

// transfers an NFT to the to address
export function transferNFT(to: string): string {
    return transfer(to);
}