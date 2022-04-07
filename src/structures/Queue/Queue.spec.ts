import {Queue} from "./Queue";

describe('Queue', () => {

    it('should increase size', () => {
        const queue = new Queue<number>().enqueue(1).enqueue(2);
        const result = queue.size;
        expect(result).toEqual(2)
    });

    it('should queue an item', () => {
        const queue = new Queue<number>().enqueue(1).enqueue(2);
        const result = queue.get(0);
        expect(result).toEqual(1)
    });

    it('should dequeue an item', () => {
        const queue = new Queue<number>().enqueue(1).enqueue(2).dequeue();
        const result = queue.get(0);
        expect(result).toEqual(2)
    });

    it('should select first item in queue', () => {
        const queue = new Queue<number>().enqueue(1).enqueue(2);
        const result = queue.first()
        expect(result).toEqual(1)
    });

    it('should select last item in queue', () => {
        const queue = new Queue<number>().enqueue(1).enqueue(2);
        const result = queue.last()
        expect(result).toEqual(2)
    });

    it('should get the next value', () => {
        const queue = new Queue<number>().enqueue(1).enqueue(2);
        const result = queue.next();
        expect(result).toEqual(1);
    });


})