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



export function bs_list2(haystack: number[], needle: number): boolean {
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


export function bs_list3(haystack: number[], needle: number): boolean {
    let hi = haystack.length;
    let lo = 0;

    while(lo<hi) {
        let mid = Math.floor((hi+lo)/2);
        if(haystack[mid] == needle) {
            return true;
        } else if(haystack[mid] > needle) {
            hi = mid;
        } else if(haystack[mid] < needle) {
            lo = mid+1;
        }
    }
    return false
}


export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length;
    let lo = 0;
    while(lo<hi) {
        let mid = Math.floor((hi+lo)/2);
        if(haystack[mid] === needle){
            return true;
        } else if(haystack[mid] > needle) {
            hi = mid;
        } else if(haystack[mid] < needle) {
            lo = mid + 1;
        }
    }
    return false;
}
