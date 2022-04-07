class Node<A> {

    constructor(private value: A, private next: Node<A> | null) {
    }

    getValue(): A {
        return this.value;
    }

    getNext(): Node<A> | null {
        return this.next;
    }

    setValue(value: A): Node<A> {
        this.value = value;
        return this;
    }

    setNext(node: Node<A>): Node<A> {
        this.next = node;
        return this;
    }

}

export class Queue<A> {

    constructor(...values: A[]) {
    }

    head: Node<A> | null | undefined = null;

    size: number = 0;

    enqueue(value: A): Queue<A> {
        if (this.isEmpty()) {
            this.head = new Node(value, null);
            this.size++
            return this;
        }
        if (this.isEmpty()) {
            this.head = this.head?.setValue(value);
            this.size++;
            return this;
        }
        this.head = this.head?.setNext(new Node<A>(value, this.head?.getNext()));
        this.size++
        return this;
    }

    dequeue(): Queue<A> {
        if (this.isEmpty()) {
            return this;
        }
        this.head = this.head?.getNext();
        this.size--;
        return this;
    }

    isEmpty(): boolean {
        return this.size <= 0;
    }

    first(): A | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.head?.getValue()!;
    }

    last(): A | null {
        if (this.isEmpty()) {
            return null;
        }
        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i <= this.size; i++) {
            if (rover?.getNext()) {
                rover = rover?.getNext();
            }
            if (i === this.size) {
                return rover?.getValue()!
            }
        }
        return null;
    }

    get(index: number): A | null {
        if (index < 0)
            throw new Error("Index is out of bounds");
        if (index >= this.size)
            throw new Error('Index is out of bounds');

        if (this.head === null) {
            return null;
        }
        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i < index; i++) {
            if (rover?.getNext() === null) {
                return null
            }
            rover = rover?.getNext()
        }
        return rover?.getValue() || null;
    }

    next(): A | null {
        if (this.isEmpty()) {
            return null;
        }
        let value = this.head?.getValue();
        this.head = this.head?.getNext();
        this.size--;
        return value!;
    }

}