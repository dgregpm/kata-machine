class Node<T> {
    public val: T;
    public next: Node<T> | undefined;
    constructor(item: T){
        this.val = item;
    }
}

export default class Queue<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue(item: T): void {
        if(!item){return;}
        const node = new Node<T>(item);
        if(this.length === 0) {
            this.head = this.tail = node;
            this.length++;
        } else if(this.length > 0) {
            if(this.tail){
                this.tail.next = node;
                this.tail = node;
                this.length++;
            }
        }
    }
    deque(): T | undefined {
        if(this.length === 0){return undefined;}
        const value = this.head?.val;
        this.head = this.head?.next;
        this.length--;
        return value;
    }
    peek(): T | undefined {
        if(this.length === 0){return undefined;}
        return this.head?.val
    }
}