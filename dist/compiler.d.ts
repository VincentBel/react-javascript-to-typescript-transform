import { TransformFactoryFactory } from '.';
/**
 * Compile and return result TypeScript
 * @param filePath Path to file to compile
 */
export declare function compile(filePath: string, factoryFactories: TransformFactoryFactory[]): string;
