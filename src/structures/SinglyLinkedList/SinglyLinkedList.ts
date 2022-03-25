import {List} from "../../adt";
import {Node} from "../Node/Node";

export class SinglyLinkedList<A> extends List<A> {

    constructor(...values: A[]) {
        super();
        values.forEach(this.add)
    }

    private head: Node<A> | null = null;

    add(value: A): List<A> {
        if (this.head === null) {
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

    delete(index: number): List<A> {
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

    update(index: number, value: A): List<A> {
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

}