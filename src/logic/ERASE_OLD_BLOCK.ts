import BLOCK from '../type/BLOCK_TYPE'
import {width_number_squares} from '../constances/BG_SIZES'
function ERASE_OLD_BLOCK(array:string[], oldBlock:BLOCK){
    oldBlock.coordinates.forEach(point => {
        array[point.x+point.y*width_number_squares]=""
    })
}
export default ERASE_OLD_BLOCK