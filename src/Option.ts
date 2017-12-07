export default class Option<T> {
    private value: T;
    private constructor(value: T) {
        this.value = value;
    }

    static just(value: T): Option<T> {
        return new Option<T>(value);
    }

    static none(): Option<T> {
        return new Option<T>(undefined);
    }

    isNone(): boolean {
        return this.value === undefined || this.value === null;
    }

    isJust(): boolean {
        return !this.isNone();
    }

    map<S>(mapper: (t: T) => S): Option<S> {
        return this.isNone() ? Option.none() : new Option(mapper(this.value));
    }

    unwrap(def: T): T {
        return this.isNone() ? def : this.value
    }
}