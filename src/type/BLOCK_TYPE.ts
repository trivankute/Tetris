import POINT from './POINT_TYPE'
type BLOCK = {
    mainPoint:POINT,
    color:string,
    shape:string,
    coordinates:POINT[],
    state:number
    [key:string]:POINT|string|POINT[]|number,
}
export default BLOCK