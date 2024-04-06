export class Optional<T> {

    private assigned: boolean

    constructor(
        private value: T | undefined,
    ) {
        if (value) {
            this.value = value;
            this.assigned = true;
        } else {
            this.assigned = false
        }
    }

    hasValue(): boolean {
        return !!this.value
    }

    getValue(): T {
        if (!this.hasValue()) {
            throw new Error("The object is undefined");
        }
        return <T>this.value;
    }
}


