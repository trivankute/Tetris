import {NO_COLOR} from '../constances/BLOCKS_COLORS'
import {BG_SQUARE_WIDTH, BG_WIDTH, BG_BORDER_WIDTH} from '../constances/BG_SIZES'
type Coordinates = {
    x:number,
    y:number
}
function BLOCKS_DRAW(array:string[],canvas:HTMLCanvasElement, response:boolean):void
{
    let current_square_width
    let current_width
    if(response)
    {
        current_width = BG_WIDTH/2
        current_square_width = BG_SQUARE_WIDTH/2
    }
    else
    {
        current_width = BG_WIDTH
        current_square_width = BG_SQUARE_WIDTH
    }
    for(let i=0;i<array.length;i++)
    {
        let CURRENT_COLOR = array[i]
        if(CURRENT_COLOR!==NO_COLOR)
        {
            let newI = i*current_square_width
            let point:Coordinates = {
                x:newI%current_width,
                y:Math.floor(newI/current_width)*current_square_width
            }
            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
            ctx.fillStyle = CURRENT_COLOR
            ctx.fillRect(point.x+BG_BORDER_WIDTH/2,point.y+BG_BORDER_WIDTH/2,current_square_width,current_square_width)
        }
    }
}
export default BLOCKS_DRAW