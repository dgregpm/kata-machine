type Node<T> = {
    val: T | undefined;
    next: Node<T> | undefined;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    getNode(idx: number): Node<T> | undefined {
        let l = this.head;
        for(let i=0;i<idx;i++) {
            l = l?.next;
        }
        return l;
    }

    prepend(item: T): void {
        let node = {val: item} as Node<T>;
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if(idx === 0) {
          this.prepend(item);
        } else {
          const node = {val: item} as Node<T>;
          let prev = this.getNode(idx-1);
          let curr = prev?.next;
          if(prev){
            prev.next = node;
            node.next = curr;
            this.length++;
          }
        }
       
    }

    append(item: T): void {
        const node = {val: item} as Node<T>;
        if(this.length > 1){
          let l = this.getNode(this.length-1);
          if(l){l.next = node;}
        } else if (this.length === 1 && this.head) {
            this.head.next = node;
        } else if (this.length === 0) {
            this.head = node;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let l = this.head;
        let result = undefined;
        
        for(let i=0;i<this.length;i++) {
            if(l?.val === item) {
                result = this.removeAt(i);
            }
            l = l?.next;
        }
        return result;
    }

    get(idx: number): T | undefined {
        return this.getNode(idx)?.val;
    }

    removeAt(idx: number): T | undefined {
        let prev = this.getNode(idx-1);
        let curr = prev?.next;
        let result = undefined;

        if(this.length === 0){
            return undefined;
        } else if (idx === 0){
            result = this.head?.val
            this.head = this.head?.next;
            this.length--;
        } else if(prev && curr) {
            if(prev?.next){
                prev.next = curr.next;
                result = curr.val;
                this.length--;
            }
        }
        return result;
    }
}
