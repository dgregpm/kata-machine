type Point = {
    x: number;
    y: number;
}

const dir = [
    [1,0],
    [0,1],
    [-1,0],
    [0,-1]
]

function helper(maze: string[], wall: string, curr: Point, end: Point, visited: boolean[][], path: Point[]): boolean{

    const x = curr.x;
    const y = curr.y; 
    //base cases
    if(y > maze.length || x > maze[0].length || x < 0 || y < 0){
        return false;
    }
    if(maze[y][x] === wall){
        return false;
    }
    if(x === end.x && y === end.y){
        path.push(curr);
        return true;
    }
    if(visited[y][x]){
        return false;
    }

    path.push(curr);
    visited[y][x] = true;

    for(let i=0 ; i<dir.length;i++){
        const [a,b] = dir[i];
        if(helper(maze,wall,{x: x+b, y: y+a},end,visited,path)){
            return true;
        }
    }

    path.pop();
    return false;
}



export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const visited: boolean[][] = [];
    for(let i=0;i<maze.length;i++){
        visited[i] = [];
        for(let j=0;j<maze[0].length;j++){
            visited[i][j]= false;
        }
    }
    const path: Point[] = [];
   
   
    helper(maze, wall, start,end,visited,path);
    return path;
}