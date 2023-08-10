function partition(arr: number[], lo: number, hi: number): number{
    const pivot = arr[hi];
    let idx = lo - 1;
    for(let i=lo; i<hi;i++){
        if(arr[i] <= pivot){
            idx++;
            [arr[i],arr[idx]] = [arr[idx], arr[i]];
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

function qs(arr: number[], lo: number, hi: number): void {
    if(lo >= hi){
        return;
    }
    const pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    qs(arr,0,arr.length-1);
}

let myarr = [5,3,2,9,8,1];

quick_sort(myarr);
console.log(myarr);