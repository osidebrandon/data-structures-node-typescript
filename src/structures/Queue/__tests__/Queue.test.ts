
import Queue from "../../Queue";

describe('Linked List Test', () => {

    let queue: Queue = new Queue();

    beforeEach(() => {
        queue.clear();
    });

    describe('Queue.enqueue', () => {
        test('adds no values', () => {
            const result = queue.getLength();
            expect(result).toBe(0);
        });
        test('adds a single value', () => {
            queue.enqueue(0);
            const result = queue.peek();
            expect(result.data).toBe(0);
        });
        test('adds multiple values', () => {
            queue.enqueue(0);
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            const result = queue.getLength();
            expect(result).toBe(4);
        });
    });
});
