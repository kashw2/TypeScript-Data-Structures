import {List} from "../../adt";
import {Node} from "../Node/Node";

export class SinglyLinkedList<A> extends List<A> {

    constructor(...values: A[]) {
        super();
        values.forEach(this.add)
    }

    private head: Node<A> | null = null;

    add(value: A): SinglyLinkedList<A> {
        if (!this.head) {
            this.head = new Node<A>(value, null)
            this.size++;
            return this;
        }
        let rover: Node<A> | null | undefined = this.head;
        // @ts-ignore
        while (rover?.getNext() !== null) {
            // @ts-ignore
            rover = rover?.getNext();
        }
        this.size++;
        rover?.setNext(new Node(value, null))
        return this;
    }

    delete(index: number): SinglyLinkedList<A> {
        if (index < 0)
            throw new Error("Index is out of bounds")

        if (index === 0 && this.head?.getNext() !== undefined) {
            this.head = this.head?.getNext()
            return this;
        }
        let rover: Node<A> | null | undefined = this.head;
        let previous: Node<A> | null | undefined = null;
        for (let i = 0; i <= index; i++) {
            if (rover?.getNext() !== null) {
                rover = rover?.getNext();
            }
            if (i === index - 1) {
                previous = rover?.getNext()
            }
            if (i === index) {
                if (previous) {
                    rover = rover?.setNext(previous);
                } else {
                    return this;
                }
            }
        }
        this.size--;
        this.head = rover as Node<A> | null;
        return this;
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
        return rover?.getValue() as A | null
    }

    update(index: number, value: A): SinglyLinkedList<A> {
        if (index < 0)
            throw new Error("Index is out of bounds");

        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i <= index; i++) {
            if (rover?.getNext() !== null) {
                rover = rover?.getNext();
            }
            if (i === index) {
                rover = rover?.setNext(new Node(value, rover?.getNext()));
            }
        }
        this.head = rover as Node<A> | null;
        return this;
    }

    size: number = 0;

    map<B extends A>(f: (v: A) => B): SinglyLinkedList<B> {
        let newSinglyLinkedList: SinglyLinkedList<B> = new SinglyLinkedList<B>();
        let rover: Node<A> | null | undefined = this.head;
        for (let i = 0; i <= this.size; i++) {
            if (rover?.getValue()) {
                newSinglyLinkedList.add(f(rover?.getValue()))
            }
            if (rover?.getNext()) {
                rover = rover?.getNext()
            }
        }
        return newSinglyLinkedList;
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

}