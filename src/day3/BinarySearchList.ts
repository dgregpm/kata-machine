export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    let m = Math.floor((hi + lo)/2);

    while(lo<hi){
        if(haystack[m] === needle){
            return true;
        } else if(haystack[m] > needle){
            hi = m;
        } else if(haystack[m] < needle)
    }
}