export class Either<T, E> {

    private succeed: T | undefined;
    private error: E | undefined;
    private errorAssigned: boolean;

    private constructor(succeed: T | undefined, error: E | undefined) {
        if (error) {
            this.error = error;
            this.errorAssigned = true;
        } else {
            this.succeed = succeed;
            this.errorAssigned = false;
        }
    }

    returnSucceed(): T {
        return <T>this.succeed;
    }

    returnError(): E {
        return <E>this.error;
    }

    errorValidator() {
        return this.errorAssigned;
    }

    static createSucceed<T>(succeed: T): Either<T, undefined> {
        return new Either(succeed, undefined);
    }

    static createError<E>(error: E): Either<undefined, E> {
        return new Either(undefined, error);
    }
}