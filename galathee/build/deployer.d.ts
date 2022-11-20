/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * deployer/main
 * @param _args `~lib/string/String`
 * @returns `i32`
 */
export declare function main(_args: string): number;
/**
 * assembly/main/setNFT
 * @returns `~lib/string/String`
 */
export declare function setNFT(): string;
/**
 * assembly/main/mintNFT
 * @param to `~lib/string/String`
 * @returns `~lib/string/String`
 */
export declare function mintNFT(to: string): string;
/**
 * assembly/main/transferNFT
 * @param to `~lib/string/String`
 * @returns `~lib/string/String`
 */
export declare function transferNFT(to: string): string;
