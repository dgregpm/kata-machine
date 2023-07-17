type Node<T> = {
    value: T,
    next?: Node<T>,
}


export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const n = {value: item} as Node<T>;
        this.length++;
        if(!this.tail){
            this.head = this.tail = n;
            return;
        }
        this.tail.next = n;
        this.tail = n;
    }
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        } else if(this.length === 1){
            this.tail = undefined;
        }
        this.length--;
        const h = this.head;
        this.head = this.head.next;
        return h.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

const q = new Queue();
q.enqueue(4);
q.deque();
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
console.log(q);