
import LinkedList from "..";

describe('Linked List Test', () => {

    let list: LinkedList = new LinkedList();

    beforeEach(() => {
        list.clear();
    });

    describe('LinkedList.add', () => {
        test('adds no values', () => {
            const result = list.getLength();
            expect(result).toBe(0);
        });
        test('adds a single value', () => {
            list.add(0);
            const result = list.getAt(0);
            expect(result.data).toBe(0);
        });
        test('adds multiple values', () => {
            list.add(0);
            list.add(1);
            list.add(2);
            list.add(3);
            const result = list.getLength();
            expect(result).toBe(4);
        });
    });
    describe('LinkedList.getHead', () => {
        test('this.head = undefined', () => {
            const result = list.getHead();
            expect(result).toBe(undefined);
        });
        test('this.head = Node', () => {
            list.add(0);
            const result = list.getHead();
            expect(result).toHaveProperty('data');
            expect(result).not.toHaveProperty('nextNode');
        });
    });
    describe('LinkedList.getAt', () => {
        test('length is 0', () => {
            const result = list.getAt(0);
            expect(result).toBe(undefined);
        });
        test('index is too low', () => {
            list.add(0);
            const result = list.getAt(-1);
            expect(result).toBe(undefined);
        });
        test('index is too high', () => {
            list.add(0);
            const result = list.getAt(1);
            expect(result).toBe(undefined);
        });
        test('index is good low', () => {
            list.add(0);
            list.add(1);
            const result = list.getAt(0);
            expect(result).toHaveProperty('data');
        });
        test('index is good high', () => {
            list.add(0);
            list.add(1);
            const result = list.getAt(1);
            expect(result).toHaveProperty('data');
        });
    });
    describe('LinkedList.getLastNode', () => {
        test('list length is 0', () => {
            const result = list.getLastNode();
            expect(result).toBe(undefined);
        });
        test('last node is the head node', () => {
            list.add(0);
            const result = list.getLastNode();
            expect(result).toHaveProperty('data');
        });
        test('last node is last node', () => {
            list.add(0);
            list.add(1);
            list.add(2);
            const result = list.getLastNode()?.data;
            expect(result).toBe(2);
        });
    });
    describe('LinkedList.getLength', () => {
        test('list length is 0', () => {
            const result = list.getLength();
            expect(result).toBe(0);
        });
        test('list length is 1', () => {
            list.add(0);
            const result = list.getLength();
            expect(result).toBe(1);
        });
        test('list length is n', () => {
            list.add(0);
            list.add(1);
            list.add(2);
            const result = list.getLength();
            expect(result).toBe(3);
        });
    });
    describe('LinkedList.isEmpty', () => {
        test('list length is 0', () => {
            const result = list.isEmpty();
            expect(result).toBe(true);
        });
        test('list length is 1', () => {
            list.add(0);
            const result = list.isEmpty();
            expect(result).toBe(false);
        });
        test('list length is n', () => {
            list.add(0);
            list.add(1);
            list.add(2);
            const result = list.isEmpty();
            expect(result).toBe(false);
        });
    });
});
