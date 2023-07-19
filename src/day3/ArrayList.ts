export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private arr: T[];
    

    constructor(count: number) {
        this.length = 0;
        this.arr = [];
        this.capacity = count;
    }

    private shiftLeft(idx: number): void{
        for(let i=idx;i<this.length-1;i++){
            this.arr[i] = this.arr[i+1];
        }
    }

    private shiftRight(idx: number): void{
        for(let i=this.length ;i>idx;i--){
            this.arr[i] = this.arr[i-1];
        }
    }

    prepend(item: T): void {
        this.shiftRight(0);
        this.arr[0] = item;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        this.shiftRight(idx);
        this.arr[idx] = item;
        this.length++;
    }
    append(item: T): void {
        this.arr[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        for(let i=0;i<this.length;i++){
            if(this.arr[i] === item){
                const temp = this.arr[i];
                this.shiftLeft(i);
                this.length--;
                return temp;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if(!this.arr[idx]){
            return undefined;
        }
        return this.arr[idx];
    }
    removeAt(idx: number): T | undefined {
        if(!this.arr[idx]){
            return undefined;
        }
        const temp = this.arr[idx];
        this.shiftLeft(idx);
        this.length--;
        return temp;
    }
}