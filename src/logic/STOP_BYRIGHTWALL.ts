import BLOCK from '../type/BLOCK_TYPE'
import {width_number_squares} from '../constances/BG_SIZES'
function STOP_BYRIGHTWALL(block:BLOCK):boolean
{
    let solution:boolean = false;
    block.coordinates.forEach(point => {
        if(point.x===width_number_squares)
            {solution = true;}
    })
    return solution
}
export default STOP_BYRIGHTWALL