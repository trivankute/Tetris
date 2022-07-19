import BLOCK from '../type/BLOCK_TYPE'
import {width_number_squares} from '../constances/BG_SIZES'
function STOP_BYOLDBLOCK(array:string[], block:BLOCK):boolean
{
    let solution:boolean = false;
    let coordinates = block.coordinates
    coordinates.forEach(point => {  
    if(array[point.x+point.y*width_number_squares]!=="")
        solution = true;
    })
    return solution
}
export default STOP_BYOLDBLOCK