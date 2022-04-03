import {SinglyLinkedList} from "./SinglyLinkedList";

describe('SinglyLinkedList', () => {

    it('should initialise empty list', () => {
        const list = new SinglyLinkedList();
        const result = list.size;
        expect(result).toEqual(0);
    });

    it('should tell size of list with items', () => {
        const list = new SinglyLinkedList();
        const result = list.add("Hello").add("World").size;
        expect(result).toEqual(2)
    });

    it('should add a value', () => {
        const list = new SinglyLinkedList();
        const result = list.add("Hi").get(0);
        expect(result).toEqual("Hi")
    });

    it('should update a value', () => {
        const list = new SinglyLinkedList();
        const result = list.add("Hello").add("World").update(1, "Hello World").get(1);
        expect(result).toEqual("Hello World")
    });

    it('should delete a value', () => {
        const list = new SinglyLinkedList();
        const result = list.add("Hello").add("World").add("Test").delete(1).get(1);
        expect(result).toEqual("Test")
    });

    it('should map over values and transform them', () => {
        const list = new SinglyLinkedList<number>().add(1).add(2).add(3);
        const result = list.map(v => v + 1).get(2);
        expect(result).toEqual(4)
    });

});