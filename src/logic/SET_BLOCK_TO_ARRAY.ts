import BLOCK from '../type/BLOCK_TYPE'
import {width_number_squares} from '../constances/BG_SIZES'
function SET_BLOCK_TO_ARRAY(array:string[],block:BLOCK):void
{
    block.coordinates.forEach(point => {
        array[point.x+point.y*width_number_squares]=block.color
    })
}

export default SET_BLOCK_TO_ARRAY