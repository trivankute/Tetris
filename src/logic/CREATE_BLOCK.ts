import BLOCKS_COLORS from '../constances/BLOCKS_COLORS'
import INITIAL_BLOCKS from '../constances/INITIAL_SHAPES'
import SHAPES_STATES from '../constances/SHAPES_STATES'
import POINT from '../type/POINT_TYPE'
import BLOCK from '../type/BLOCK_TYPE'
import {width_number_squares} from '../constances/BG_SIZES'
import CREATE_INIT_SHAPE from '../logic/CREATE_INIT_SHAPE'

function CREATE_BLOCK():BLOCK{
    const randomColorNumber:number = Math.floor(Math.random()*BLOCKS_COLORS.length)
    const randomShapeNumber:number = Math.floor(Math.random()*INITIAL_BLOCKS.length)
    const mainPoint:POINT = {x:Math.floor(Math.random()*4+Math.floor(width_number_squares/3)),y:0}
    const color:string = BLOCKS_COLORS[randomColorNumber]
    const shape:string = INITIAL_BLOCKS[randomShapeNumber]
    const randomStateShapeNumber:number = Math.floor(Math.random()*SHAPES_STATES[shape])
    const coordinates:POINT[] = CREATE_INIT_SHAPE(shape,mainPoint,randomStateShapeNumber)

    return {
        "mainPoint":mainPoint,
        "color":color,
        "shape":shape,
        "coordinates":coordinates,
        "state":randomStateShapeNumber
    }
}

export default CREATE_BLOCK