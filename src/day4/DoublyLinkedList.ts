class Node<T>{
    public value: T;
    public next?: Node<T>;
    public prev?: Node<T>;
    
    constructor(item: T){
        this.value = item;
        this.next = this.prev = undefined;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    
    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = new Node<T>(item);
        this.length++;
        if(!this.head){
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if(idx > this.length){
            throw new Error('Oh No');
        } else if(idx === this.length){
            this.append(item);
            return;
        } else if(idx === 0){
            this.prepend(item);
            return;
        }
        this.length++;
        let curr = this.head;
        for(let i=0;curr && i<idx;i++){
            curr = curr.next;
        }
        curr = curr as Node<T>;
        const node = new Node<T>(item);
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;
        if(curr.prev){
            curr.prev.next = curr;
        }
    }

    append(item: T): void {
        this.length++;
        const node = new Node<T>(item);
        if(!this.tail){
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for(let i=0;curr && i<this.length;i++){
            if(curr.value === item){
                break;
            }
            curr = curr.next;
        }

        if(!curr){
            return undefined;
        }

        this.length--;

        if(this.length === 0){
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if(curr.prev){
            curr.prev = curr.next;
        }

        if(curr.next){
            curr.next = curr.prev;
        }

        if(curr === this.head){
            this.head = curr.next;
        }

        if(curr === this.tail){
            this.tail = curr.prev;
        }

        curr.prev = curr.next = undefined;
        return curr.value;
    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

    }
}