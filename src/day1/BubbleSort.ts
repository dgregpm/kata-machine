export default function bubble_sort(arr: number[]): void {
    
    const swap = (a: number,b: number) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length + 1 - i;j++){
            if(arr[j]>arr[j+1]){
                swap(j,j+1);
            }
        }
    }
}