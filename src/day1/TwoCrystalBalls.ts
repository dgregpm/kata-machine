export default function two_crystal_balls(breaks: boolean[]): number {
    let jump = Math.floor(Math.sqrt(breaks.length));
    let x = jump;
    for( ; x < breaks.length ; x += jump){
        if(breaks[x]){
            break;
        }
    }
    x -= jump;
    for(let j = 0 ; j < jump && x < breaks.length  ; j++, x++) {
        if(breaks[x]){
            return x;
        }
    }
    return -1
}