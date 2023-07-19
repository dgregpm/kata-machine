export default function two_crystal_balls(breaks: boolean[]): number {
    let n = breaks.length;
    let jump = Math.floor(Math.sqrt(n));
    let i=0;
    for(;i<n;i+=jump){
        if(breaks[i]){
            break;
        }
    }
    i-=jump;
    for(let j=i;j<n && j<=(i+jump);j++){
        if(breaks[j]){
            return j;
        }
    }
    return -1;
}