const dir = [
    [0,1],
    [1,0],
    [0,-1],
    [-1,0]
]

type Point = {
    x: number;
    y: number;
}

const jaylans_maze = [
    'xxxx x      xxx',
    'xx   x xxxx xxx',
    'xx xxx x    xxx',
    'xx xxx   xxxxxx',
    '    xxxx xxxxxx',
    'xx  xxxx   xxxx',
    'xx xxxxxxx xxxx',
    'xx xxxxxxx xxxx',
    'xx   xxxxx xxxx',
    'xxx    xx   xxx',
    'xxxxxx xx x xxx',
    'xxxxxx    x   x',
    'xxxxxx xxxxxx  ',
    'xxxxxx xxxxxxxx',
    'xxxx   xxxxxxxx',
    'xx   xxxxxxxxxx',
    'xx xxxxxxxxxxxx',
    'xx xxxxxxxxxxxx',
    'xx xxxxxxxxxxxx'
];

function helper(maze: string[], wall: string, end: Point, curr: Point, visit: boolean[][], path: Point[]): boolean{
    let x = curr.x;
    let y = curr.y;
    //base cases
    //off the map
    if(maze[0].length <= x || maze.length <= y || x < 0 || y < 0){
        return false;
    }
    //hit a wall
    if(maze[y][x] === wall){
        return false;
    }
    //reach a visited spot
    if(visit[y][x]){
        return false;
    }
    //find the end
    if(x === end.x && y === end.y){
        path.push(curr);
        return true;
    }

    //pre recurse
    path.push(curr);
    visit[y][x] = true;
    
    //recursion
    for(let i=0;i<dir.length;i++){
        const [a,b] = dir[i];
        if(helper(maze,wall,end,{x: curr.x + a, y: curr.y + b}, visit,path)){
            return true;
        }
    }

    //post recurse
    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const result: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    //printMaze(result);
    printMaze(result);
    console.log('');
    helper(maze,wall,end,start,seen,result);
    printMaze(result);
    return result;
}

function printMaze(path: Point[]){
    for (let i = jaylans_maze.length-1; i >= 0; i--) {
        let tmp = '';
        for (let j = 0; j < jaylans_maze[0].length; j++) {
            let isPath = false;
            for(let k = 0;k<path.length ; k++){
                if([j,i].toString() === Object.values(path[k]).toString()){
                    isPath = true;
                }
            }
            if(isPath){
                tmp += ('.' + '  ');
            } else {
                tmp += (jaylans_maze[i][j] + '  ');
            }   
            
        }
        console.log(tmp); 
    }
}

solve(jaylans_maze,'x',{x: 6, y: 0}, {x: 4, y: 0});
