export default function two_crystal_balls(breaks: boolean[]): number {
    let sqrt = Math.sqrt(breaks.length);
    let i = 0;
    for ( ; i < breaks.length ; i+=sqrt) {
        if (breaks[i]) {
            break;
        }
    }
    i -= sqrt;
    for(let j=0;j<sqrt && i<breaks.length;j++,i++){
        if(breaks[i]){
            return i;
        }
    }
    return -1;
}
    
