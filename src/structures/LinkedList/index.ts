
export type Node = {
    data: any;
    nextNode?: Node;
}
export default class LinkedList {
    head: Node | undefined;

    constructor () {
        this.head = undefined;
    }

    add = (value: any): void => {
        const newNode: Node = {
            data: value,
        }
        const lastNode: Node | undefined = this.getLastNode();
        if (lastNode !== undefined) lastNode.nextNode = newNode;
        else this.head = newNode;
    }
    getHead = (): Node | undefined => {
        return this.head;
    }
    getAt = (index: number): any => {

        if (
            this.isEmpty() || 
            index < 0 || 
            index >= this.getLength()
        ) return;

        let count: number = 0;
        let currentNode: Node | undefined = this.head;
        while(currentNode !== undefined && count < index) {
            currentNode = currentNode.nextNode;
            count++;
        }
        return currentNode;
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
    getLength = (): number => {
        let count: number = 0;
        let currentNode: Node | undefined = this.head;
        while(currentNode !== undefined) {
            currentNode = currentNode.nextNode;
            count++;
        }
        return count;
    }
    isEmpty = (): boolean => {
        return this.getLength() > 0 ? false : true;
    }
    clear = () => {
        this.head = undefined;
    }
    print = (inline: boolean = false): void => {
        console.log('[');
        if (inline) {
            // TODO: Implement.
        }else{
            this.forEach((item: any) => {
                console.log('\t' + item + ',');
            });
        }
        console.log(']');
    }
    forEach = (
        callback: (
            item: any, 
            index: number
    ) => void): void => {
        let index: number = 0;
        let currentNode: Node | undefined = this.head;
        while(currentNode !== undefined) {
            callback(currentNode.data, index);
            currentNode = currentNode.nextNode;
            index++;
        }
    }
}


