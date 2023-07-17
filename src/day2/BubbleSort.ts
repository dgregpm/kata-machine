export default function bubble_sort(arr: number[]): void {
 let n = arr.length;
 while(n>0){
    for(let i=0 ; i<n-1 ; i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        }
    }
    n--;
 }
}