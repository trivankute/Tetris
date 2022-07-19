import BLOCK from '../type/BLOCK_TYPE'
function MOVE_BLOCK_MANUALLY (block:BLOCK, direction:string) {
    switch(direction) {
        case 's': {
            block.coordinates.forEach(point => {
                point.y = point.y + 1
            })
            break
        }
        case 'a': {
            block.coordinates.forEach(point => {
                point.x = point.x - 1
            })
            break
        }
        case 'd': {
            block.coordinates.forEach(point => {
                point.x = point.x + 1
            })
            break
        }
        default :{
            break
        }
    }
}
export default MOVE_BLOCK_MANUALLY