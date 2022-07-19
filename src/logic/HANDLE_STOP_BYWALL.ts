// HANDLE_STOP_BYBOTTOMWALL
import BLOCK from '../type/BLOCK_TYPE'
export function HANDLE_STOP_BYBOTTOMWALL(testBlock:BLOCK):void {
    testBlock.coordinates.forEach(point => {
        point.y--
    })
}
export function HANDLE_STOP_BYLEFTWALL(testBlock:BLOCK):void {
    testBlock.coordinates.forEach(point => {
        point.x++
    })
}
export function HANDLE_STOP_BYRIGHTWALL(testBlock:BLOCK):void {
    testBlock.coordinates.forEach(point => {
        point.x--
    })
}