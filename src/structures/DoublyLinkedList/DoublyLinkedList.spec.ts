import {DoublyLinkedList} from "./DoublyLinkedList";

describe('DoublyLinkedList', () => {

    it('should initialise empty list', () => {
        const list = new DoublyLinkedList();
        const result = list.size;
        expect(result).toEqual(0);
    });

    it('should tell size of list with items', () => {
        const list = new DoublyLinkedList();
        const result = list.add("Hello").add("World").size;
        expect(result).toEqual(2)
    });

    it('should add a value', () => {
        const list = new DoublyLinkedList();
        const result = list.add("Hi").get(0);
        expect(result).toEqual("Hi")
    });

    it('should update a value', () => {
        const list = new DoublyLinkedList();
        const result = list.add("Hello").add("World").update(1, "Hello World").get(1);
        expect(result).toEqual("Hello World")
    });

    it('should delete a value', () => {
        const list = new DoublyLinkedList();
        const result = list.add("Hello").add("World").add("Test").delete(1).get(1);
        expect(result).toEqual("Test")
    });

    it('should map over values and transform them', () => {
        const list = new DoublyLinkedList<number>().add(1).add(2).add(3);
        const result = list.map(v => v + 1).get(2);
        expect(result).toEqual(4)
    });

    it('should return all the values as an array', () => {
        const list = new DoublyLinkedList<number>().add(1).add(2).add(3).add(4);
        const result = list.values();
        expect(result).toEqual([1, 2, 3, 4])
    });

});