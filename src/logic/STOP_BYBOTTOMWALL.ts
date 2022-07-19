import BLOCK from '../type/BLOCK_TYPE'
import {height_number_squares} from '../constances/BG_SIZES'
function STOP_BYBOTTOMWALL(block:BLOCK):boolean
{
    let solution:boolean = false;
    block.coordinates.forEach(point => {
        if(point.y===height_number_squares)
            {solution = true;}
    })
    return solution
}
export default STOP_BYBOTTOMWALL