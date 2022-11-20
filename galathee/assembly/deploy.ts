import { createSC, generateEvent, fileToBase64, Storage, transferCoins } from '@massalabs/massa-as-sdk';

export function main(_: string): i32 {
    const bytes = fileToBase64('./build/main.wasm');
    const scAddress = createSC(bytes);

    generateEvent(`Contract deploy at : ${scAddress._value}`);
    transferCoins(scAddress, 20000000000);
    
    return 0;
}