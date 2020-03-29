export {};

/*declare global {
    interface Date {
        comingFrom(): string;
    }
}*/

Date.prototype.comingFrom = function (): string {
    return 'this invocation of Date comes from webpack-typescript-starter project';
};