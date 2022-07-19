import BLOCK from '../type/BLOCK_TYPE'
function MOVE_BLOCK_AUTO(block:BLOCK):void {
    for(let i = 0; i<block.coordinates.length; i++)
    {
        block.coordinates[i].y+=1
    }
}
export default MOVE_BLOCK_AUTO