export class ContractError extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, ContractError.prototype);
    }
}
