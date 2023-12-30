export default function bubble_sort(arr: number[]): void {
	let size = arr.length;
	for(let i = 0; i<size; i++){
		for(let j = 0; j<size - i - 1; j++){
			if(arr[j]>arr[j+1]){
				[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
			}
		}
	}

}
