export class Node<A> {

    constructor(private value: A, private next: Node<A> | null) {
    }

    public getValue(): A {
        return this.value;
    }

    public getNext(): Node<A> | null {
        return this.next;
    }

    public setNext(node: Node<A>): Node<A> {
        this.next = node;
        return this;
    }

    public setValue(value: A): Node<A> {
        this.value = value;
        return this;
    }

}