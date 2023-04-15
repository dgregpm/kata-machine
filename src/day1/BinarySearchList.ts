export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    let m = lo + (hi-lo)/2;

    do {
        const m = Math.floor(lo+(hi-lo)/2);
        const v = haystack[m];
        const tmp = v;
        if(v === needle){
            return true;
        } else if(v > needle){
            hi = m;
        } else {
            lo = m + 1;
        }
    } while(lo < hi);
    let start = 0;
    let end = haystack.length;
    
    while(start < end) {
        let m = Math.floor(start + (end-start)/2)
        if(haystack[m] === needle) {
            return true;
        } else if(haystack[m] > needle) {
            end = m;
        } else {
            start = m+1;
        }
    }
    return false;
}

export function bs_list2(haystack: number[], needle: number): boolean {
    let hi = haystack.length;
    let lo = 0;
    while(lo<hi){
        let mid = Math.floor(lo+(hi-lo)/2);
        if(haystack[mid] === needle){
            return true;
        } else if(haystack[mid] > needle){
            hi = mid;
        } else {
            lo = mid+1;
        }

    }
    return false;    
}
