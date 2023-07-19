export default function bubble_sort(arr: number[]): void {
    let n = arr.length;
    while(n>1){
        for(let i=0;i<n-1;i++){
            if(arr[i] > arr[i+1]){
                swap(arr,i,i+1);
            }
        }
        n--;
    }
}

function swap(arr: number[], a: number, b:number): void{
    [arr[a],arr[b]]=[arr[b],arr[a]];
}