import { FunctionType } from './FunctionType';

export type DecoratorHandler = <T extends FunctionType>(fn: T) => T;
