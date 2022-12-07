type Node<T> = {
    val: T | undefined;
    next: Node<T> | undefined;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
//     remove(item: T): T | undefined {

// }
//     get(idx: number): T | undefined {

// }
    removeAt(idx: number): T | undefined {
        let h = this.head;
        let prev = h;
        for(let i=1;i<this.length;i++){
            prev = h;
            h = h?.next;
        }
        if(h){
            if(prev?.next){ prev.next = h?.next };
            return h.val;
        }
    }
}
