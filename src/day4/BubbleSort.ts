export default function bubble_sort(arr: number[]): void {
    let n = arr.length;
    while(n>0){
        for(let j=0;j<n-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
        n--;
    }
}
