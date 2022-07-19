import BLOCK from '../type/BLOCK_TYPE'
function STOP_BYLEFTWALL(block:BLOCK):boolean
{
    let solution:boolean = false;
    block.coordinates.forEach(point => {
        if(point.x<0)
            {solution = true;}
    })
    return solution
}
export default STOP_BYLEFTWALL