export default function two_crystal_balls(breaks: boolean[]): number {
	let sqrt = Math.floor(Math.sqrt(breaks.length));
	let cnt = 0;
	for(;cnt<breaks.length;cnt+=sqrt){
		if(breaks[cnt]){
			break;
		}
	}

	cnt-=sqrt;
	for(let i=0;i<sqrt && cnt<breaks.length;i++,cnt++){
		if(breaks[cnt]){
			return cnt;
		}
	}

	return -1;


}
