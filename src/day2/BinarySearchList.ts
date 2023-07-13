export default function bs_list(haystack: number[], needle: number): boolean {
    //Binary Search
    let lo = 0;
    let hi = haystack.length;
    let m = Math.floor((hi + lo)/2);
    
    while(lo < hi){
        console.log(`(lo:${lo}, hi:${hi}, mid:${m})\n`)
        if(haystack[m] > needle){
            hi = m;
            m = Math.floor((hi + lo)/2);
        } else if (haystack[m] < needle){
            lo = m+1;
            m = Math.floor((hi + lo)/2);
        } else {
            return true
        }
    }
    return false;
}

function bs_list1(haystack: number[], needle: number): boolean{
    let lo = 0;
    let hi = haystack.length;
    let m = Math.floor((hi - lo)/2);
    while(lo<hi)

const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

console.log(bs_list(foo, 2));