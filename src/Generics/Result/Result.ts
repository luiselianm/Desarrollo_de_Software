export class Result<T> {
    private value: T;
    private _error: Error;
    private _isError: boolean;

    private constructor(isError: boolean, value?: T, _error?: Error) {
        this.value = value!;
        this._error = _error!;
        this._isError = isError;
    }

    public isError(): boolean {
        return this._isError;
    }

    public getValue(): T {
        if (this.isError()) throw new Error();
        return this.value;
    }

    public getError(): Error {
        if (!this.isError()) throw new Error();
        return this._error;
    }
    
    public static makeResult<T>(value: T) {
        return new Result<T>(false, value);
    }

    public static makeError<T>(error: Error) {
        return new Result<T>(true, undefined, error);
    }
}