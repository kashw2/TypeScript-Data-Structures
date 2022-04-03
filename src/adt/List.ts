export abstract class List<A> {

    abstract add(value: A): List<A>;

    abstract get(index: number): A | null;

    abstract update(index: number, value: A): List<A>;

    abstract delete(index: number): List<A>;

    abstract map<B extends A>(f: (v: A) => B): List<B>;

    abstract values(): Array<A>;

    abstract forEach(f: (v: A) => void): void;

    size: number = 0;

}