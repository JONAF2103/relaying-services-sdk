export class ContractError extends Error {
    constructor(msg: string) {
        super(`ContractError: ${msg}`);

        Object.setPrototypeOf(this, ContractError.prototype);
    }
}
