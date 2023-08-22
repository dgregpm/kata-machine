export function bs_list1(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    let m = Math.floor((hi+lo)/2);

    while(lo<hi){
        if(haystack[m] === needle){
            return true;
        } else if(haystack[m] < needle){
            lo = m+1;
        } else if(haystack[m] > needle){
            hi = m;
        }
        m = Math.floor((hi+lo)/2);
    }
    return false;
}



export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let high = haystack.length;

    while(lo<high){
        let mid = Math.floor((high+lo)/2);
        if(needle === haystack[mid]){
            return true;
        } else if(needle > haystack[mid]){
            lo = mid + 1;
        } else if(needle < haystack[mid]){
            high = mid;
        }        
    }
    return false;
}

