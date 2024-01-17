export default function two_crystal_balls(breaks: boolean[]): number {
<<<<<<< HEAD
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
    
=======
	let sqrt = Math.sqrt(breaks.length);
	let i = sqrt;
	for( ; i<breaks.length ; i+=sqrt){
		if(breaks[i]){
			break;
		}	
	}
	i-=sqrt;
	for(let j = i; j<breaks.length && j< i+sqrt ;j++){
		if(breaks[j]){
			return j;
		}
	}
	return -1;
}
>>>>>>> 1b2a5b0 (Shrug)
