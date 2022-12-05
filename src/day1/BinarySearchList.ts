export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    let m = lo + (hi-lo)/2;

    do {
        const m = Math.floor(lo+(hi-lo)/2);
        const v = haystack[m];
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