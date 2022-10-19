export default function bs_list(haystack: number[], needle: number): boolean {
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