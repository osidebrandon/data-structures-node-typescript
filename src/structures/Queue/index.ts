export type Value = any;
export type Node = {
    data: any;
    nextNode?: Node;
}
export default class LinkedList {
    head: Node | undefined;

    constructor () {
        this.head = undefined;
    }

    enqueue = (value: Value): void => {
        const newNode: Node = {
            data: value,
        }
        const lastNode: Node | undefined = this.getLastNode();
        if (lastNode !== undefined) lastNode.nextNode = newNode;
        else this.head = newNode;
    }
    dequeue = (): Value => {
        if (this.head === undefined)
            throw new Error('Cannot dequeue when the queue length is 0.');
        return this.head?.data;
    }
    getLastNode = (): Node | undefined => {
        let currentNode: Node | undefined = this.head;
        while(currentNode !== undefined) {
            if (currentNode.nextNode === undefined)
                return currentNode;
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    peek = (): Value | undefined => {
        return this.head?.data;
    }
    getLength = (): number => {
        let count: number = 0;
        let currentNode: Node | undefined = this.head;
        while(currentNode !== undefined) {
            currentNode = currentNode.nextNode;
            count++;
        }
        return count;
    }
    clear = () => {
        this.head = undefined;
    }
}

