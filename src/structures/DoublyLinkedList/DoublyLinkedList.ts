import {List} from "../../adt";

class Node<A> {

    constructor(private previous: Node<A> | null, private value: A, private next: Node<A> | null) {
    }

    public getPrevious(): Node<A> | null {
        return this.previous;
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

    public setPrevious(node: Node<A>): Node<A> {
        this.previous = node;
        return this;
    }

    public setValue(value: A): Node<A> {
        this.value = value;
        return this;
    }

}

export class DoublyLinkedList<A> extends List<A> {

    constructor(...values: A[]) {
        super();
        values.forEach(this.add)
    }

    private head: Node<A> | null = null;

    size: number = 0;

    add(value: A): DoublyLinkedList<A> {
        if (!this.head) {
            this.head = new Node(null, value, null);
            this.size++;
            return this;
        }
        let rover: Node<A> | null | undefined = this.head;
        while (rover?.getNext()) {
            rover = rover?.getNext()
        }
        this.size++;
        rover?.setNext(new Node(rover?.getPrevious(), value, null));
        return this;
    }

    values(): Array<A> {
        let rover: Node<A> | null | undefined = this.head;
        let array: Array<A> = [];
        for (let i = 0; i < this.size; i++) {
            if (rover?.getValue()) {
                array.push(rover?.getValue());
            }
            if (rover?.getNext()) {
                rover = rover?.getNext();
            }
        }
        return array;
    }

    map<B extends A>(f: (v: A) => B): DoublyLinkedList<B> {
        let newDoublyLinkedList: DoublyLinkedList<B> = new DoublyLinkedList<B>();
        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i <= this.size; i++) {
            if (rover?.getValue()) {
                newDoublyLinkedList.add(f(rover?.getValue()))
            }
            if (rover?.getNext()) {
                rover = rover?.getNext()
            }
        }
        return newDoublyLinkedList;
    }

    get(index: number): A | null {
        if (index < 0)
            throw new Error("Index is out of bounds");
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

    delete(index: number): DoublyLinkedList<A> {
        if (index < 0)
            throw new Error("Index is out of bounds")

        if (index === 0 && this.head?.getNext() !== undefined) {
            this.head = this.head?.getNext()
            return this;
        }
        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i < index; i++) {
            if (rover?.getNext() !== null) {
                rover = rover?.getNext();
            }
            if (i === index) {
                if (rover?.getPrevious()) {
                    rover = rover?.setNext(rover.getPrevious()!);
                } else {
                    return this;
                }
            }
        }
        this.size--;
        this.head = rover as Node<A> | null;
        return this;
    }

    update(index: number, value: A): DoublyLinkedList<A> {
        if (index < 0)
            throw new Error("Index is out of bounds");

        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i <= index; i++) {
            if (rover?.getNext() !== null) {
                rover = rover?.getNext();
            }
            if (i === index) {
                rover = rover?.setNext(new Node(rover?.getPrevious(), value, rover?.getNext()));
            }
        }
        this.head = rover as Node<A> | null;
        return this;
    }

    forEach(f: (v: A) => void): void {
        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i <= this.size; i++) {
            if (rover?.getNext()) {
                f(rover?.getValue());
                rover = rover?.getNext();
            }
        }
    }

}