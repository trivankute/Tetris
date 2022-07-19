import POINT from '../type/POINT_TYPE'
import SHAPES from '../type/SHAPES_TYPE'
import BLOCK from '../type/BLOCK_TYPE'
function ROTATE_BLOCK(block:BLOCK):void {
    let coordinates = block.coordinates
    let state = block.state
    let type = block.shape
    switch(type) {
        case "I_shape":{
            if(state===0)
            {
                block.state=1
                let rand = Math.floor(Math.random()*2)
                coordinates[0].x = coordinates[0].x + 1 + rand
                coordinates[1].x = coordinates[0].x
                coordinates[2].x = coordinates[0].x
                coordinates[3].x = coordinates[0].x
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[1].y + 1 
                coordinates[2].y = coordinates[2].y + 2 
                coordinates[3].y = coordinates[3].y + 3 
            }
            else
            {
                block.state=0
                let rand = Math.floor(Math.random()*2)
                coordinates[0].x = coordinates[0].x - 1 - rand
                coordinates[1].x = coordinates[0].x + 1
                coordinates[2].x = coordinates[0].x + 2
                coordinates[3].x = coordinates[0].x + 3
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[0].y
                coordinates[2].y = coordinates[0].y 
                coordinates[3].y = coordinates[0].y
            }
            break
        }
        case "L_shape":{
            if(state===0){
                block.state++
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x + 1
                coordinates[3].x = coordinates[3].x
                coordinates[0].y = coordinates[0].y + 2
                coordinates[1].y = coordinates[1].y + 1
                coordinates[2].y = coordinates[2].y
                coordinates[3].y = coordinates[3].y - 1
            }
            else if(state===1)
            {
                block.state++
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x + 1
                coordinates[3].x = coordinates[3].x + 2
                coordinates[0].y = coordinates[0].y - 1
                coordinates[1].y = coordinates[1].y
                coordinates[2].y = coordinates[2].y + 1
                coordinates[3].y = coordinates[3].y
            }
            else if(state===2)
            {
                block.state++
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x - 1
                coordinates[3].x = coordinates[3].x
                coordinates[0].y = coordinates[0].y - 1
                coordinates[1].y = coordinates[1].y
                coordinates[2].y = coordinates[2].y + 1
                coordinates[3].y = coordinates[3].y + 2
            }
            else if(state===3)
            {
                block.state = 0
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x - 1
                coordinates[3].x = coordinates[3].x - 2
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[1].y - 1
                coordinates[2].y = coordinates[2].y - 2
                coordinates[3].y = coordinates[3].y - 1
            }
            break
        }
        case "L_shape_reverse":{
            if(state===0){
                block.state++
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x + 1
                coordinates[3].x = coordinates[3].x + 2
                coordinates[0].y = coordinates[0].y + 1 
                coordinates[1].y = coordinates[1].y
                coordinates[2].y = coordinates[2].y - 1
                coordinates[3].y = coordinates[3].y
            }
            else if(state===1)
            {
                block.state++
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x + 1
                coordinates[3].x = coordinates[3].x
                coordinates[0].y = coordinates[0].y - 2
                coordinates[1].y = coordinates[1].y - 1
                coordinates[2].y = coordinates[2].y
                coordinates[3].y = coordinates[3].y + 1
            }
            else if(state===2)
            {
                block.state++
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x - 1
                coordinates[3].x = coordinates[3].x - 2
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[1].y + 1
                coordinates[2].y = coordinates[2].y + 2
                coordinates[3].y = coordinates[3].y + 1
            }
            else if(state===3)
            {
                block.state = 0
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x - 1
                coordinates[3].x = coordinates[3].x
                coordinates[0].y = coordinates[0].y + 1
                coordinates[1].y = coordinates[1].y
                coordinates[2].y = coordinates[2].y - 1
                coordinates[3].y = coordinates[3].y - 2
            }
            break
        }
        case "square_shape":{
            break
        }
        case "Z_shape":{
            if(state===0)
            {
                block.state=1
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x - 1
                coordinates[3].x = coordinates[3].x - 2
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[1].y + 1 
                coordinates[2].y = coordinates[2].y
                coordinates[3].y = coordinates[3].y + 1
            }
            else
            {
                block.state=0
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x + 1
                coordinates[3].x = coordinates[3].x + 2
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[1].y - 1
                coordinates[2].y = coordinates[2].y
                coordinates[3].y = coordinates[3].y - 1
            }
            break
        }
        case "Z_shape_reverse":{
            if(state===0)
            {
                block.state=1
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x + 1
                coordinates[3].x = coordinates[3].x
                coordinates[0].y = coordinates[0].y - 1
                coordinates[1].y = coordinates[1].y
                coordinates[2].y = coordinates[2].y + 1
                coordinates[3].y = coordinates[3].y + 2
            }
            else
            {
                block.state=0
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x
                coordinates[2].x = coordinates[2].x - 1
                coordinates[3].x = coordinates[3].x
                coordinates[0].y = coordinates[0].y + 1
                coordinates[1].y = coordinates[1].y
                coordinates[2].y = coordinates[2].y - 1
                coordinates[3].y = coordinates[3].y - 2
            }
            break
        }
        case "Tank_shape":{
            if(state===0){
                block.state++
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x + 1
                coordinates[2].x = coordinates[2].x
                coordinates[3].x = coordinates[3].x - 1
                coordinates[0].y = coordinates[0].y + 1 
                coordinates[1].y = coordinates[1].y - 1
                coordinates[2].y = coordinates[2].y
                coordinates[3].y = coordinates[3].y + 1
            }
            else if(state===1)
            {
                block.state++
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x + 1
                coordinates[2].x = coordinates[2].x
                coordinates[3].x = coordinates[3].x - 1
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[1].y
                coordinates[2].y = coordinates[2].y - 1
                coordinates[3].y = coordinates[3].y - 2
            }
            else if(state===2)
            {
                block.state++
                coordinates[0].x = coordinates[0].x - 1
                coordinates[1].x = coordinates[1].x - 1
                coordinates[2].x = coordinates[2].x
                coordinates[3].x = coordinates[3].x + 1
                coordinates[0].y = coordinates[0].y
                coordinates[1].y = coordinates[1].y + 2
                coordinates[2].y = coordinates[2].y + 1
                coordinates[3].y = coordinates[3].y
            }
            else if(state===3)
            {
                block.state = 0
                coordinates[0].x = coordinates[0].x + 1
                coordinates[1].x = coordinates[1].x - 1
                coordinates[2].x = coordinates[2].x
                coordinates[3].x = coordinates[3].x + 1
                coordinates[0].y = coordinates[0].y - 1
                coordinates[1].y = coordinates[1].y - 1
                coordinates[2].y = coordinates[2].y
                coordinates[3].y = coordinates[3].y + 1
            }
            break
        }
        default: {break}
    }
    block.coordinates=coordinates
}

export default ROTATE_BLOCK